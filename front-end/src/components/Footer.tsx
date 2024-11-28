import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">WeCan</Link>
            <p className="mt-2 text-sm">Empowering global change through decentralized giving</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:text-blue-400" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 WeCan. All rights reserved.</p>
          <div className="mt-2">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            {' | '}
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

