// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract WeCan {
    uint256 _charityPostCounter = 0;
    address _owner;

    enum AdminRole{
        ADMIN,
        SUPER_ADMIN
    }

    struct User{
        string name;
        uint256 balance;
        bool isKycApproved;
        bool isActive;
    }

    struct Admin{
        string name;
        AdminRole role;
        bool isActive;
    }

    struct CharityPost{
        uint256 id;
        string title;
        uint256 expirationTime;
        uint256 donationTarget;
        string ipfsCid; // Image and description
        uint256 totalDonation; // Sum of all donations
        uint256 withdrawnDonation; // Donations already withdrawn 
        address createdBy;
        uint256 createdAt;
        bool isActive;
    }

    struct Donation {
        uint256 charityPostId;
        address donor;
        uint256 amount;
        uint256 timestamp;
    }

    struct WithdrawnDonation {
        uint256 charityPostId;
        address recipient;
        uint256 amount;
        uint256 timestamp;
        string ipfsCid; // Description
    }

    mapping(address => User) _users;
    mapping(address => Admin) _admins;
    mapping(uint256 => CharityPost) _charityPosts;
    mapping(uint256 => Donation[]) _donations;
    mapping(uint256 => WithdrawnDonation[]) _withdrawnDonationByCharity;

    event UserRegistered(
        address indexed userAddress,
        string name
    );

    event AdminRegistered(
        address indexed adminAddress,
        string name
    );

    event CharityPostCreated(
        uint256 indexed id,
        string title,
        uint256 expirationTime,
        uint256 donationTarget,
        address createdBy
    );

    event Donated(
        uint256 indexed charityPostId,
        address donorAddress,
        uint256 amount
    );

    event UserWithdrawDonation(
        uint256 indexed charityPostId,
        address recipientAddress,
        uint256 amount
    );
    
    modifier onlySuperAdmin(){
        require(_admins[msg.sender].isActive && _admins[msg.sender].role == AdminRole.SUPER_ADMIN, "Unauthorized!");
        _;
    }

    modifier onlyUser(){
        require(_users[msg.sender].isActive, "You must register first");
        _;
    }

    modifier onlyOwner(){
        require(msg.sender == _owner, "Unauthorized!");
        _;
    }

    constructor(){
        _owner = msg.sender;
    }

    function registerUser(string calldata _name) external{
        require(!_users[msg.sender].isActive, "User already registered");
        
        _users[msg.sender] = User({
            name: _name,
            balance: 0,
            isKycApproved: false,
            isActive: true
        });

        emit UserRegistered(msg.sender, _name);
    }

    function approveUserKyc() external{
        require(_users[msg.sender].isActive, "User invalid");

        _users[msg.sender].isKycApproved = true;
    }   

    function registerAdmin(string calldata _name) external onlySuperAdmin{
        require(!_admins[msg.sender].isActive, "Admin already registered");
        
        _admins[msg.sender] = Admin({
            name: _name,
            role: AdminRole.ADMIN,
            isActive: true
        });

        emit AdminRegistered(msg.sender, _name);
    }

    function registerSuperAdmin(string calldata _name) external onlyOwner{
        require(!_admins[msg.sender].isActive, "Admin already registered");

        _admins[msg.sender] = Admin({
            name: _name,
            role: AdminRole.SUPER_ADMIN,
            isActive: true
        });

        emit AdminRegistered(msg.sender, _name);
    }

    //Charity
    function createCharityPost(string calldata _title, uint256 _expirationTime, uint256 _donationTarget, string calldata _ipfsCid) external onlyUser{
        require(_expirationTime > block.timestamp+86400, "The expiration time should be set to 1 day from the current time");

        _charityPostCounter+=1;
        
        _charityPosts[_charityPostCounter] = CharityPost({
            id: _charityPostCounter,
            title: _title,
            expirationTime: _expirationTime,
            donationTarget: _donationTarget,
            ipfsCid: _ipfsCid,
            totalDonation: 0,
            withdrawnDonation: 0,
            createdBy: msg.sender,
            createdAt: block.timestamp,
            isActive: true
        });

        emit CharityPostCreated(_charityPostCounter, _title, _expirationTime, _donationTarget, msg.sender);
    }

    function getCharityPost(uint256 page, uint256 pageSize) view external returns(CharityPost[] memory){
        require(page > 0 && pageSize > 0, "Page and Page Size should be greater than 0");

        uint256 startIndex = (page-1)*pageSize+1;
        uint256 endIndex = page*pageSize > _charityPostCounter ? _charityPostCounter : page*pageSize;

        CharityPost[] memory posts = new CharityPost[](pageSize);

        for (uint256 i = startIndex; i <= endIndex; i++) {
            posts[i-1] = _charityPosts[i];
        }

        return posts;
    }

    function donate(uint256 _charityPostId) external payable onlyUser{
        require(_charityPosts[_charityPostId].isActive, "Charity post invalid");
        require(msg.value > 0, "Donation amount should be greater than 0");

        _charityPosts[_charityPostId].totalDonation += msg.value;

        _donations[_charityPostId].push(
            Donation({
                charityPostId: _charityPostId,
                donor: msg.sender,
                amount: msg.value,
                timestamp: block.timestamp
            })
        );

        emit Donated(_charityPostId, msg.sender, msg.value);
    }

    function withdrawDonation(uint256 _charityPostId,uint256 amount) external payable onlyUser{
        require(_charityPosts[_charityPostId].isActive, "Charity post invalid");
        require(_charityPosts[_charityPostId].createdBy == msg.sender, "You are not the owner of this charity");
        require(_charityPosts[_charityPostId].expirationTime > block.timestamp, "Charity is expired");
        require(_charityPosts[_charityPostId].totalDonation - _charityPosts[_charityPostId].withdrawnDonation >= amount, "Balance insufficient");

        _charityPosts[_charityPostId].withdrawnDonation += amount;

        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");

        emit UserWithdrawDonation(_charityPostId, msg.sender, amount);
    }
    
    function updateCharityPostStateToExpired() external { // Cron Job with Chainlink [UpKeep Address = 0x08851F34653B4030f04fef76ba6182DAF9514b76]
        for(uint i = 1; i <= _charityPostCounter; i++){
            CharityPost memory _charityPost = _charityPosts[i];
            if(_charityPost.isActive == true && _charityPost.expirationTime >= block.timestamp){
                _charityPost.isActive = false;
            }
        }
    }
}
