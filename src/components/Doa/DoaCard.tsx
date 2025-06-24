import React from 'react'

type DoaCardProps = {
  number: number
  title: string
}

export default function DoaCard({ number, title }: DoaCardProps) {
  return (
    <div className="bg-white text-black p-3 rounded-lg flex items-center gap-3 shadow">
      <div className="w-8 h-8 rounded-full bg-[#243A63] text-white flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}
