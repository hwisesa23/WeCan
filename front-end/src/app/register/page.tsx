'use client'

import { useState, FormEvent } from 'react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers'
import Loader from '@/components/Loader';

export default function Register(){
    const [isLoading, setLoading] = useState(false)
    const [name, setName] = useState("");

    const register = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        try{
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
            const data = await contract.call("registerUser", [name]);
            console.log(data.receipt);
            setLoading(false)
        }catch(error){
            console.log(error);
            setLoading(false)
            //Validate error
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Loader isLoading={isLoading}/>
            <h1 className="text-4xl font-bold mb-8 text-center">Register</h1>
            <form onSubmit={register} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}