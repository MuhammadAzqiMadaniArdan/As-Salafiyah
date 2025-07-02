import React, { useState, useEffect } from 'react'

export default function AnalogClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours = (time.getHours() % 12) + minutes / 60

    return (
        <div className="flex flex-col items-center w-full">
            <div className="relative aspect-square w-full bg-white dark:bg-font rounded-full border-[6px] border-[#243A63] dark:border-[#F1f6f9]">
                <div className="absolute top-1/2 left-1/2 w-[10%] h-[10%] bg-[#243A63] dark:bg-[#F1f6f9] rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
                <div
                    className="absolute top-1/2 left-1/2 w-[3%] h-[30%] bg-[#243A63] dark:bg-[#F1f6f9] origin-bottom z-2"
                    style={{
                        transform: `translate(-50%, -100%) rotate(${hours * 30}deg)`,
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-[2%] h-[40%] bg-[#243A63] dark:bg-[#F1f6f9] origin-bottom z-5"
                    style={{
                        transform: `translate(-50%, -100%) rotate(${minutes * 6}deg)`,
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/2 w-[1%] h-[45%] bg-red-500 origin-bottom z-9"
                    style={{
                        transform: `translate(-50%, -100%) rotate(${seconds * 6}deg)`,
                    }}
                />
            </div>
            <p className="text-[#243A63] dark:text-[#F1f6f9] text-sm sm:text-base mt-3 font-mono tracking-widest text-center">
                {time.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                })}
            </p>
        </div>
    )
}
