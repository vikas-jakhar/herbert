"use client"
import React, { useState, useRef, useLayoutEffect } from 'react';
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { ACCORDION_DATA } from '@/app/utils/helper';
import PrimaryButton from '../custom-ui/PrimaryButton';
import Image from 'next/image';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const getHeight = (index) => {
        if (contentRefs.current[index]) {
            return contentRefs.current[index].scrollHeight + 'px';
        }
        return '0px';
    };

    return (
        <div className='pb-2 pt-20 lg:pb-36 relative faq'>
            <div className="container sm:mt-10 relative z-[5]">
                <PrimaryHeading className='text-center left px-4' children="Frequently Asked " redText="Questions" />
                <PrimaryParagraph className='text-center right mt-[14px] md:mt-4 max-w-[622px] mx-auto' children="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes." />
                <div className="md:pt-10 pt-2 flex flex-col lg:flex-row lg:gap-6 w-full">
                    {ACCORDION_DATA.map((item, outerIndex) => (
                        <div key={item.id} className='lg:max-w-[558px] w-full'>
                            {item.items.map((i, index) => {
                                const computedIndex = `${outerIndex}-${index}`;
                                return (
                                    <div key={computedIndex} className={`${item.id === 1 ? "left" : "right"}`}>
                                        <div className={`${openIndex === computedIndex ? 'border-transparent shadow-3xl' : 'border-lightGray'} w-full border bg-white overflow-hidden rounded-md flex mt-3 lg:mt-6 justify-center relative duration-300 ease-linear`}>
                                            <div className="accordion w-full">
                                                <div role="button" className={`${openIndex === computedIndex ? 'pb-3 pt-[18px]' : 'py-[18px]'} duration-300 ease-linear accordion-header relative z-[1] flex items-center gap-2 justify-between cursor-pointer px-6`}
                                                    onClick={() => handleToggle(computedIndex)} aria-expanded={openIndex === computedIndex}>
                                                    <div className="flex items-start sm:items-center gap-1.5"><h3 className={`font-normal text-offBlack text-sm md:text-base`}>{i.title}</h3></div>
                                                    <div className="w-[14px] h-[14px] p-1.5 relative overflow-hidden">
                                                        <span className='flex w-full h-[3px] bg-offGray absolute left-0 top-1/2 -translate-y-1/2'></span>
                                                        <span className={`flex w-[3px] h-full bg-offGray absolute left-1/2 top-0 -translate-x-1/2 duration-300 ease-linear ${openIndex === computedIndex ? 'rotate-90 opacity-0' : ''}`}></span>
                                                    </div>
                                                </div>
                                                <div ref={el => contentRefs.current[computedIndex] = el} className={`accordion-content overflow-hidden duration-300 ease-linear`} style={{ maxHeight: openIndex === computedIndex ? getHeight(computedIndex) : '0px' }}>
                                                    <div className="flex items-start px-6 pb-[18px] w-full"><PrimaryParagraph children={i.content} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <PrimaryButton gsapClass="right" text="View All" className="bg-offOrange Visa text-white mt-8 md:mt-12 mx-auto" />
                <div id='about' className="rounded-2xl left bg-offOrange md:py-16 p-5 relative -bottom-16 -mb-36 lg:-bottom-[120px] lg:-mb-[160px] sm:-mb-24">
                    <div className="max-w-[694px] w-full mx-auto">
                        <PrimaryHeading className='text-white right text-center' children="Need Help in Your Visa? Ask Herbert Now!" />
                        <PrimaryParagraph className='text-white right max-w-[528px] mx-auto text-center mt-3 md:mt-4' children="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam." />
                        <div className="flex flex-col sm:flex-row justify-center items-center pt-8 md:pt-10 md:mt-0.5 gap-3 sm:gap-4">
                            <PrimaryButton gsapClass="w-full right flex justify-center sm:w-fit" text="Start your conversation" className="bg-white text-offOrange w-full max-w-[300px]" />
                            <PrimaryButton gsapClass="w-full right flex justify-center sm:w-fit" text="Learn More" className="bg-offOrange text-white border-white w-full max-w-[300px]" />
                        </div>
                    </div>
                </div>
            </div>
            <Image src='/assets/images/webp/faq-bottom-img.webp' className='left-1/2 -translate-x-1/2 absolute bottom-0 w-[1703px] lg:h-[686px] h-[485px] object-cover' alt='faq-bottom-img' width={1703} height={686} />
        </div>
    )
}

export default Faq;