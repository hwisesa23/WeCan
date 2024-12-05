import { useState, FormEvent } from 'react'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

export default function PostCharity() {
  const [charityData, setCharityData] = useState({
    name: '',
    description: '',
    targetAmount: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []); // Request wallet connection
    const signer = provider.getSigner(); // Get the signer
  
    // Get the current wallet address
    const address = await signer.getAddress();
    const sdk = new ThirdwebSDK(
      new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL).getSigner(address),
      {
        clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
      }
    );
    
    const contract = await sdk.getContract("0x99496857A5ECF26A6b1c14C0531f032882B5C344");
    const data = await contract.call("createCharityPost", [charityData.name,0,0,""]);
    console.log(data);
    return { props: { data } };
  }

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const { name, value } = e.currentTarget;
    setCharityData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Post a New Charity</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Charity Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={charityData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={charityData.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="targetAmount" className="block text-gray-700 font-bold mb-2">Target Amount (ETH)</label>
          <input
            type="number"
            id="targetAmount"
            name="targetAmount"
            value={charityData.targetAmount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
        //   disabled={isLoading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        >
          Submit Charity
          {/* {isLoading ? 'Creating Charity...' : 'Create Charity'} */}
        </button>
      </form>
    </div>
  )
}
