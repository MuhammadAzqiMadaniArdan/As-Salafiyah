// components/AyatList.tsx
'use client'
import React, { useEffect, useState, useRef } from 'react'
import { getAyatById } from '@/libs/api/alquran'
import { motion as m } from 'framer-motion'

interface Ayat {
    ar: string
    id: string
    tr: string
    nomor: string
}
interface Props {
    suratId: number
}

const AyatList = ({ suratId }: Props) => {
    const [ayats, setAyats] = useState<Ayat[]>([])
    const [visibleCount, setVisibleCount] = useState(10)
    const [loading, setLoading] = useState(false)
    const loaderRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const fetchAyats = async () => {
            const allAyats = await getAyatById(suratId)
            if (allAyats) {
                setAyats(allAyats)
            }
        }
        fetchAyats()
    }, [suratId])

    useEffect(() => {
        const loader = loaderRef.current

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && visibleCount < ayats.length) {
                    setLoading(true)
                    setTimeout(() => {
                        setVisibleCount((prev) => prev + 10)
                        setLoading(false)
                    }, 500)
                }
            },
            { threshold: 1 },
        )

        if (loader) {
            observer.observe(loader)
        }

        return () => {
            if (loader) {
                observer.unobserve(loader)
            }
        }
    }, [ayats.length, visibleCount])

    return (
        <div className="py-5">
            {ayats.slice(0, visibleCount).map((ayat, i) => {
                const isWithBismillah =
                    parseInt(ayat.nomor) == 1 &&
                    suratId >= 2 &&
                    suratId <= 115 &&
                    ayat.ar.startsWith('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ')

                const bismillah = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ'
                const arabText = isWithBismillah
                    ? ayat.ar.replace(bismillah, '').trim()
                    : ayat.ar

                return (
                    <m.div
                        variants={{
                            initial: { y: 50, opacity: 0 },
                            animate: { y: 0, opacity: 1 },
                        }}
                        initial="initial"
                        whileInView="animate"
                        transition={{
                            duration: 0.8,
                            delay: 0.25,
                        }}
                        viewport={{
                            once: true,
                        }}
                        key={i}
                        className="flex flex-col gap-2 py-3"
                    >
                        <hr className="text-secondary mb-2 shadow-2xl shadow-amber-50" />
                        {isWithBismillah && (
                            <h4 className="lg:text-3xl text-2xl text-center mb-5 arab">
                                {bismillah}
                            </h4>
                        )}
                        <h3 className="bg-accent text-slate-50 dark:bg-primary dark:text-slate-800 p-1 rounded-xl text-lg w-10 text-center scale-75 shadow-2xl mb-5">
                            {ayat.nomor}
                        </h3>
                        <div className="flex flex-col gap-8">
                            <h3 className="lg:text-3xl text-2xl text-end leading-loose arab">
                                {arabText}
                            </h3>
                            <div>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: ayat.tr,
                                    }}
                                    className="font-serif mb-2"
                                />
                                <h5 className="font-sans ">{ayat.id}</h5>
                            </div>
                        </div>
                    </m.div>
                )
            })}

            {visibleCount < ayats.length && (
                <div ref={loaderRef} className="text-center py-5">
                    {loading ? 'Memuat...' : 'Scroll untuk lihat lebih banyak'}
                </div>
            )}
        </div>
    )
}

export default AyatList
