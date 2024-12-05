'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Charities', href: '/charities' },
  { label: 'Post Charity', href: '/post-charity' },
  { label: 'KYC', href: '/kyc' },
  { label: 'Register', href: '/register' },
]

export function Navbar() {
  const pathname = usePathname()
  const client = createThirdwebClient({clientId: "ffd629f633f22eef0053f30afd8a720f"});

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-2xl text-blue-600">WeCan</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 ${
                    pathname === item.href ? 'text-blue-500 border-b-2 border-blue-500' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <ConnectButton
            client={client}
            appMetadata={{
              name: "WeCan",
            }}
          />
        </div>
      </div>
    </nav>
  )
}

