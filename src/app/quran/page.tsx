import React from 'react'
import { getAllQuran } from '@/libs/api/alquran'
import Link from 'next/link'
import CardQuran from '@/components/Quran/CardQuran'
export const Page = async () => {
    const qurans = await getAllQuran()
    return (
        <>
            <header className="text-center py-10">
                <h1 className="text-5xl uppercase">
                    Listen and Read
                    <span className="font-bold"> AL - Quran</span> Properly
                </h1>
            </header>
            <main className="bg-accent px-5">
                <section className="populer text-white py-5">
                    <h2 className="md:text-3xl text-xl mb-5">Surat Populer</h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <CardQuran />
                        <CardQuran />
                    </div>
                </section>
                <section className="list text-white py-5">
                    <h2 className="text-3xl mb-3">Daftar Surat</h2>
                    <div className="bg-primary rounded-2xl px-2 py-3 flex flex-col gap-3 ">
                        {qurans.map(
                            (
                                quran: {
                                    nama: string
                                    nomor: string
                                    arti: string
                                    ayat: number
                                },
                                i: number,
                            ) => {
                                return (
                                    <Link
                                        href={`/quran/${quran.nomor}`}
                                        key={i}
                                        className="bg-accent px-3 py-2 flex rounded-xl justify-between lg:text-lg text-xs items-center"
                                    >
                                        <p>{quran.nomor}</p>
                                        <p>{quran.nama}</p>
                                        <p>{quran.arti}</p>
                                        <p>{quran.ayat} Ayat</p>
                                    </Link>
                                )
                            },
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Page
