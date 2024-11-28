'use client'

import { useState } from 'react'

export default function KYC() {
  const [kycData, setKycData] = useState({
    name: '',
    idNumber: '',
    dateOfBirth: '',
  })

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     alert(`Submitting KYC: ${JSON.stringify(kycData)}`)
//     setKycData({ name: '', idNumber: '', dateOfBirth: '' })
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setKycData(prev => ({ ...prev, [name]: value }));
//   }

  const handleSubmit = async () => {}

  const handleChange = () => {}


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">KYC Verification</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={kycData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="idNumber" className="block text-gray-700 font-bold mb-2">ID Number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={kycData.idNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={kycData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit KYC
        </button>
      </form>
    </div>
  )
}