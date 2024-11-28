import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About WeCan</h1>
      <div className="max-w-3xl mx-auto">
        <Image 
          src="/placeholder.svg?height=400&width=600" 
          alt="WeCan Team" 
          width={600} 
          height={400} 
          className="w-full rounded-lg shadow-md mb-8"
        />
        <p className="text-lg mb-6">
          WeCan was founded in 2023 with a simple yet powerful vision: to revolutionize charitable giving through blockchain technology. We believe that transparency, efficiency, and global accessibility are key to maximizing the impact of every donation.
        </p>
        <p className="text-lg mb-6">
          Our team consists of blockchain experts, nonprofit veterans, and passionate individuals who are committed to making a difference. By leveraging the power of decentralized technology, we've created a platform that connects donors directly with causes, ensuring that every contribution makes a real, verifiable impact.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          To empower global change by creating a transparent, efficient, and accessible platform for charitable giving, powered by blockchain technology.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="text-lg mb-2">Transparency: Every transaction is recorded on the blockchain, providing full visibility into how funds are used.</li>
          <li className="text-lg mb-2">Efficiency: By leveraging blockchain technology, we minimize overhead costs and maximize the impact of each donation.</li>
          <li className="text-lg mb-2">Global Accessibility: We believe in breaking down barriers to charitable giving, allowing anyone, anywhere to contribute to causes they care about.</li>
          <li className="text-lg mb-2">Innovation: We continuously explore new ways to use technology to improve the charitable giving experience and increase impact.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg">
          Whether you're a donor looking to make a meaningful impact, a charity seeking to leverage blockchain technology, or a developer interested in contributing to our platform, we invite you to join us in our mission to create a better world through decentralized giving.
        </p>
      </div>
    </div>
  )
}

