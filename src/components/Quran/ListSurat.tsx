'use client'
import React from 'react'
import CardQuran from './SuratCard'

interface Quran {
    nama: string
    nomor: string
    arti: string
    ayat: number
    asma: string
}

interface Props {
    qurans: Quran[]
}
export const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05,
        },
    },
}
const ListSurat = ({ qurans }: Props) => {
    return (
        <section className="text-white py-5">
            <h2 className="text-3xl mb-3 text-center">Daftar Surat</h2>
            <div className="rounded-2xl px-2 py-3  gap-3 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 ">
                {qurans.map(
                    (
                        quran: {
                            nama: string
                            nomor: string
                            arti: string
                            ayat: number
                            asma: string
                        },
                        i: number,
                    ) => {
                        return (
                            <CardQuran
                                id={Number(quran.nomor)}
                                nama={quran.nama}
                                arti={quran.arti}
                                ayat={quran.ayat}
                                asma={quran.asma}
                                key={i}
                            />
                        )
                    },
                )}
            </div>
        </section>
    )
}

export default ListSurat
