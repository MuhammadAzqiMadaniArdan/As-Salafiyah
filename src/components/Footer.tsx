import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GitHub, Linkedin, Mail } from 'react-feather'

const developers = [
    {
        name: 'Rivaldo Harto Wibowo',
        linkedin: 'https://linkedin.com/in/rivaldo',
        github: 'https://github.com/rivaldo',
        mail: 'mailto:rivaldo@gmail.com',
    },
    {
        name: 'Muhammad Azqi Madani Ardan',
        linkedin: 'https://linkedin.com/in/azqi',
        github: 'https://github.com/azqi',
        mail: 'mailto:azqi@example.com',
    },
]

const Footer = () => {
    return (
        <footer className="text-accent dark:text-primary px-15 pt-10 pb-6 bg-background">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logoDark.png"
                            alt="logo-dark"
                            width={40}
                            height={40}
                            className="rounded-full dark:hidden"
                        />
                        <Image
                            src="/logoLight.png"
                            alt="logo-light"
                            width={40}
                            height={40}
                            className="rounded-full hidden dark:block"
                        />
                        <h2 className="text-lg font-bold uppercase tracking-widest">
                            Assalafiyah
                        </h2>
                    </div>
                    <p className="text-sm leading-relaxed text-left">
                        Platform pembelajaran Islam berbasis web yang menyajikan
                        Al-Quran, hadits, dan doa harian secara praktis dan
                        interaktif.
                    </p>
                </div>

                <div className="mr-4 flex flex-col gap-4 text-left md:text-left lg:text-center">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-left md:text-left lg:text-center">
                        Reference
                    </h2>
                    <ul className="space-y-2 font-medium text-sm">
                        <li>
                            <Link href="/alquran" className="hover:underline">
                                Al-Quran
                            </Link>
                        </li>
                        <li>
                            <Link href="/hadist" className="hover:underline">
                                Hadist
                            </Link>
                        </li>
                        <li>
                            <Link href="/doa" className="hover:underline">
                                Doa
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-left">
                        Developer
                    </h2>
                    <ul className="space-y-5">
                        {developers.map((dev, i) => (
                            <li key={i}>
                                <p className="font-medium text-sm">
                                    {dev.name}
                                </p>
                                <div className="flex gap-3 mt-1">
                                    <Link href={dev.linkedin}>
                                        <Linkedin
                                            size={20}
                                            className="hover:scale-110"
                                        />
                                    </Link>
                                    <Link href={dev.github}>
                                        <GitHub
                                            size={20}
                                            className="hover:scale-110"
                                        />
                                    </Link>
                                    <Link href={dev.mail}>
                                        <Mail
                                            size={20}
                                            className="hover:scale-110"
                                        />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-left">
                        Contact Us
                    </h2>
                    <label htmlFor="message" className="text-sm">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        className="border border-accent rounded-md min-h-[80px] p-2 text-sm resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                    />
                    <Link
                        href="mailto:assalafiyah@gmail.com"
                        className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-md text-center hover:bg-opacity-90"
                    >
                        Send Message
                    </Link>
                </div>
            </section>

            <section className="border-t border-accent mt-10 pt-4">
                <p className="text-sm text-center">
                    &copy; 2025 As-Salafiyah – Website pembelajaran Al-Quran,
                    doa harian, dan hadits sahih
                </p>
            </section>
        </footer>
    )
}

export default Footer
