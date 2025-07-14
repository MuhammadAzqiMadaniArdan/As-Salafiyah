'use client'

import { useEffect } from 'react'

interface ErrorProps {
    error: Error
}

const ErrorPage = ({ error }: ErrorProps) => {
    useEffect(() => {
        // console.error('Terjadi error:', error)
    }, [error])

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-accent text-white p-4 text-center">
            <h2 className="text-2xl font-semibold mb-4">
                Oops! Terjadi kesalahan
            </h2>
            <p className="text-sm mb-6">{error.message}</p>
            <button
                onClick={() => window.location.reload()}
                className="bg-white text-accent px-4 py-2 rounded-md font-medium hover:bg-opacity-90 cursor-pointer"
            >
                Coba Lagi
            </button>
        </div>
    )
}

export default ErrorPage
