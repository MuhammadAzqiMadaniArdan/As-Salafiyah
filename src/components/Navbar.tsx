'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
const Navbar = () => {
    const [theme, setTheme] = useState('Dark')

    return (
        <nav className="flex flex-wrap lg:justify-between justify-center gap-5 text-black px-10 py-5 items-center ">
            <Image
                src={'/logoLight.svg'}
                alt="logo-image"
                width={80}
                height={80}
            />
            <div className="flex justify-around gap-10 lg:text-2xl text-lg font-semibold text-font">
                <Link href={'/quran'}>Al-Quran</Link>
                <Link href={'/doa'}>Doa</Link>
                <Link href={'/shalat'}>Shalat</Link>
            </div>
            <div
                className={`bg-white p-1 transition-all ease-in ${theme == 'Dark' ? 'pr-5' : 'pl-5'} rounded-2xl cursor-pointer`}
                onClick={() =>
                    theme == 'Dark' ? setTheme('Light') : setTheme('Dark')
                }
            >
                <div className="p-2 bg-black rounded-full "></div>
            </div>
        </nav>
    )
}

export default Navbar
