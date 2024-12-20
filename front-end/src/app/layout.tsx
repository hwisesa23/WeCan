import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ThirdwebProvider } from "thirdweb/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeCan - Blockchain Charity Platform',
  description: 'Empowering global change through decentralized giving',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  )
}