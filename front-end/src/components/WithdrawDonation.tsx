'use client'

import { useState } from 'react'
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers'

// export function WithdrawDonation({ charityId }) {
export function WithdrawDonation() {
  const [amount, setAmount] = useState('')

//   const { contract } = useContract("YOUR_CONTRACT_ADDRESS");
//   const { mutateAsync: withdraw, isLoading } = useContractWrite(contract, "withdrawDonation")

//   const handleWithdraw = async () => {
//     try {
//       const data = await withdraw({ args: [charityId, ethers.utils.parseEther(amount)] });
//       console.info("contract call success", data);
//       setAmount('')
//     } catch (err) {
//       console.error("contract call failure", err);
//     }
//   }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Withdraw Donation</h3>
      <div className="flex items-center">
        <input
          type="number"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-grow mr-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
        //   onClick={handleWithdraw}
        //   disabled={isLoading || !amount}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 disabled:opacity-50"
        >
          {/* {isLoading ? 'Withdrawing...' : 'Withdraw'} */}
        </button>
      </div>
    </div>
  )
}