'use client'

import React, { useEffect, useState } from 'react'
import DoaCard from '@/components/Doa/DoaCard'
import { motion as m } from 'framer-motion'
import { getAllDoa, getDoaRandom } from '@/libs/api/doa'
import Link from 'next/link'
import PageLoading from '@/app/loading'

type Doa = {
    arab: string
    indo: string
    judul: string
    source: string
}

export default function Home() {
    const [doaList, setDoaList] = useState<Doa[]>([])
    const [randomDoa, setRandomDoa] = useState<Doa | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDoa = async () => {
            try {
                setLoading(true)
                const all = await getAllDoa()
                setDoaList(all)

                const random = await getDoaRandom()
                setRandomDoa(random)
            } catch (_error) {
                console.error('Error fetching doa data:', _error)
            } finally {
                setLoading(false)
            }
        }
        fetchDoa()
    }, [])

    if (loading) return <PageLoading />

    return (
        <main className="min-h-screen bg-[#F1f6f9] dark:bg-font flex flex-col items-center font-sans">
            <section className="text-center px-4 my-6">
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <h2 className="text-4xl md:text-4xl text-[#243A63] dark:text-gray-100">
                        At every dawn and dusk, let your{' '}
                        <strong className="text-[#132952] dark:text-white">
                            Prayers
                        </strong>{' '}
                        flow — Allah is always near to hear
                    </h2>
                </m.div>
            </section>

            {randomDoa && (
                <section className="w-full bg-accent text-white py-12 px-4 rounded-t-[100px] text-center">
                    <m.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.3,
                            ease: 'easeOut',
                        }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-6">
                            Hari yang baik dimulai dengan doa. Yuk tambah satu
                            hafalan doa hari ini
                        </h3>
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.3 }}
                            className="bg-white text-black px-6 py-4 rounded-xl max-w-10/12 mx-auto shadow-md"
                        >
                            <h4 className="text-3xl font-semibold">
                                {randomDoa.judul}
                            </h4>
                            <p className="text-2xl my-2 text-center leading-loose arab">
                                {randomDoa.arab}
                            </p>
                            <p className="text-lg italic mt-2 text-gray-600">
                                &quot;{randomDoa.indo}&quot;
                            </p>
                        </m.div>
                    </m.div>
                </section>
            )}

            <section className="w-full bg-accent text-white pb-10 px-4">
                <m.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Daftar Doa Sehari-Hari
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 px-2 sm:px-4 md:px-6 lg:px-8">
                        {doaList.map((doa, idx) => (
                            <m.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3 + idx * 0.1,
                                    duration: 0.4,
                                }}
                            >
                                <Link href={`/doa/${idx + 1}`}>
                                    <DoaCard
                                        number={idx + 1}
                                        title={doa.judul}
                                    />
                                </Link>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </section>
        </main>
    )
}
