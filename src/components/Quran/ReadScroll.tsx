import { motion as m, useScroll, useSpring, useTransform } from 'framer-motion'
import React from 'react'

const ReadScroll = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)
    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ['#212A3E', '#394867'],
    )
    return (
        <div>
            <m.div
                style={{
                    scaleX,
                    transformOrigin: 'left',
                    background,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '5px',
                }}
            />
        </div>
    )
}

export default ReadScroll
