import { getAyatById, getSuratById } from '@/libs/api/alquran'
import SuratContent from '@/components/Quran/SuratContent'

export default async function Page({ params }: { params: { id: string } }) {
    const suratId = Number(params.id)
    const surat = await getSuratById(suratId - 1)
    const ayat = await getAyatById(suratId)

    return (
        <div className="dark:bg-font dark:text-slate-50">
            {/* Kirim data ke komponen client */}
            <SuratContent surat={surat} ayat={ayat} />
        </div>
    )
}
