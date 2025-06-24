'use client'

import React, { use, useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { getAyatById, getSuratById } from '@/libs/api/alquran'
import Link from 'next/link'
import AyatList from '@/components/Quran/AyatList'
import { ArrowLeft, ArrowRight } from 'react-feather'
import ReadScroll from '@/components/Quran/ReadScroll'

interface PageProps {
    params: Promise<{ id: string }>
}

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

interface IVisibleAyat {
    ar: string
    id: string
    nomor: string
    tr: string
}

const Page = ({ params }: PageProps) => {
    const [surat, setSurat] = useState<ISuratProps | null>(null)
    const [allAyat, setAllAyat] = useState<IAyatProps[]>([])
    const [visibleAyat, setVisibleAyat] = useState<IVisibleAyat[]>([])
    const [limit, setLimit] = useState<number>(10)
    const [isNotFound, setIsNotFound] = useState(false)
    const { id } = use(params)
    const suratId = Number(id)

    useEffect(() => {
        const fetchData = async () => {
            const suratData = await getSuratById(suratId - 1)
            const ayatData = await getAyatById(suratId)

            if (!suratData || !ayatData) {
                setIsNotFound(true)
                return
            }

            setSurat(suratData)
            setAllAyat(ayatData)
        }

        fetchData()
    }, [suratId])

    useEffect(() => {
        setVisibleAyat(allAyat.slice(0, limit))
    }, [limit, allAyat])

    useEffect(() => {
        if (isNotFound) {
            notFound()
        }
    }, [isNotFound])

    const handleLoadMore = () => {
        const nextLimit = limit + 10
        setLimit(nextLimit)
        setVisibleAyat(allAyat.slice(0, nextLimit))
    }

    return (
        <div className=" dark:bg-font dark:text-slate-50">
            <ReadScroll />
            <div className="px-5">
                {surat && (
                    <>
                        <div className="text-center flex flex-col gap-2 mb-5">
                            <div
                                className={`flex ${parseInt(surat.nomor) > 1 ? 'justify-between' : 'justify-end'} items-center py-5`}
                            >
                                {parseInt(surat.nomor) > 1 && (
                                    <Link
                                        href={`/quran/${parseInt(surat.nomor) - 1}`}
                                        className="bg-accent text-slate-50 p-2 rounded-full transition-all duration-100 hover:scale-110 focus:scale-100   outline-1 dark:outline-primary"
                                    >
                                        <ArrowLeft size={20} />
                                    </Link>
                                )}
                                {parseInt(surat.nomor) < 114 && (
                                    <Link
                                        href={`/quran/${parseInt(surat.nomor) + 1}`}
                                        className="bg-accent text-slate-50 p-2 rounded-full transition-all duration-100 hover:scale-110 focus:scale-100   outline-1 dark:outline-primary"
                                    >
                                        <ArrowRight size={20} />
                                    </Link>
                                )}
                            </div>
                            <h1 className="text-4xl font-light font-serif">
                                {surat.nama}{' '}
                                <span className="italic">({surat.asma})</span>
                            </h1>
                            <div className="flex lg:flex-row flex-col justify-center gap-2 lg:text-xl text-sm ">
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
                                    {surat.type === 'mekah'
                                        ? 'Makkiyah'
                                        : 'Madaniyah'}
                                </p>
                            </div>
                        </div>
                        <div className="py-5">
                            <AyatList suratId={suratId} />
                            <div
                                className={`flex ${parseInt(surat.nomor) > 1 ? 'justify-center' : 'justify-center'} gap-5 items-center py-5`}
                            >
                                {parseInt(surat.nomor) > 1 && (
                                    <Link
                                        href={`/quran/${parseInt(surat.nomor) - 1}`}
                                        className="bg-accent text-slate-50 p-2 rounded-full transition-all duration-100 hover:scale-110 focus:scale-100   outline-1 dark:outline-primary"
                                    >
                                        <ArrowLeft size={20} />
                                    </Link>
                                )}
                                <p>{surat.nomor}</p>
                                {parseInt(surat.nomor) < 114 && (
                                    <Link
                                        href={`/quran/${parseInt(surat.nomor) + 1}`}
                                        className="bg-accent text-slate-50 p-2 rounded-full transition-all duration-100 hover:scale-110 focus:scale-100   outline-1 dark:outline-primary"
                                    >
                                        <ArrowRight size={20} />
                                    </Link>
                                )}
                            </div>
                            {visibleAyat.length < allAyat.length && (
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
                    </>
                )}
            </div>
        </div>
    )
}

export default Page
