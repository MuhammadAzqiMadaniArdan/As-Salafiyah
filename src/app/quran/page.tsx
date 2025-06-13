import React from 'react'
import { getAllSurat } from '@/libs/api/alquran'
import HeaderQuran from '@/components/Quran/HeaderQuran'
import ListSurat from '@/components/Quran/ListSurat'
import PopulerSuratCard from '@/components/Quran/PopulerSuratCard'
export const Page = async () => {
    const qurans = await getAllSurat()
    return (
        <div className="dark:bg-font">
            <HeaderQuran />
            <main className="bg-accent px-10 relative z-10 ">
                <section className="container-populer text-white ">
                    <h2 className="text-3xl mb-3">Surat Populer</h2>
                    <div
                        className="overflow-x-auto py-10 scroll-smooth"
                        style={{
                            scrollbarWidth: 'thin',
                        }}
                    >
                        <div className="grid grid-cols-6 gap-4 w-max ">
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
                        </div>
                    </div>
                </section>

                <ListSurat qurans={qurans} />
            </main>
        </div>
    )
}

export default Page
