"use client";
import React from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import PrimaryButton from '../custom-ui/PrimaryButton';
import Image from 'next/image';

const Vision = () => {
    return (
        <div className='bg-offWhite xl:min-h-[746px] py-16 flex flex-col justify-center items-center Vision relative overflow-hidden'>
            <div className="max-w-[1440px] mx-auto h-full w-full relative flex flex-col items-center" id='vision'>
                <Image loading="lazy" src="/assets/images/webp/our-vision.webp" alt="our-vision" width={701} height={602} sizes="(max-width: 640px) 90vw, (min-width: 641px) and (max-width: 1024px) 80vw, 701px" className="left-0 image max-w-[500px] xl:max-w-[701px] w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2" />
                <div className="container flex justify-center lg:justify-end relative z-[1] lg:my-24 mt-14">
                    <div className="xl:max-w-[473px] md:max-w-[453px] w-full flex items-start sm:items-center lg:items-start flex-col">
                        <PrimaryHeading data="Our " redText="Vision" className='Paragraph' />
                        <PrimaryParagraph className='md:mt-4 mt-[14px] Paragraph text-left sm:text-center lg:text-left' data="We're committed to continually refining and expanding Herbert's capabilities to serve this vision. Through Herbert, we aspire to make the dream of living, working, or studying in Germany feel within reach for people around the world. By providing clear guidance and reliable information, we hope to play a part in many successful immigration stories." />
                        <PrimaryButton text="Learn More" gsapClass="Paragraph" className="bg-offOrange text-white mt-8 md:mt-[58px]" />
                    </div>
                </div>
            </div>
            <Image loading="lazy" src="/assets/images/webp/white-vector.webp" alt="vector" width={39} height={271} sizes="(max-width: 640px) 50vw, (min-width: 641px) and (max-width: 1024px) 30vw, 39px" className="right-0 sm:w-[39px] w-5 sm:h-[271px] h-[200px] absolute bottom-[10%] sm:bottom-[15%]" />
        </div>
    )
}

export default Vision;