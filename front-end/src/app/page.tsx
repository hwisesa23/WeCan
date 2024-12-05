import Link from 'next/link'
import { ArrowRight, Heart, Globe, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Global Change</h1>
        <p className="text-xl mb-8">Through Decentralized Giving</p>
        <Link 
          href="/charities" 
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Charities
        </Link>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose WeCan?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent</h3>
              <p>Every donation is tracked on the blockchain, ensuring complete transparency.</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p>Support causes around the world with ease and efficiency.</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p>Blockchain technology ensures your donations are secure and reach their destination.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join us in creating a better world through blockchain-powered charity.</p>
          <Link 
            href="/charities" 
            className="inline-flex items-center text-blue-600 font-semibold hover:underline"
          >
            Explore Charities <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

