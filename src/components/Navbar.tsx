'use client'

import { motion as m, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { List } from 'react-feather'
const Navbar = () => {
    const [theme, setTheme] = useState<'Dark' | 'Light'>('Light')
    const [menu, setMenu] = useState<boolean>(false)

    useEffect(() => {
        const html = document.documentElement
        if (theme === 'Dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }, [theme])

    useEffect(() => {
        const body = document.body
        if (menu) {
            body.classList.add('overflow-hidden')
        } else {
            body.classList.remove('overflow-hidden')
        }
    }, [menu])
    return (
        <nav className="">
            <div className="flex flex-wrap justify-between gap-5 px-10 py-5 items-center text-font dark:bg-font dark:text-slate-50">
                <Image
                    src={theme == 'Light' ? '/logoLight.png' : '/logoDark.png'}
                    alt="logo-image"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div className="lg:flex justify-around gap-10 lg:text-2xl text-lg font-semibold hidden">
                    <Link href={'/quran'}>Al-Quran</Link>
                    <Link href={'/doa'}>Doa</Link>
                    <Link href={'/sholat'}>Shalat</Link>
                </div>
                <div
                    className={`lg:inline hidden bg-accent p-1 transition-all ease-in ${theme == 'Dark' ? 'pr-5' : 'pl-5'} rounded-2xl cursor-pointer`}
                    onClick={() =>
                        theme == 'Dark' ? setTheme('Light') : setTheme('Dark')
                    }
                >
                    <div className="p-2 bg-primary rounded-full "></div>
                </div>
                <div
                    className="lg:hidden cursor-pointer"
                    onClick={() => setMenu(!menu)}
                >
                    <List size={20} />
                </div>
            </div>
            <AnimatePresence>
                {menu && (
                    <m.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute z-20 w-screen h-screen flex flex-col px-10 text-center items-center gap-10 justify-center top-0 bg-primary dark:bg-font dark:text-slate-50"
                    >
                        <div
                            className="cursor-pointer"
                            onClick={() => setMenu(false)}
                        >
                            <List size={30} />
                        </div>
                        <div className="flex flex-col justify-around gap-5 lg:text-2xl text-lg font-semibold ">
                            <Link
                                href={'/quran'}
                                onClick={() => setMenu(false)}
                            >
                                Al-Quran
                            </Link>
                            <Link href={'/doa'} onClick={() => setMenu(false)}>
                                Doa
                            </Link>
                            <Link
                                href={'/sholat'}
                                onClick={() => setMenu(false)}
                            >
                                Shalat
                            </Link>
                        </div>
                        <div
                            className={`bg-accent w-10 p-1 transition-all ease-in ${theme == 'Dark' ? 'pr-5' : 'pl-5'} rounded-2xl cursor-pointer`}
                            onClick={() =>
                                theme === 'Dark'
                                    ? setTheme('Light')
                                    : setTheme('Dark')
                            }
                        >
                            <div className="p-2 bg-primary rounded-full "></div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
