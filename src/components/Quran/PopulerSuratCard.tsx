'use client'

import { motion as m } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { fadeInAnimationVariants } from './ListSurat'
interface Props {
    id: number
    nama: string
    arti: string
    asma: string
    ayat: number
}

const PopulerSuratCard = ({ id, nama, arti, asma, ayat }: Props) => {
    return (
        <m.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
            custom={id}
            whileHover={{
                scale: 0.95,
                rotate: '3.5deg',
            }}
            whileTap={{
                scale: 0.8,
                rotate: '3.5deg',
            }}
        >
            <Link
                href={`/quran/${id}`}
                className="card grid grid-rows-2 gap-5 bg-white p-5 rounded-sm items-center w-50 "
            >
                <div className="transform bg-accent w-full rounded-xl h-10 flex items-center justify-center">
                    <h1 className="transform text-white font-semibold text-sm">
                        {arti}
                    </h1>
                </div>

                <div className="text-accent flex justify-between ">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-sm">Surat {id}</h3>
                        <p className="text-sm line-clamp-1 overflow-hidden">
                            {nama}
                        </p>
                    </div>

                    <div className="flex flex-col text-right">
                        <p className="font-semibold">({asma})</p>
                        <p className="md:text-sm">{ayat} Ayat</p>
                    </div>
                </div>
            </Link>
        </m.div>
    )
}

export default PopulerSuratCard
