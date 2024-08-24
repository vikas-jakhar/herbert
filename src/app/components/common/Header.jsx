"use client";
import React, { useEffect, useState } from 'react';
import { HEADER_DATA } from '@/app/utils/helper';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [open, setOpen] = useState(false);
    const ToggleOpen = () => {
        if (window.innerWidth < 640) {
            setOpen((prevOpen) => !prevOpen);
        }
    };
    useEffect(() => {
        const handleOverflow = () => {
            document.body.style.overflow = open && window.innerWidth < 640 ? "hidden" : "";
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className="sm:pb-[23px] pb-[14px]">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link href="/" className="w-fit relative z-20">
                        <Image src="/assets/images/webp/herbert-logo.webp" alt="herbert-logo" className="sm:max-w-[180px] navBar max-w-[117px] w-full" width={180} height={54} sizes="(max-width: 640px) 50vw, (min-width: 641px) 33vw, 117px" />
                    </Link>
                    <div className={`${open ? "left-0 bg-white" : "-left-full"} flex items-center z-10 sm:bg-transparent absolute flex-col w-full h-screen pt-[108px] sm:pt-0 gap-12 top-0 sm:relative sm:bg-none sm:flex-row sm:gap-11 sm:h-fit sm:w-fit sm:left-auto duration-300 ease-linear`}>
                        {HEADER_DATA.map((i, index) => (
                            <Link key={index} href={i.url} aria-label={i.heading} onClick={ToggleOpen} className="font-normal navBar text-base duration-300 ease-linear hover:text-offBlack text-offGray w-fit relative after:absolute after:duration-300 after:ease-linear after:-bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:bg-offBlack after:w-0 after:h-[3px] after:rounded-xl hover:after:w-[31px]">
                                {i.heading}
                            </Link>
                        ))}
                        <span className='flex max-w-[327px] bg-lightGray h-px w-full absolute top-[153px] sm:hidden left-1/2 -translate-x-1/2'></span>
                        <span className='flex max-w-[327px] bg-lightGray h-px w-full absolute top-[223px] sm:hidden left-1/2 -translate-x-1/2'></span>
                    </div>
                    <div role="button" aria-label="menu icon" aria-expanded={open} onClick={ToggleOpen} className={`${open ? "rounded-full shadow-5xl h-6" : ""} w-6 h-4 relative sm:hidden flex z-20 cursor-pointer duration-300 ease-linear`}>
                        <div className="">
                            <span className={`${open ? "top-[45.8%] rotate-45 left-1/2 -translate-x-1/2" : "top-[0.5px] right-0"} absolute w-[18px] h-[3px] rounded-md bg-offBlack duration-300 ease-linear`}></span>
                            <span className={`${open ? "hidden" : "top-0"} left-0 absolute w-[4px] h-[4px] rounded-full bg-offBlack duration-300 ease-linear`}></span>
                        </div>
                        <div className="">
                            <span className={`${open ? "opacity-0" : "opacity-100 right-0"} top-1/2 -translate-y-1/2 absolute w-[18px] h-[3px] rounded-md bg-offBlack duration-300 ease-linear`}></span>
                            <span className={`${open ? "hidden" : ""} left-0 top-1/2 -translate-y-1/2 absolute w-[4px] h-[4px] rounded-full bg-offBlack duration-300 ease-linear`}></span>
                        </div>
                        <div className="">
                            <span className={`${open ? "top-[45.8%] -rotate-45 left-1/2 -translate-x-1/2" : "bottom-0 right-0"} absolute w-[18px] h-[3px] rounded-md bg-offBlack duration-300 ease-linear`}></span>
                            <span className={`${open ? "hidden" : "bottom-0"} left-0 absolute w-[4px] h-[4px] rounded-full bg-offBlack duration-300 ease-linear`}></span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;