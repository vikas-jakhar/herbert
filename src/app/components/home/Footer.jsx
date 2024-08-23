import Image from 'next/image'
import React from 'react'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { FOOTER_DATA, SOCIAL_ICONS } from '@/app/utils/helper';
import Icons from '../common/Icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='py-4 min-h-[503px] bg-offWhite flex-col flex justify-end'>
            <div className="container pb-10 sm:pb-12 relative z-[5] pt-24 sm:pt-10 lg:pt-20 mt-[132px]">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 xl:gap-0 justify-between mb-[3px]">
                    <div className="max-w-[412px] w-full">
                        <a href="" className='w-fit'>
                            <Image src="/assets/images/webp/footer-herbert-logo.png" className='sm:max-w-[326px] max-w-[210px] w-full' alt='herbert-logo' width={100} height={100} />
                        </a>
                        <PrimaryParagraph className='mt-[14px]' children="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." />
                    </div>
                    <div className="sm:max-w-[518px] max-w-[291px] w-full flex flex-col sm:flex-row justify-between">
                        <div className="flex flex-row justify-between max-w-[300px] w-full">
                            {FOOTER_DATA.map((i, index) => (
                                <div key={index} className="w-fit">
                                    <p className='font-medium text-sm sm:text-base text-offBlack opacity-90'>{i.heading}</p>
                                    <div className="flex flex-col pt-2">
                                        {i.items.map((e, idx) => (
                                            <a key={idx} href={e.link} className='w-fit mt-2 capitalize font-normal text-base text-offGray duration-300 ease-linear hover:scale-105 hover:text-offOrange'>{e.subHeading}</a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sm:w-fit w-full mt-8 sm:mt-0">
                            <p className='font-medium text-sm sm:text-base text-offBlack opacity-90'>Follow Us</p>
                            <div className="flex items-center gap-3 mt-4">
                                {SOCIAL_ICONS.map((e, idx) => (
                                    <a key={idx} href={e.link} className='rounded-full w-9 h-9 grid place-items-center bg-lightOrange-gradient duration-300 relative ease-linear group overflow-hidden hover:shadow-4xl'>
                                        <Icons IconName={e.icon} className="z-[2] relative" fill="group-hover:fill-white group-hover:drop-shadow-blue-sm" />
                                        <span className='flex h-0 w-0 bg-offOrange duration-300 ease-linear top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute group-hover:rotate-180 group-hover:w-16 group-hover:h-16'></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className='w-full h-px flex bg-mediumGray'></span>
            <span className='text-center mx-auto font-normal text-sm sm:text-base text-offGray mt-4'>Copyright © {currentYear} herbert, All rights reserved</span>
        </div>
    )
}

export default Footer