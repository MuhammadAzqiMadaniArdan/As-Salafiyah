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

const SuratCard = ({ id, nama, arti, asma, ayat }: Props) => {
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
                rotate: '1.5deg',
            }}
            whileTap={{
                scale: 0.8,
                rotate: '2deg',
            }}
        >
            <Link
                href={`/quran/${id}`}
                className="card flex gap-5 bg-white p-5 rounded-2xl items-center w-full"
            >
                <div className="transform rotate-45 bg-accent w-10 h-10 flex items-center justify-center">
                    <h1 className="transform -rotate-45 text-white font-semibold">
                        {id}
                    </h1>
                </div>

                <div className="text-accent flex justify-between w-full">
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{nama}</h3>
                        <p className="text-sm lg:line-clamp-1 overflow-hidden">
                            {arti}
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

export default SuratCard
