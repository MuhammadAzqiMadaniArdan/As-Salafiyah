'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AyatList from '@/components/Quran/AyatList'
import ReadScroll from '@/components/Quran/ReadScroll'

interface ISuratProps {
    arti: string
    asma: string
    audio: string
    ayat: number
    keterangan: string
    nama: string
    nomor: string
    rukuk: string
    type: string
    urut: string
}

interface IAyatProps {
    ar: string
    id: string
    nomor: string
    tr: string
}

interface SuratContentProps {
    surat: ISuratProps
    ayat: IAyatProps[]
}

export default function SuratContent({ surat, ayat }: SuratContentProps) {
    const [limit, setLimit] = useState(10)
    const visibleAyat = ayat.slice(0, limit)
    const router = useRouter()
    const suratId = parseInt(surat.nomor)
    const nomorSurat = suratId

    useEffect(() => {
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' && nomorSurat > 1) {
                router.push(`/quran/${nomorSurat - 1}`)
            } else if (e.key === 'ArrowRight' && nomorSurat < 114) {
                router.push(`/quran/${nomorSurat + 1}`)
            }
        }
        window.addEventListener('keyup', handleKeyUp)
        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [nomorSurat, router])

    const handleLoadMore = () => setLimit((prev) => prev + 10)

    return (
        <div className="dark:bg-font dark:text-slate-50">
            <ReadScroll />
            <div className="px-5">
                <div className="text-center flex flex-col gap-2 mb-5">
                    <div
                        className={`flex ${
                            nomorSurat > 1 ? 'justify-between' : 'justify-end'
                        } items-center py-5`}
                    >
                        {nomorSurat > 1 && (
                            <Link
                                href={`/quran/${nomorSurat - 1}`}
                                className="bg-accent text-slate-50 p-2 rounded-full hover:scale-110 transition-all"
                            >
                                <ArrowLeft size={20} />
                            </Link>
                        )}
                        {nomorSurat < 114 && (
                            <Link
                                href={`/quran/${nomorSurat + 1}`}
                                className="bg-accent text-slate-50 p-2 rounded-full hover:scale-110 transition-all"
                            >
                                <ArrowRight size={20} />
                            </Link>
                        )}
                    </div>
                    <h1 className="text-4xl font-light font-serif">
                        {surat.nama}{' '}
                        <span className="italic">({surat.asma})</span>
                    </h1>
                    <div className="flex lg:flex-row flex-col justify-center gap-2 lg:text-xl text-sm">
                        <p>
                            {surat.arti}{' '}
                            <span className="lg:inline hidden">|</span>
                        </p>
                        <p>
                            Surat ke- {surat.nomor}{' '}
                            <span className="lg:inline hidden">|</span>
                        </p>
                        <p>
                            {surat.ayat} Ayat{' '}
                            <span className="lg:inline hidden">|</span>
                        </p>
                        <p>
                            {surat.type === 'mekah' ? 'Makkiyah' : 'Madaniyah'}
                        </p>
                    </div>
                </div>

                <div className="py-5">
                    <AyatList suratId={suratId} />
                    <div className="flex justify-center gap-5 items-center py-5">
                        {nomorSurat > 1 && (
                            <Link
                                href={`/quran/${nomorSurat - 1}`}
                                className="bg-accent text-slate-50 p-2 rounded-full hover:scale-110 transition-all"
                            >
                                <ArrowLeft size={20} />
                            </Link>
                        )}
                        <p>{nomorSurat}</p>
                        {nomorSurat < 114 && (
                            <Link
                                href={`/quran/${nomorSurat + 1}`}
                                className="bg-accent text-slate-50 p-2 rounded-full hover:scale-110 transition-all"
                            >
                                <ArrowRight size={20} />
                            </Link>
                        )}
                    </div>

                    {visibleAyat.length < ayat.length && (
                        <div className="text-center my-4">
                            <button
                                onClick={handleLoadMore}
                                className="bg-primary outline-1 outline-black dark:outline-slate-50 text-slate-800 px-4 py-2 rounded-lg cursor-pointer"
                            >
                                Muat lebih banyak
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
