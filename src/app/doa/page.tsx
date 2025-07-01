'use client'

import React, { useEffect, useState } from 'react'
import DoaCard from '@/components/Doa/DoaCard'
import { getAllDoa, getDoaRandom } from '@/libs/api/doa'
import Link from 'next/link'

type Doa = {
    arab: string
    indo: string
    judul: string
    source: string
}

export default function Home() {
    const [doaList, setDoaList] = useState<Doa[]>([])
    const [randomDoa, setRandomDoa] = useState<Doa | null>(null)

    useEffect(() => {
        const fetchDoa = async () => {
            try {
                const all = await getAllDoa()
                setDoaList(all)

                const random = await getDoaRandom()
                setRandomDoa(random)
            } catch (_error) {
                console.error('Error fetching doa data:', _error)
            }
        }
        fetchDoa()
    }, [])

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center font-sans">
            <section className="text-center px-4 my-6">
                <h2 className="text-lg md:text-xl font-light">
                    At every dawn and dusk, let your <strong>Prayers</strong>{' '}
                    flow — Allah is always near to hear
                </h2>
            </section>
            {randomDoa && (
                <section className="w-full bg-[#243A63] text-white py-12 px-4 rounded-t-[100px] text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6">
                        Hari yang baik dimulai dengan doa. Yuk tambah satu
                        hafalan doa hari ini
                    </h3>
                    <div className="bg-white text-black px-6 py-4 rounded-xl max-w-10/12 mx-auto shadow-md">
                        <h4 className="text-3xl font-semibold">
                            {randomDoa.judul}
                        </h4>
                        <p className="text-2xl my-2 text-center leading-loose arab">
                            {randomDoa.arab}
                        </p>
                        <p className="text-lg italic mt-2 text-gray-600">
                            &quot;{randomDoa.indo}&quot;
                        </p>
                    </div>
                </section>
            )}

            <section className="w-full bg-[#243A63] text-white pb-10 px-4">
                <h3 className="text-2xl font-bold text-center mb-8">
                    Daftar Doa Sehari-Hari
                </h3>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 px-2 sm:px-4 md:px-6 lg:px-8">
                    {doaList.map((doa, idx) => (
                        <Link href={`/doa/${idx + 1}`} key={idx}>
                            <DoaCard number={idx + 1} title={doa.judul} />
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
