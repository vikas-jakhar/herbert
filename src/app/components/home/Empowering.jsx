"use client"; // Add this line at the top

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Icons from "../common/Icons";
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { CARD_DATA } from "@/app/utils/helper";
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryButton from '../custom-ui/PrimaryButton';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Empowering = () => {
    const cardRefs = useRef([]);
    cardRefs.current = [];

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    // useEffect(() => {
    //     var tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".container",
    //             start: "top top",
    //             end: "bottom top",
    //             scrub: true,
    //             markers: false,
    //         }
    //     });

    //     tl.fromToto(".addToRefs", {
    //         y: 1000,
    //         duration: 2,
    //     },
    //         {
    //             y: 0,
    //             duration: 2,
    //         }
    //     );
    // }, []);

    return (
        <div className='bg-offWhite relative py-20'>
            <div className="container pb-10 pt-4">
                <div className="flex items-center flex-col lg:flex-row justify-between gap-5">
                    <div className="max-w-[558px] w-full">
                        <div className="flex flex-row -mx-3 flex-wrap">
                            {CARD_DATA.map((items, index) => (
                                <div key={index} className="sm:w-1/2 w-full px-3 mt-6">
                                    <div
                                        ref={addToRefs}
                                        className="bg-white w-full h-full p-3 xl:p-5 rounded-xl flex flex-col items-center"
                                    >
                                        <Icons IconName={items.icon} className="w-[72px] h-[72px] justify-center items-center bg-lightOrange-gradient rounded-full" />
                                        <p className='font-medium text-xl text-offBlack text-center mt-4 flex flex-col'> <span>{items.title}</span> {items.heading}</p>
                                        <PrimaryParagraph className='text-center mt-3' children={items.text} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[494px] w-full flex flex-col items-center lg:items-start">
                        <PrimaryHeading className='text-center lg:text-left' children="Empowering Through " redText="Information" />
                        <PrimaryParagraph className='mt-3 text-center lg:text-left' children="While Herbert cannot provide legal advice, we envision him as an empowering tool that helps users" />
                        <PrimaryButton text="Learn More" className="bg-offOrange text-white mt-11" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empowering;
