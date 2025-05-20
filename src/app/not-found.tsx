'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router = useRouter()

    return (
        <div className="flex justify-center items-center text-accent min-h-screen">
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-8xl animate-pulse transition-all from-accent to-primary">
                    404
                </h1>
                <h3 className="text-xl">NOT FOUND</h3>
                <button
                    onClick={() => router.back()}
                    className="cursor-pointer bg-accent hover:bg-primary transition-all rounded-xl text-black px-5 py-1"
                >
                    Kembali{' '}
                </button>
            </div>
        </div>
    )
}

export default Page
