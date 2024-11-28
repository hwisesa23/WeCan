'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useToast } from "@/components/ui/use-toast"

interface WalletContextType {
  address: string | null
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Check if wallet was previously connected
    const savedAddress = localStorage.getItem('walletAddress')
    if (savedAddress) {
      setAddress(savedAddress)
    }
  }, [])

  const connectWallet = async () => {
    // This is a placeholder for actual wallet connection logic
    // In a real app, you'd use a library like ethers.js or web3.js
    try {
      // Simulating wallet connection
      const mockAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
      setAddress(mockAddress)
      localStorage.setItem('walletAddress', mockAddress)
      toast({
