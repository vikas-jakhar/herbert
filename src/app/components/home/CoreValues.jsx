import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'
import { WORK_TOURISM } from '@/app/utils/helper'

const CoreValues = () => {
    return (
        <div className='relative py-20 CoreValues overflow-hidden'>
            <div className="container sm:py-10 relative z-[2]">
                <PrimaryHeading className='text-center heading' data="Our Core " redText="Values" />
                <PrimaryParagraph className='text-center para max-w-[716px] mx-auto mt-4' data="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" />
                <div className="md:mt-14 mt-6 relative flex flex-col items-center gap-11">
                    <Image src="/assets/images/webp/work-tourism.webp" alt="work-tourism" className="w-full img max-w-[286px] lg:max-w-[259px] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2" width={259} height={346} sizes="(max-width: 640px) 80vw, (min-width: 641px) and (max-width: 1024px) 50vw, 286px" />
                    <div className="flex flex-col w-full">
                        {WORK_TOURISM.map((i, idx) => (
                            <div key={idx} className={`flex flex-row ${idx === 1 ? " mt-[33px]" : ""} items-start lg:gap-[340px] gap-6 xl:gap-0 justify-between h-full w-full relative z-[1]`}>
                                {i.items.map((e, index) => (
                                    <div key={index} className={`flex max-w-[378px] flex-col ${index === 0 ? "lg:items-end items-start" : "items-start"} ${index === 1 ? "lg:hidden" : ""} ${idx === 0 && index === 1 ? "lg:hidden flex" : ""} ${idx === 1 && index === 0 ? "hidden lg:flex" : ""} ${idx === 0 && index === 2 ? "hidden lg:flex" : ""}`}>
                                        <span className={`grid ${index === 0 ? "heading" : "para"} place-items-center text-white font-semibold md:text-lg text-xs md:w-10 md:h-10 w-[30px] h-[30px] bg-offOrange rounded-full font-rubik`}>{e.number}</span>
                                        <p className={`font-medium ${index === 0 ? "heading" : "para"} md:text-xl text-base text-offBlack md:mt-4 mt-2 ${index === 0 ? "lg:text-right text-left" : "text-left"}`}>{e.heading}</p>
                                        <PrimaryParagraph className={`mt-3 ${index === 0 ? "heading" : "para"} ${index === 0 ? "lg:text-right text-left" : "text-left"}`} data={e.text} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Image src="/assets/images/webp/value-vector.webp" alt="vector" width={55} height={343} sizes="(max-width: 640px) 50vw, (min-width: 641px) and (max-width: 1024px) 30vw, 55px" className="left-0 absolute top-[17%] hidden md:flex" />
            <Image src="/assets/images/webp/value-bottom-img.webp" alt="value-bottom-img" width={1440} height={271} sizes="(max-width: 640px) 100vw, (min-width: 641px) and (max-width: 1024px) 80vw, 1440px" className="left-1/2 -translate-x-1/2 max-w-[1440px] absolute bottom-0 translate-y-1/2 object-cover h-[271px]" />
        </div>
    )
}

export default CoreValues