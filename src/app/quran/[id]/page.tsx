// import { getSuratById } from '@/libs/api/alquran'
import { getSuratById } from '@/libs/api/alquran'
import React from 'react'

interface PageParams {
    params: {
        id: number
    }
}

const Page = async ({ params }: PageParams) => {
    const { id } = params
    const surats = await getSuratById(id)

    return (
        <div>
            {surats.map(
                (
                    surat: {
                        ar: string
                        id: string
                        tr: string
                        nomor: string
                    },
                    i: number,
                ) => {
                    return (
                        <li key={i}>
                            {surat.ar}
                            {surat.id}
                            {surat.tr}
                            {surat.nomor}
                        </li>
                    )
                },
            )}
        </div>
    )
}

export default Page
