import React from 'react';
import Icons from "../common/Icons";
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { CARD_DATA } from "@/app/utils/helper";
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryButton from '../custom-ui/PrimaryButton';
import Image from 'next/image';

const Empowering = () => {
    return (
        <div className='bg-offWhite relative py-16 sm:py-20 Empowering'>
            <div className="container sm:pb-10 lg:pt-4">
                <div className="flex items-center flex-col lg:flex-row justify-between gap-5">
                    <div className="max-w-[558px] w-full">
                        <div className="flex flex-row -mx-3 flex-wrap">
                            {CARD_DATA.map((items, index) => (
                                <div key={index} className="sm:w-1/2 w-full px-3 mt-6">
                                    <div className="bg-white w-full h-full p-3 xl:p-5 rounded-xl flex flex-col items-center card">
                                        <Icons IconName={items.icon} className="w-[72px] h-[72px] justify-center items-center bg-lightOrange-gradient rounded-full" />
                                        <p className='font-medium text-base sm:text-xl text-offBlack text-center gap-1.5 sm:gap-0 mt-4 flex sm:flex-col'>
                                            <span>{items.title}</span> {items.heading}
                                        </p>
                                        <PrimaryParagraph className='text-center mt-1.5' data={items.text} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[494px] w-full flex flex-col items-start">
                        <PrimaryHeading className='text-left text' data="Empowering Through " redText="Information" />
                        <PrimaryParagraph className='mt-3 text text-left' data="While Herbert cannot provide legal advice, we envision him as an empowering tool that helps users" />
                        <PrimaryButton text="Learn More" gsapClass='text' className="bg-offOrange text-white mt-11" />
                    </div>
                </div>
            </div>
            <Image src='/assets/images/webp/white-vector.webp' style={{ width: 'auto', height: 'auto' }} alt='vector' width={39} height={271} className='right-0 absolute bottom-[41%] h-[250px] sm:h-[271px] sm:bottom-1/4 w-5 sm:w-[39px]' />
        </div>
    );
};

export default Empowering;