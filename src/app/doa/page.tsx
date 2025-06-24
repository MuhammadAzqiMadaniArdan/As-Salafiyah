'use client'

import React, { useEffect, useState } from 'react'
import DoaCard from '@/components/Doa/DoaCard'
import { getAllDoa, getDoaRandom } from '@/libs/api/doa'

type Doa = {
  id: string
  doa: string
  ayat: string
  latin: string
  artinya: string
}

export default function Home() {
  const [doaList, setDoaList] = useState<Doa[]>([])
  const [randomDoa, setRandomDoa] = useState<Doa | null>(null)

  useEffect(() => {
    const fetchDoa = async () => {
      try {
        const all = await getAllDoa()
        setDoaList(all)

        const randomArray  = await getDoaRandom()
        const random = randomArray[0]
        console.log('Random Doa:', random);
        setDoaList(all)
        setRandomDoa(random)
      } catch (err) {
        console.error('Error fetching doa data:', err) 
      }
    }
    fetchDoa()
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center font-sans">
      <section className="text-center px-4 mt-6">
        <h2 className="text-lg md:text-xl font-light">
          At every dawn and dusk, let your <strong>Prayers</strong> flow — Allah is always near to hear
        </h2>
      </section>

      {randomDoa && (
        <section className="w-full bg-[#243A63] text-white mt-10 py-10 px-4 rounded-t-[150px] text-center">
          <h3 className="text-xl md:text-2xl pt-8 font-semibold mb-4">
            Hari yang baik dimulai dengan doa. Yuk tambah satu hafalan doa hari ini
          </h3>
          <div className="bg-white text-black p-4 rounded-lg max-w-md mx-auto shadow">
            <h4 className="text-lg font-semibold">{randomDoa.doa}</h4>
            <p className="text-2xl my-2">{randomDoa.ayat}</p>
            <p className="text-sm italic">{randomDoa.latin}</p>
            <p className="text-xs mt-1">“{randomDoa.artinya}”</p>
          </div>
        </section>
      )}

      <section className="w-full bg-[#243A63] text-white py-10 px-4">
        <h3 className="text-xl font-semibold text-center mb-6">Daftar Doa Sehari-Hari</h3>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {doaList.map((doa, idx) => (
            <DoaCard key={doa.id} number={idx + 1} title={doa.doa} />
          ))}
        </div>
      </section>

    </main>
  )
}
