import React from 'react'
import { getAllSurat } from '@/libs/api/alquran'
import HeaderQuran from '@/components/Quran/HeaderQuran'
import ListSurat from '@/components/Quran/ListSurat'
import PopulerSuratCard from '@/components/Quran/PopulerSuratCard'
export const Page = async () => {
    const qurans = await getAllSurat()
    return (
        <main className="dark:bg-font">
            <HeaderQuran />
            <div className="px-10 relative z-10 bg-accent rounded-t-4xl">
                <section className="bg-accent container-populer text-white pt-5 ">
                    <h2 className="text-3xl mb-3 text-center">Surat Populer</h2>
                    <div
                        className="overflow-x-auto py-10 scroll-smooth"
                        style={{
                            scrollbarWidth: 'thin',
                        }}
                    >
                        <div className="2xl:flex 2xl:justify-center">
                            <div className="grid grid-cols-7 gap-4 w-max">
                                <PopulerSuratCard
                                    id={1}
                                    nama="Al-Fatihah"
                                    arti="Pembukaan"
                                    ayat={7}
                                    asma="الفاتحة"
                                />
                                <PopulerSuratCard
                                    id={18}
                                    nama="Al Kahfi"
                                    arti="Gua"
                                    ayat={110}
                                    asma="الكهف"
                                />
                                <PopulerSuratCard
                                    id={36}
                                    nama="Yaa Siin"
                                    arti="YaSin"
                                    ayat={83}
                                    asma="يس"
                                />
                                <PopulerSuratCard
                                    id={55}
                                    nama="Ar Rahmaan"
                                    arti="Yang Maha Pemurah"
                                    ayat={78}
                                    asma="الرحمن"
                                />
                                <PopulerSuratCard
                                    id={56}
                                    nama="Al Waaqi'ah"
                                    arti="Hari Kiamat"
                                    ayat={78}
                                    asma="الواقعة"
                                />
                                <PopulerSuratCard
                                    id={67}
                                    nama="Al Mulk"
                                    arti="Kerajaan"
                                    ayat={30}
                                    asma="الملك"
                                />
                                <PopulerSuratCard
                                    id={114}
                                    nama="An Naas"
                                    arti="Manusia"
                                    ayat={6}
                                    asma="الناس"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <ListSurat qurans={qurans} />
            </div>
        </main>
    )
}

export default Page
