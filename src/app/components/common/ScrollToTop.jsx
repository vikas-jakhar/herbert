"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const Scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [visible, setVisible] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

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

    const checkScreenWidth = () => {
        setIsLargeScreen(window.innerWidth >= 1920);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        window.addEventListener('resize', checkScreenWidth);
        checkScreenWidth();

        return () => {
            window.removeEventListener('scroll', toggleVisible);
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    return (
        <button
            onClick={Scroll}
            className="animate-bounce bg-white group place-items-center xl:w-16 xl:h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full fixed bottom-[1.5%] sm:bottom-[2%] md:bottom-[3%] cursor-pointer shadow-6xl duration-300 ease-linear z-30"
            style={{
                display: visible ? 'grid' : 'none',
                right: isLargeScreen ? 'calc((100vw - 1920px) / 2 + 30px)' : '3%',
            }}
        >
            <span className="sm:text-sm text-xs md:text-base text-offBlack font-bold group-hover:opacity-0 duration-300 ease-linear font-rubik">{scrollPercent}%</span>
            <Image loading="lazy"
                src="/assets/images/svg/scroll-to-top.svg"
                alt="scroll-to-top"
                width={100}
                height={100}
                sizes="(max-width: 640px) 50vw, 
                 (max-width: 768px) 33vw, 
                 (max-width: 1024px) 25vw, 
                 100px"
                className="absolute -z-[5] duration-300 ease-linear opacity-0 group-hover:opacity-100 hover:z-[1] w-1/2 h-auto"
            />
        </button>
    );
};

export default ScrollToTop;
