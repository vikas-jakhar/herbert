"use client";
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const Scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [visible, setVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    const toggleVisible = () => {
        const scrolled = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercent = (scrolled / totalHeight) * 100;

        if (scrolled > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        setScrollPercent(scrolledPercent.toFixed(0)); 
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return (
        <button
            onClick={Scroll}
            className="animate-bounce bg-white place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[3%] bottom-[1.5%] sm:bottom-[2%] md:bottom-[3%] cursor-pointer shadow-6xl duration-300 ease-linear z-30"
            style={{ display: visible ? 'grid' : 'none' }}
        >
            <span className="sm:text-sm text-xs md:text-base text-offBlack font-bold font-rubik">{scrollPercent}%</span> 
        </button>
    )
}

export default ScrollToTop;
