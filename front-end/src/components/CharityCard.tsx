'use client'

import { useState } from 'react'
// import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers'

export interface ICharity {
  id: number,
  image: string,
  title: string,
  description: string,
  expirationTime: number,
  donationTarget: number,
  totalDonation: number,
  withdrawnDonation: number,
  createdBy: string,
  createdAt: number,
  isActive: boolean
}

export function CharityCard(charity: ICharity) {
  const [donationAmount, setDonationAmount] = useState('')
  // const { contract } = useContract("YOUR_CONTRACT_ADDRESS");
  // const { mutateAsync: donate, isLoading } = useContractWrite(contract, "donate")
  const isLoading = false;

  const handleDonate = async () => {
    // try {
    //   const data = await donate({ args: ["charity.id", ethers.utils.parseEther(donationAmount)] });
    //   console.info("contract call successs", data);
    //   setDonationAmount('')
    // } catch (err) {
    //   console.error("contract call failure", err);
    // }
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <img src={charity.image} alt="" />
        <h2 className="text-xl font-semibold mb-2">{charity.title}</h2>
        <p className="text-gray-600 mb-4">{charity.description}</p>
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full" 
              style={{ width: `${(charity.totalDonation / charity.donationTarget) * 100}%` }}
            ></div>
          </div>
          <div className="flex flex-col w-full text-sm mt-1 space-y-2">
            <div className='w-full'>
              <span className='font-semibold'>Raised Donation: </span> 
              {charity.totalDonation} ETH
            </div>
            <div className='w-full'>
              <span className='font-semibold'>Donation Goal: </span> 
              {charity.donationTarget} ETH
            </div>
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

