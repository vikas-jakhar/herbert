"use client"
import React, { useState } from 'react'
import PrimaryHeading from '../custom-ui/PrimaryHeading'
import PrimaryParagraph from '../custom-ui/PrimaryParagraph';
import { ACCORDION_DATA } from '@/app/utils/helper';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='pb-2 pt-20 lg:pb-36'>
            <div className="container mt-10">
                <PrimaryHeading className='text-center' children="Frequently Asked " redText="Questions" />
                <PrimaryParagraph className='text-center mt-4 max-w-[622px] mx-auto' children="Help users find quick answers to common queries about Herbert, our AI-powered assistant for German visa and immigration processes. " />
                <div className="pt-16 flex flex-row gap-6 w-full">
                    {ACCORDION_DATA.map((item, outerIndex) => (
                        <div key={item.id} className='max-w-[558px] w-full'>
                            {item.items.map((i, index) => {
                                const computedIndex = `${outerIndex}-${index}`; 

                                return (
                                    <div key={computedIndex}
                                        className={`${openIndex === computedIndex ? 'border-transparent' : 'border-gray'} w-full border-[0.5px] overflow-hidden rounded-2xl flex mx-auto max-w-[973px] mt-3 sm:mt-5 justify-center relative duration-300 ease-linear`}>
                                        <div className="accordion w-full">
                                            <div role="button"
                                                className={`${openIndex === computedIndex ? 'bg-darkBlue' : 'bg-white'} duration-300 ease-linear accordion-header relative z-[1] flex items-center justify-between cursor-pointer py-[18px] px-6`}
                                                onClick={() => handleToggle(computedIndex)}
                                                aria-expanded={openIndex === computedIndex}
                                            >
                                                <div className="flex items-start sm:items-center gap-1.5">
                                                    <h3 className={`font-medium text-sm sm:text-base`}>{i.title}</h3>
                                                </div>
                                                <div className="w-[14px] h-[14px] relative">
                                                    <span className='flex w-full h-0.5 bg-offGray'></span>
                                                </div>
                                            </div>
                                            <div
                                                className={`accordion-content max-h-0 overflow-hidden duration-300 ease-linear ${openIndex === computedIndex ? 'max-h-96' : 'max-h-0'}`}
                                            >
                                                <div className="flex items-start gap-3 pl-3 sm:pl-6 py-4 sm:py-6 bg-lightGray w-full">
                                                    <p className='text-gray text-base sm:text-lg md:text-xl font_gilroy_regular max-w-[821px]'>
                                                        {i.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq;
