'use client'

import { useState, useEffect } from 'react'
// import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CharityCard, ICharity } from '../../components/CharityCard'
import Loader from '@/components/Loader';

export default function Charities() {
  // const { contract } = useContract(process.env.CONTRACT_ADDRESS);
  // const { data: charities, isLoading } = useContractRead(contract, "getCharityPost", [1,100]);
  const [isLoading, setLoading] = useState(true)
  const charities: ICharity[] = [
    {
      id: 1, 
      image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Fmaster%2Fbc070319-b6a6-11ef-8b3c-e2da9ff0f48f_49567E6ACD3E28CC.png%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75", 
      title: "SEDEKAH UNTUK ANAK YATIM", 
      description: "Tidak sedikit Anak yatim yang tidak bisa sekolah di karenakan tidak adanya biaya.", 
      expirationTime: 0, 
      donationTarget: 2, 
      totalDonation: 0.7, 
      withdrawnDonation: 5, 
      createdBy: "asdf", 
      createdAt: 1, 
      isActive: true
    },
    {
      id: 2, 
      image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F33b4b61e-2d2f-47af-8e07-0bac7e454e31.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75", 
      title: "Tolong, Selamatkan Nyawa Balita Sakit Kronis!", 
      description: "Faqih, masih berusia 4 bulan, harus menerima penyakit ini sejak 3 bulan lalu, tepat disaat umurnya masih 1 bulan.", 
      expirationTime: 0, 
      donationTarget: 5, 
      totalDonation: 0.2, 
      withdrawnDonation: 5, 
      createdBy: "asdf", 
      createdAt: 1, 
      isActive: true
    },
    {
      id: 3, 
      image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F1e92a184-ee77-4bad-9aa3-d9ed0dc1b031.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75", 
      title: "Bantu Korban Banjir Bandang Ternate!", 
      description: "Banjir bandang di Kota Ternate, Provinsi Maluku Utara, Minggu (25/8), menewaskan 13 orang warga. ", 
      expirationTime: 0, 
      donationTarget: 10, 
      totalDonation: 1, 
      withdrawnDonation: 5, 
      createdBy: "asdf", 
      createdAt: 1, 
      isActive: true
    },
    {
      id: 4, 
      image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F76fb9c38-0999-414c-a382-eb0f40ba6db0.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75", 
      title: "Asap Tebal Kebakaran Hutan Kepung Kalbar!", 
      description: "Kebakaran Hutan dan Lahan (Karhutla) yang terjadi di sejumlah titik di wilayah Kalimantan Barat (Kalbar) selama beberapa hari terakhir memicu kabut asap tebal.", 
      expirationTime: 0, 
      donationTarget: 20, 
      totalDonation: 3, 
      withdrawnDonation: 5, 
      createdBy: "asdf", 
      createdAt: 1, 
      isActive: true
    },
    {
      id: 5, 
      image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F85342b06-ea6b-49e0-a8ba-ac7ad653b611.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75", 
      title: "Jantung Bocor 5mm, Bantu Dek Fatin Sembuh!", 
      description: "Usia 5 bulan, saya sering sekali mendapati badan Fatin nampak membiru dan sesak napas. ", 
      expirationTime: 0, 
      donationTarget: 4, 
      totalDonation: 2, 
      withdrawnDonation: 5, 
      createdBy: "asdf", 
      createdAt: 1, 
      isActive: true
    },
    {
      id: 6, 
      image: "https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2Ff40805cb-3f7d-48a4-82f0-ce6dc8de21d8.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=640&q=75", 
      title: "Warga Dhuafa Butuh Air Bersih untuk Keseharian!", 
      description: "Kampung Batu Nunggul, Kecamatan Cikembar, Kabupaten Sukabumi. Kampung mereka tak miliki sumber air bersih", 
      expirationTime: 0, 
      donationTarget: 5, 
      totalDonation: 1, 
      withdrawnDonation: 5, 
      createdBy: "asdf", 
      createdAt: 1, 
      isActive: true
    },
  ];

  setTimeout(() => {
    setLoading(false);
  }, 500);

  // useEffect(() => {
  //   if (charities) {
  //     setFilteredCharities(charities);
  //   }
  // }, [charities]);

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value.toLowerCase();
//     const filtered = charities.filter(charity => 
//       charity.name.toLowerCase().includes(searchTerm) || 
//       charity.description.toLowerCase().includes(searchTerm)
//     );
//     setFilteredCharities(filtered);
//   };

  if (isLoading) {
    return <Loader isLoading={isLoading}/>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Charities</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search charities..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {charities.map((charity, index) => (
          <CharityCard key={index} {...charity} />
        ))}
      </div>
    </div>
  )
}