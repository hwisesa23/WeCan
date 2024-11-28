'use client'

import { useState } from 'react'
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers'

export function CharityCard() {
  const [donationAmount, setDonationAmount] = useState('')
  const { contract } = useContract("YOUR_CONTRACT_ADDRESS");
  const { mutateAsync: donate, isLoading } = useContractWrite(contract, "donate")

  const handleDonate = async () => {
    try {
      const data = await donate({ args: ["charity.id", ethers.utils.parseEther(donationAmount)] });
      console.info("contract call successs", data);
      setDonationAmount('')
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{"charity.name"}</h2>
        <p className="text-gray-600 mb-4">{"charity.description"}</p>
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full" 
              // style={{ width: `${("charity.currentAmount" / "charity.targetAmount") * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>{ethers.utils.formatEther("charity.currentAmount")} ETH raised</span>
            <span>{ethers.utils.formatEther("charity.targetAmount")} ETH goal</span>
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Amount in ETH"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="flex-grow mr-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleDonate}
            disabled={isLoading || !donationAmount}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Donating...' : 'Donate'}
          </button>
        </div>
      </div>
    </div>
  )
}

