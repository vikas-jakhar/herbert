import React from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import Image from 'next/image'
import { WORK_TOURISM } from '@/app/utils/helper'

const CoreValues = () => {
    return (
        <div className='relative py-20'>
            <div className="container py-10">
                <PrimaryHeading className='text-center' children="Our Core " redText="Values" />
                <PrimaryParagraph className='text-center max-w-[716px] mx-auto mt-4' children="This regulation details the conditions under which foreign nationals can work in Germany. Herbert's training in the Beschäftigungsverordnung allows for accurate guidance on:" />
                <div className="mt-14 relative flex justify-between">
                    {WORK_TOURISM.map((i) => (
                        <div key={i.id} className="max-w-[378px] w-full">
                            {i.items.map((e, index) => (
                                <div key={index} className={`flex flex-col ${index === 1 ? "mt-[33px]" : ""} ${i.id === 1 ? "items-end" : "items-start"}`}>
                                    <span className='grid place-items-center text-white font-semibold text-lg w-10 h-10 bg-offOrange rounded-full'>{e.number}</span>
                                    <p className={`font-medium text-xl text-offBlack mt-4 ${i.id === 1 ? "text-right" : "text-left"}`}>{e.heading}</p>
                                    <PrimaryParagraph className={`mt-3 ${i.id === 1 ? "text-right" : "text-left"}`} children={e.text} />
                                </div>
                            ))}    
                        </div>
                    ))}
                    <Image src='/assets/images/webp/work-tourism.png' className='w-full max-w-[259px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' alt='work-tourism' width={100} height={100} />
                </div>
            </div>
        </div>
    )
}

export default CoreValues