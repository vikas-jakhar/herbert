"use client";
import React, { useLayoutEffect } from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'
import { WORK_TOURISM } from '@/app/utils/helper'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".heading", {
                x: -400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".CoreValues",
                    start: "top 50%",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
            });
            gsap.from(".para", {
                x: 400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".CoreValues",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
            });
            gsap.from(".img", {
                zoom: "0",
                opacity: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: ".CoreValues",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
            });
        });

        return () => aot.revert();
    }, []);
    return (
        <div className='relative py-20 CoreValues'>
            <div className="container py-10 relative z-[2]">
                <PrimaryHeading className='text-center heading' children="Our Core " redText="Values" />
                <PrimaryParagraph className='text-center para max-w-[716px] mx-auto mt-4' children="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" />
                <div className="mt-14 relative flex flex-col items-center gap-11">
                    <Image src='/assets/images/webp/work-tourism.png' className='w-full img max-w-[286px] lg:max-w-[259px] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2' alt='work-tourism' width={259} height={346} />
                    <div className="flex flex-col w-full">
                        {WORK_TOURISM.map((i) => (
                            <div key={i.id} className={`flex flex-row ${i.id === 2 ? " mt-[33px]" : ""} items-start lg:gap-[299px] gap-6 xl:gap-0 justify-between h-full w-full relative z-[1]`}>
                                {i.items.map((e, index) => (
                                    <div key={index} className={`flex max-w-[378px] flex-col ${index === 0 ? "lg:items-end items-start" : "items-start"} ${index === 1 ? "lg:hidden" : ""} ${i.id === 1 && index === 2 ? "hidden lg:flex" : ""} ${i.id === 2 && index === 0 ? "hidden lg:flex" : ""}`}>
                                        <span className={`grid ${index === 0 ? "heading" : "para"} place-items-center text-white font-semibold md:text-lg text-xs md:w-10 md:h-10 w-[30px] h-[30px] bg-offOrange rounded-full`}>{e.number}</span>
                                        <p className={`font-medium ${index === 0 ? "heading" : "para"} md:text-xl text-base text-offBlack md:mt-4 mt-2 ${index === 0 ? "lg:text-right text-left" : "text-left"}`}>{e.heading}</p>
                                        <PrimaryParagraph className={`mt-3 ${index === 0 ? "heading" : "para"} ${index === 0 ? "lg:text-right text-left" : "text-left"}`} children={e.text} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Image src='/assets/images/webp/value-vector.png' alt='vector' width={55} height={343} className='left-0 absolute top-[17%]' />
            <Image src='/assets/images/webp/value-bottom-img.png' alt='value-bottom-img' width={1440} height={271} className='left-1/2 -translate-x-1/2 w-[1440px] absolute bottom-0 translate-y-1/2 object-cover h-[271px]' />
        </div>
    )
}

export default CoreValues