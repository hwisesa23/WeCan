import { Wallet, ArrowRight, Database, DollarSign } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">How ChariChain Works</h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <Wallet className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold mb-2">1. Connect Your Wallet</h2>
            <p>Link your cryptocurrency wallet to ChariChain. We support various blockchain networks to ensure flexibility in donations.</p>
          </div>
        </div>
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0 md:order-2">
            <ArrowRight className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          <div className="md:w-2/3 md:pr-8 md:order-1">
            <h2 className="text-2xl font-semibold mb-2">2. Choose a Cause</h2>
            <p>Browse through our vetted list of charitable causes. Each cause is thoroughly researched to ensure your donation makes a real impact.</p>
          </div>
        </div>
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <DollarSign className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-semibold mb-2">3. Make a Donation</h2>
            <p>Send your chosen cryptocurrency directly to the cause's wallet. Your transaction is processed quickly and with minimal fees.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-4 md:mb-0 md:order-2">
            <Database className="w-24 h-24 text-blue-600 mx-auto" />
          </div>
          <div className="md:w-2/3 md:pr-8 md:order-1">
            <h2 className="text-2xl font-semibold mb-2">4. Track Your Impact</h2>
            <p>Every donation is recorded on the blockchain. You can track how your contribution is used and see the real-world impact of your generosity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

