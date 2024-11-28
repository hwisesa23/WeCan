'use client'

import { useState } from 'react'
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers'

export default function PostCharity() {
  const [charityData, setCharityData] = useState({
    name: '',
    description: '',
    targetAmount: '',
  })

//   const { contract } = useContract("YOUR_CONTRACT_ADDRESS");
//   const { mutateAsync: createCharity, isLoading } = useContractWrite(contract, "createCharity")

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const data = await createCharity({ args: [
//         charityData.name,
//         charityData.description,
//         ethers.utils.parseEther(charityData.targetAmount)
//       ] });
//       console.info("contract call success", data);
//       // Reset form after successful submission
//       setCharityData({ name: '', description: '', targetAmount: '' });
//     } catch (err) {
//       console.error("contract call failure", err);
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCharityData(prev => ({ ...prev, [name]: value }));
//   }

  const handleSubmit = async () => {
  }

  const handleChange = () => {
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
          {/* {isLoading ? 'Creating Charity...' : 'Create Charity'} */}
        </button>
      </form>
    </div>
  )
}
