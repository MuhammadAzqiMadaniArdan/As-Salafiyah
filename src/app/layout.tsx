import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'As-Salafiyah',
    description: 'As-Salafiyah – Teman ibadah harianmu',
    openGraph: {
        title: 'As-Salafiyah – Web Islami untuk Ibadah Harian',
        description:
            'Akses Al-Qur’an, doa-doa harian, dan jadwal sholat dengan mudah melalui As-Salafiyah.',
        url: 'https://as-salafiyah.vercel.app',
        siteName: 'As-Salafiyah',
        images: [
            {
                url: 'https://as-salafiyah.vercel.app/logoLight.png',
                width: 1200,
                height: 630,
                alt: 'Preview As-Salafiyah',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'As-Salafiyah – Web Islami untuk Ibadah Harian',
        description:
            'Akses Al-Qur’an, doa-doa harian, dan jadwal sholat dengan mudah melalui As-Salafiyah.',
        images: ['https://as-salafiyah.vercel.app/logoLight.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <link
                rel="shortcut icon"
                href="logoLight.png"
                type="image/x-icon"
            />
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary dark:bg-font`}
            >
                <Navbar />

                {children}
                <hr className="text-accent dark:text-primary" />
                <Footer />
            </body>
        </html>
    )
}
