import Link from 'next/link'
import Image from 'next/image'

const causes = [
  { id: 1, title: 'Clean Water Initiative', image: '/placeholder.svg?height=200&width=300', goal: 50000, raised: 32000 },
  { id: 2, title: 'Education for All', image: '/placeholder.svg?height=200&width=300', goal: 75000, raised: 45000 },
  { id: 3, title: 'Reforestation Project', image: '/placeholder.svg?height=200&width=300', goal: 100000, raised: 80000 },
  { id: 4, title: 'Healthcare Access', image: '/placeholder.svg?height=200&width=300', goal: 200000, raised: 150000 },
]

export default function Causes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Causes</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {causes.map((cause) => (
          <div key={cause.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={cause.image} alt={cause.title} width={300} height={200} className="w-full" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cause.title}</h2>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-blue-600 rounded-full" 
                    style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>${cause.raised.toLocaleString()} raised</span>
                  <span>${cause.goal.toLocaleString()} goal</span>
                </div>
              </div>
              <Link 
                href={`/causes/${cause.id}`}
                className="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}