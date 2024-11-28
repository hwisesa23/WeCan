'use client'

import { ThirdwebProvider as TWProvider } from "@thirdweb-dev/react";

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  return (
    <TWProvider activeChain="mumbai">
      {children}
    </TWProvider>
  )
}