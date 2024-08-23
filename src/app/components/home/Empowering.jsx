"use client";
import React, { useLayoutEffect } from 'react';
import Icons from "../common/Icons";
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { CARD_DATA } from "@/app/utils/helper";
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryButton from '../custom-ui/PrimaryButton';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Empowering = () => {
    useLayoutEffect(() => {
        const aot = gsap.context(() => {
            gsap.from(".card", {
                x: -400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Empowering", 
                    start: "top 50%", 
                    end: "bottom top", 
                    toggleActions: "play none none reverse", 
                },
            });
            gsap.from(".text", {
                x: 400,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".Empowering",
                    start: "top 80%",
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
            });
        });

        return () => aot.revert();
    }, []);

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
                                        <p className='font-medium text-xl text-offBlack text-center mt-4 flex flex-col'>
                                            <span>{items.title}</span> {items.heading}
                                        </p>
                                        <PrimaryParagraph className='text-center mt-3' children={items.text} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[494px] w-full flex flex-col items-center lg:items-start">
                        <PrimaryHeading className='text-center text lg:text-left' children="Empowering Through " redText="Information" />
                        <PrimaryParagraph className='mt-3 text text-center lg:text-left' children="While Herbert cannot provide legal advice, we envision him as an empowering tool that helps users" />
                        <PrimaryButton text="Learn More" gsapClass='text' className="bg-offOrange text-white mt-11" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empowering;