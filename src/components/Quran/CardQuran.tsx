import Link from 'next/link'
import React from 'react'
import { ExternalLink, Play } from 'react-feather'

const CardQuran = () => {
    return (
        <div className="card flex flex-wrap bg-white p-5 rounded-2xl gap-5 items-center">
            <div className="bg-accent px-7 py-5 rounded-2xl text-center  max-w-lg">
                <h1 className="text-5xl ">1</h1>
            </div>
            <div className="text-accent ">
                <h3 className="text-xl font-bold">AL - FATIHAH (ALFATIHAH)</h3>
                <p className="md:text-sm font-bold">Pembukaan - Makkiyah </p>
                <p className="md:text-sm">7 Ayat - 1 Urut - 1 Rukuk </p>
                <div className="text-white flex flex-wrap items-center justify-between mt-2 gap-3  max-w-full ">
                    <Link
                        href={'/quran/1'}
                        className="flex justify-between px-3 py-1 bg-accent rounded-3xl w-60 items-center"
                    >
                        <p className="lg:text-sm  font-bold ">Read Surah</p>
                        <ExternalLink size={20} />
                    </Link>
                    <Link
                        href={'/quran/1'}
                        className=" bg-accent rounded-3xl px-3 py-2  flex justify-center "
                    >
                        <Play size={20} className="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardQuran
