import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllDoa, getDoaById } from '@/libs/api/doa'

export default async function DoaDetailPage({
    params,
}: {
    params: { id: string }
}) {
    const id = params.id
    const doa = await getDoaById(id)
    const allDoa = await getAllDoa()
    const allDoaWithId = allDoa.map((item, index) => ({
        ...item,
        id: index + 1,
    }))

    const shuffledDoa = allDoaWithId.sort(() => Math.random() - 0.5)
    const limitedDoa = shuffledDoa.slice(0, 6)
    if (!doa) return notFound()

    return (
        <main className="min-h-screen bg-[#F9FAFB] font-sans">
            <section className="w-full max-w-2xl mx-auto text-center px-6 mt-12">
                <h3 className="text-xl font-semibold text-[#212A3E] mb-4">
                    {doa.judul}
                </h3>
                <p className="text-3xl text-[#212A3E] leading-loose arab">
                    {doa.arab}
                </p>
                <p className="text-sm text-gray-600 italic mt-2">
                    &quot;{doa.indo}&quot;
                </p>
            </section>

            <hr className="my-12 border-t border-gray-300 w-11/12 mx-auto" />

            <section className="w-full max-w-2xl mx-auto px-6 pb-20">
                <h4 className="text-lg font-semibold text-[#212A3E] text-center mb-6">
                    Butuh Doa Lain? Ini Bisa Jadi Pilihanmu
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {limitedDoa.map((item, idx) => (
                        <Link
                            key={item.id}
                            href={`/doa/${item.id}`}
                            className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] cursor-pointer min-h-[90px] w-full"
                        >
                            <div className="w-10 aspect-square flex-shrink-0 bg-[#243A63] flex items-center justify-center transform rotate-45">
                                <span className="text-white font-semibold text-sm transform -rotate-45 leading-none">
                                    {idx + 1}
                                </span>
                            </div>
                            <div className="flex flex-col justify-center text-[#243A3E]">
                                <p className="text-sm md:text-base font-semibold">
                                    {item.judul}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    )
}
