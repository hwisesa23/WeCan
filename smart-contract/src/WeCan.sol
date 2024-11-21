// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract WeCan {
    address owner;

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

    mapping(address => User) users;
    mapping(address => Admin) admins;

    event UserRegistered(
        address indexed userAddress,
        string name
    );

    event AdminRegistered(
        address indexed adminAddress,
        string name
    );
    
    modifier onlySuperAdmin(){
        require(admins[msg.sender].isActive && admins[msg.sender].role == AdminRole.SUPER_ADMIN, "Unauthorized!");
        _;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Unauthorized!");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    function registerUser(string calldata _name) external{
        require(!users[msg.sender].isActive, "User already registered");
        
        users[msg.sender] = User({
            name: _name,
            balance: 0,
            isKycApproved: false,
            isActive: true
        });

        emit UserRegistered(msg.sender, _name);
    }

    function approveUserKyc() external{
        require(users[msg.sender].isActive, "User invalid");

        users[msg.sender].isKycApproved = true;
    }   

    function registerAdmin(string calldata _name) external onlySuperAdmin{
        require(!admins[msg.sender].isActive, "Admin already registered");
        
        admins[msg.sender] = Admin({
            name: _name,
            role: AdminRole.ADMIN,
            isActive: true
        });

        emit AdminRegistered(msg.sender, _name);
    }

    function registerSuperAdmin(string calldata _name) external onlyOwner{
        require(!admins[msg.sender].isActive, "Admin already registered");

        admins[msg.sender] = Admin({
            name: _name,
            role: AdminRole.SUPER_ADMIN,
            isActive: true
        });

        emit AdminRegistered(msg.sender, _name);
    }

}
