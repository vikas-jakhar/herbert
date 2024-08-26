"use client";
import Image from 'next/image';
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
        <button onClick={Scroll} className="animate-bounce bg-white group place-items-center xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 rounded-full fixed right-[3%] bottom-[1.5%] sm:bottom-[2%] md:bottom-[3%] cursor-pointer shadow-6xl duration-300 ease-linear z-30" style={{ display: visible ? 'grid' : 'none' }} >
            <span className="sm:text-sm text-xs md:text-base text-offBlack font-bold group-hover:opacity-0 duration-300 ease-linear font-rubik">{scrollPercent}%</span>
            <Image
                src="/assets/images/svg/scroll-to-top.svg"
                alt='scroll-to-top'
                width={100}
                height={100}
                sizes="(max-width: 640px) 50vw, 
         (max-width: 768px) 33vw, 
         (max-width: 1024px) 25vw, 
         100px"
                className='absolute -z-[5] duration-300 ease-linear opacity-0 group-hover:opacity-100 hover:z-[1] w-1/2 h-auto'
            />
        </button>
    )
}

export default ScrollToTop;
