'use client'
import { motion as m, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const HeaderQuran = () => {
    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start start', 'end start'],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

    return (
        <div ref={scrollRef} className="relative">
            <m.section
                className="text-center px-10 py-20 mb-20 overflow-hidden dark:bg-font dark:text-slate-50 relative -z-0"
                style={{ y: textY }}
            >
                <m.h1
                    animate={{
                        y: '0%',
                        opacity: 1,
                    }}
                    initial={{
                        y: '100%',
                        opacity: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="lg:text-6xl text-4xl uppercase font-light mb-10 font-sans"
                >
                    Dengarkan dan Baca
                    <span className="font-semibold"> Al Quran</span> dengan Baik
                    dan Benar
                </m.h1>
                <m.p
                    animate={{
                        y: '0%',
                        opacity: 1,
                    }}
                    initial={{
                        y: '100%',
                        opacity: 0,
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 0.8,
                    }}
                    className="lg:text-2xl text-xl font-serif"
                >
                    Ayo Baca Al Quran
                </m.p>
            </m.section>
            <m.div
                className="absolute
      w-full h-30 bg-accent rounded-t-[100%]
      z-10
      top-[28rem] sm:top-[27rem] md:top-[27rem] lg:top-[24rem] xl:top-[24rem]
    "
                style={{
                    y: backgroundY,
                }}
            />
        </div>
    )
}

export default HeaderQuran
