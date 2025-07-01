import React from 'react'

type Props = {
    number: number
    title: string
}

export default function DoaCard({ number, title }: Props) {
    return (
        <div className="bg-white  rounded-2xl shadow-md p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] cursor-pointer min-h-[90px] w-full">
            <div className="w-10 aspect-square flex-shrink-0 bg-[#243A63] flex items-center justify-center transform rotate-45">
                <span className="text-white font-semibold text-sm transform -rotate-45 leading-none">
                    {number}
                </span>
            </div>

            <div className="flex flex-col justify-center text-[#243A63]">
                <p className="text-sm md:text-base font-semibold">{title}</p>
            </div>
        </div>
    )
}
