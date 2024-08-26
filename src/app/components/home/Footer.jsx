import Image from 'next/image'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph'
import { FOOTER_DATA, SOCIAL_ICONS } from '@/app/utils/helper';
import Icons from '../common/Icons';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='py-4 min-h-[503px] bg-offWhite flex-col flex justify-end'>
            <div className="container pb-10 sm:pb-12 relative z-[5] pt-24 sm:pt-10 lg:pt-20 mt-[132px]">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 xl:gap-0 justify-between mb-[3px]">
                    <div className="max-w-[412px] w-full">
                        <Link href="" className='w-fit'>
                            <Image loading="lazy" src="/assets/images/webp/herbert-logo.webp" alt="herbert-logo" width={326} height={98} sizes="(max-width: 640px) 80vw, (min-width: 641px) and (max-width: 1024px) 60vw, 326px" className="sm:max-w-[326px] max-w-[210px] bottom w-full" />
                        </Link>
                        <PrimaryParagraph className='mt-[14px] bottom' data="Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae velit mi sed mattis tempor tristique. Purus sed phasellus metus lectus auctor." />
                    </div>
                    <div className="lg:max-w-[518px] w-full flex flex-col sm:flex-row justify-between">
                        <div className="flex flex-row justify-between sm:max-w-[350px] md:max-w-[400px] lg:max-w-[300px] w-full">
                            {FOOTER_DATA.map((i, index) => (
                                <div key={index} className="w-fit">
                                    <p className='font-medium font-lato bottom text-sm sm:text-base text-offBlack sm:opacity-90'>{i.heading}</p>
                                    <div className="flex flex-col pt-2">
                                        {i.items.map((e, idx) => (
                                            <div key={idx} className="bottom mt-2 w-fit"><Link href="/" className='w-fit capitalize font-normal text-base text-offGray duration-300 ease-linear hover:text-offOrange'>{e.subHeading}</Link></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="sm:w-fit w-full mt-8 sm:mt-0">
                            <p className='font-medium text-sm sm:text-base bottom text-offBlack opacity-90'>Follow Us</p>
                            <div className="flex items-center gap-3 mt-4">
                                {SOCIAL_ICONS.map((e, idx) => (
                                    <div key={idx} className="bottom w-fit">
                                        <Link href={e.link} aria-label="social icon" aria-hidden="true" target='_blank' rel="noreferrer" className='rounded-full w-9 h-9 grid place-items-center bg-lightOrange-gradient duration-300 relative ease-linear group overflow-hidden hover:shadow-4xl'>
                                            <Icons IconName={e.icon} className="z-[2] relative" fill="group-hover:fill-white group-hover:drop-shadow-black-sm" />
                                            <span className='flex h-0 w-0 bg-offOrange duration-300 ease-linear top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute group-hover:rotate-180 group-hover:w-16 group-hover:h-16'></span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className='w-full h-px flex bg-mediumGray'></span>
            <span className='text-center mx-auto font-normal bottom text-sm sm:text-base text-offGray mt-4'>Copyright © {currentYear} herbert, All rights reserved</span>
        </div>
    )
}

export default Footer