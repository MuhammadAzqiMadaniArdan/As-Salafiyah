'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion as m } from 'framer-motion'
import { getAllShalat } from '@/libs/api/shalat'
import Page from '../loading'

type JadwalType = {
    tanggal: string
    imsak: string
    subuh: string
    dzuhur: string
    ashar: string
    maghrib: string
    isya: string
}

export default function SholatPage() {
    const [jadwal, setJadwal] = useState<JadwalType | null>(null)
    const [loading, setLoading] = useState(true)
    const [nextSholat, setNextSholat] = useState<{
        nama: string
        sisa: string
    } | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const today = new Date()
            const date = today.toISOString().split('T')[0]
            const cityId = 1204

            try {
                const data = await getAllShalat(cityId, date)
                setJadwal(data)

                const now = new Date()
                const waktuList = [
                    { nama: 'Subuh', waktu: data.subuh },
                    { nama: 'Dzuhur', waktu: data.dzuhur },
                    { nama: 'Ashar', waktu: data.ashar },
                    { nama: 'Maghrib', waktu: data.maghrib },
                    { nama: 'Isya', waktu: data.isya },
                ]

                let foundNext = null
                for (let i = 0; i < waktuList.length; i++) {
                    const [jam, menit] = waktuList[i].waktu
                        .split(':')
                        .map(Number)
                    const waktuSholat = new Date(now)
                    waktuSholat.setHours(jam)
                    waktuSholat.setMinutes(menit)
                    waktuSholat.setSeconds(0)

                    if (waktuSholat > now) {
                        const selisihMs = waktuSholat.getTime() - now.getTime()
                        const selisihMenit = Math.floor(selisihMs / 1000 / 60)
                        const jam = Math.floor(selisihMenit / 60)
                        const menit = selisihMenit % 60
                        foundNext = {
                            nama: waktuList[i].nama,
                            sisa: `${jam} jam ${menit} menit`,
                        }
                        break
                    }
                }

                if (!foundNext) {
                    foundNext = {
                        nama: 'Subuh',
                        sisa: 'besok pagi',
                    }
                }

                setNextSholat(foundNext)
            } catch (error) {
                console.error('Gagal fetch jadwal sholat:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const AnalogClock = dynamic(
        () => import('@/components/sholat/analogClock'),
        {
            ssr: false,
        },
    )

    if (loading) {
        return <Page />
    }

    return (
        <main className="bg-[#F1F6FA] dark:bg-font min-h-screen font-sans text-[#243A63] dark:text-gray-100 px-4 md:px-12 py-8 space-y-10">
            <section className="text-center space-y-2">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl md:text-2xl lg:text-3xl font-stretch-100%">
                        Let each call to prayer remind you.
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                        Allah never{' '}
                        <span className="font-bold">forgets you</span>,
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                        not even for a <span className="font-bold">second</span>
                    </p>
                </m.div>
            </section>

            <section className="flex flex-row flex-wrap items-center justify-center">
                <m.div
                    className="w-[62%] sm:w-[65%] md:w-3/5 bg-[#243A63] dark:bg-[#F1f6f9] text-white dark:text-font rounded-2xl py-6 text-center shadow-md flex flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <p className="text-sm md:text-base mb-1">
                        Waktu sholat selanjutnya:
                    </p>
                    <p className="text-xl md:text-2xl font-bold">
                        {nextSholat?.nama}
                    </p>
                    <p className="text-xs md:text-sm mt-1">
                        dalam {nextSholat?.sisa}
                    </p>
                </m.div>

                <m.div
                    className="w-[38%] sm:w-[25%] md:w-2/9 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="w-24 h-24 md:w-32 md:h-32">
                        <AnalogClock />
                    </div>
                </m.div>
            </section>

            <section>
                <m.h2
                    className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Jadwal Sholat Hari Ini
                </m.h2>

                <m.div
                    className="rounded-xl overflow-hidden shadow-md mx-auto max-w-3/4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <table className="w-full text-base">
                        <tbody>
                            {jadwal && (
                                <>
                                    {[
                                        { label: 'Imsak', value: jadwal.imsak },
                                        { label: 'Subuh', value: jadwal.subuh },
                                        {
                                            label: 'Dzuhur',
                                            value: jadwal.dzuhur,
                                        },
                                        { label: 'Ashar', value: jadwal.ashar },
                                        {
                                            label: 'Maghrib',
                                            value: jadwal.maghrib,
                                        },
                                        { label: 'Isya', value: jadwal.isya },
                                    ].map((item, i) => (
                                        <tr
                                            key={item.label}
                                            className={`${
                                                i % 2 === 0
                                                    ? 'bg-[#2C3D6B] dark:bg-[#F1f6f9]'
                                                    : 'bg-[#243A63] dark:bg-[#f6fafd]'
                                            } text-white dark:text-font`}
                                        >
                                            <td className="px-4 md:px-12 py-4 text-center font-medium">
                                                {item.label}
                                            </td>
                                            <td className="px-4 md:px-12 py-4 text-center">
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </>
                            )}
                        </tbody>
                    </table>
                </m.div>
            </section>
        </main>
    )
}
