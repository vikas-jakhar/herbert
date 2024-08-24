"use client";
import React, { useLayoutEffect } from 'react';
import PrimaryParagraph from "../custom-ui/PrimaryParagraph";
import PrimaryButton from "../custom-ui/PrimaryButton";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Image from 'next/image';
import Header from '../common/Header';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
   
    return (
        <div className='relative pt-[14px] sm:pt-[23px] pb-16 bg-hero-small sm:bg-hero bg-contain bg-no-repeat bg-top' id='hero'>
            <Header />
            <div className="container pt-16 my-2 pb-2 sm:pb-12 relative z-[1]">
                <div className="max-w-[773px] w-full mx-auto flex flex-col items-center md:mb-20 mb-12">
                    <h2 className='lg:text-custom-2xl Light text-custom-xl sm:text-4xl md:text-5xl leading-8 font-rubik text-black text-center xl:leading-custom-2xl font-semibold'>Simplifying <span className='text-lightRed'>German Immigration</span> with Herbert</h2>
                    <PrimaryParagraph className='md:mt-4 Herbert mt-[14px] text-center' children="At Herbert Visa, we envision a world where the path to German immigration is clear, accessible, and stress-free for everyone. While the information Herbert is trained on is publicly available, we recognize that navigating this vast sea of legal documents and regulations can be overwhelming." />
                    <PrimaryButton gsapClass="Light Landscape" text="Contact Us" className="md:mt-[42px] mt-8 bg-offOrange text-white" />
                </div>
                <div className="md:pt-10 pt-16 max-w-[1073px] w-full flex lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-[484px] w-full">
                        <PrimaryHeading className='text-left Complex' children="Guiding " redText="Light in a Complex " blackText="Landscape" />
                        <PrimaryParagraph className='md:mt-4 mt-[14px] text-left Complex' children="We see Herbert as more than just a chatbot – he's a friendly, knowledgeable guide in the often confusing world of German immigration law. Our vision is to bridge the gap between raw information and practical understanding, making the immigration process more approachable for all." />
                    </div>
                    <div className="relative max-w-[261px] hello md:max-w-[392px] w-full max-h-[305px] sm:max-h-[457px] mt-8 lg:mt-0">
                        <Image src="/assets/images/webp/hello-img.webp" alt='herbert-img' className='w-full max-w-[60px] md:max-w-[91.38px] ml-auto absolute top-0 left-0' width={91} height={66} />
                        <Image src="/assets/images/webp/herbert-img.webp" alt='herbert-img' className='w-full max-w-[239px] sm:max-w-[359px] max-h-[305px] sm:max-h-[457px] mx-auto lg:mr-0' width={259} height={457} />
                    </div>
                </div>
            </div>
            <Image src="/assets/images/webp/vector.webp" alt='vector' className='absolute bottom-[22%] right-0 hidden md:flex' width={60} height={300} />
        </div>
    )
}

export default Hero 