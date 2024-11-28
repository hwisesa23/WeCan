'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CharityCard } from '../../components/CharityCard'

export default function Charities() {
//   const { contract } = useContract("YOUR_CONTRACT_ADDRESS");
//   const { data: charities, isLoading } = useContractRead(contract, "getAllCharities")
  const [filteredCharities, setFilteredCharities] = useState([]);

//   useEffect(() => {
//     if (charities) {
//       setFilteredCharities(charities);
//     }
//   }, [charities]);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     const filtered = charities.filter(charity => 
//       charity.name.toLowerCase().includes(searchTerm) || 
//       charity.description.toLowerCase().includes(searchTerm)
//     );
//     setFilteredCharities(filtered);
//   };

//   if (isLoading) {
//     return <div className="text-center py-20">Loading charities...</div>
//   }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Charities</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search charities..."
        //   onChange={handleSearch}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCharities.map((charity, index) => (
        //   <CharityCard key={index} charity={charity} />
            <CharityCard key={index} />
        ))}
      </div>
    </div>
  )
}