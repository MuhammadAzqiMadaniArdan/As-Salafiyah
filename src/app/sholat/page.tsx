'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { getAllShalat } from '@/libs/api/shalat'

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
    const [nextSholat, setNextSholat] = useState<{
        nama: string
        sisa: string
    } | null>(null)

    useEffect(() => {
        const fetchData = async () => {
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
            } catch (_error) {
                console.error('Gagal fetch jadwal sholat:', _error)
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

    return (
        <main className="bg-[#F1F6FA] min-h-screen font-sans text-[#243A63] px-6 py-8 space-y-10">
            <section className="text-center space-y-2">
                <p className="text-xl sm:text-3xl font-stretch-100%">
                    Let each call to prayer remind you.
                </p>
                <p className="text-xl sm:text-3xl font-semibold">
                    Allah never <span className="font-bold">forgets you</span>,
                </p>
                <p className="text-xl sm:text-3xl font-semibold">
                    not even for a <span className="font-bold">second</span>
                </p>
            </section>

            <section className="flex flex-row items-center justify-between flex-wrap sm:gap-4 sm:px-48 -red-500">
                <div className="w-[60%] sm:w-[75%] bg-[#243A63] text-white rounded-2xl px-4 py-6 text-center shadow-md flex flex-col justify-center translate-y-2 sm:translate-y-2">
                    <p className="text-sm sm:text-base mb-1">
                        Waktu sholat selanjutnya:
                    </p>
                    <p className="text-xl sm:text-2xl font-bold">
                        {nextSholat?.nama ?? '...'}
                    </p>
                    <p className="text-xs sm:text-sm mt-1">
                        dalam {nextSholat?.sisa ?? '...'}
                    </p>
                </div>
                <div className="w-[35%] sm:w-[22%] flex items-center justify-center  -red-500">
                    <div className="w-28 h-28 sm:w-32 sm:h-32">
                        <AnalogClock />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-center text-2xl sm:text-4xl font-bold mb-6">
                    Jadwal Sholat Hari Ini
                </h2>
                <div className="rounded-xl overflow-hidden shadow-md sm:mx-36">
                    <table className="w-full text-base">
                        <tbody>
                            {jadwal && (
                                <>
                                    <tr className="even:bg-[#2C3D6B] odd:bg-[#243A63] text-white">
                                        <td className="px-10 py-4 sm:px-72  text-center sm:text-right font-medium w-2/3">
                                            Imsak
                                        </td>
                                        <td className="px-10 py-4 text-left w-1/3">
                                            {jadwal.imsak}
                                        </td>
                                    </tr>
                                    <tr className="even:bg-[#2C3D6B] odd:bg-[#243A63] text-white">
                                        <td className="px-10 py-4 sm:px-72  text-center sm:text-right font-medium w-2/3">
                                            Subuh
                                        </td>
                                        <td className="px-10 py-4 text-left w-1/3">
                                            {jadwal.subuh}
                                        </td>
                                    </tr>
                                    <tr className="even:bg-[#2C3D6B] odd:bg-[#243A63] text-white">
                                        <td className="px-10 py-4 sm:px-72  text-center sm:text-right font-medium w-2/3">
                                            Dzuhur
                                        </td>
                                        <td className="px-10 py-4 text-left w-1/3">
                                            {jadwal.dzuhur}
                                        </td>
                                    </tr>
                                    <tr className="even:bg-[#2C3D6B] odd:bg-[#243A63] text-white">
                                        <td className="px-10 py-4 sm:px-72  text-center sm:text-right font-medium w-2/3">
                                            Ashar
                                        </td>
                                        <td className="px-10 py-4 text-left w-1/3">
                                            {jadwal.ashar}
                                        </td>
                                    </tr>
                                    <tr className="even:bg-[#2C3D6B] odd:bg-[#243A63] text-white">
                                        <td className="px-10 py-4 sm:px-72  text-center sm:text-right font-medium w-2/3">
                                            Maghrib
                                        </td>
                                        <td className="px-10 py-4 text-left w-1/3">
                                            {jadwal.maghrib}
                                        </td>
                                    </tr>
                                    <tr className="even:bg-[#2C3D6B] odd:bg-[#243A63] text-white">
                                        <td className="px-10 py-4 sm:px-76  text-center sm:text-right font-medium w-2/3">
                                            Isya
                                        </td>
                                        <td className="px-10 py-4 text-left w-1/3">
                                            {jadwal.isya}
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}
