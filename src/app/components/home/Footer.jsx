import Image from 'next/image'
import React from 'react'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { FOOTER_DATA } from '@/app/utils/helper';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='py-4 min-h-[503px] bg-offWhite flex-col flex justify-end'>
            <div className="container pb-12">
                <div className="flex flex-row justify-between mb-[3px]">
                    <div className="max-w-[412px] w-full">
                        <a href="" className='w-fit'>
                            <Image src="/assets/images/webp/footer-herbert-logo.png" className='max-w-[326px] w-full' alt='herbert-logo' width={100} height={100} />
                        </a>
                        <PrimaryParagraph className='mt-[14px]' children="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." />
                    </div>
                    <div className="max-w-[518px] w-full flex justify-between">
                        {FOOTER_DATA.map((i, index) => (
                            <div key={index} className="w-fit">
                                <p className='font-medium text-base text-offBlack opacity-90'>{i.heading}</p>
                                <div className="flex flex-col pt-2">
                                    {i.items.map((e, idx) => (
                                        <a key={idx} href={e.link} className='w-fit mt-2 capitalize font-normal text-base text-offGray duration-300 ease-linear hover:scale-105 hover:text-offOrange'>{e.subHeading}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="w-fit">
                            <p className='font-medium text-base text-offBlack opacity-90'>Follow Us</p>
                            <div className="flex items-center gap-12">
                                <a href=""></a>
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