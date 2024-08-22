import React from 'react'
import PrimaryParagraph from "../custom-ui/PrimaryParagraph";
import PrimaryButton from "../custom-ui/PrimaryButton";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='relative py-16'>
            <div className="container my-2 pb-12">
                <div className="max-w-[773px] w-full mx-auto flex flex-col items-center mb-20">
                    <h2 className='text-custom-2xl font-rubik text-black text-center leading-custom-2xl font-semibold'>Simplifying <span className='text-lightRed'>German Immigration</span> with Herbert</h2>
                    <PrimaryParagraph className='mt-4 text-center' children="At Herbert Visa, we envision a world where the path to German immigration is clear, accessible, and stress-free for everyone. While the information Herbert is trained on is publicly available, we recognize that navigating this vast sea of legal documents and regulations can be overwhelming." />
                    <PrimaryButton text="Contact Us" className="mt-[42px] bg-offOrange text-white" />
                </div>
                <div className="pt-10 max-w-[1073px] w-full flex lg:flex-row flex-col-reverse items-center justify-between">
                    <div className="max-w-[484px] w-full mt-6 lg:mt-0">
                        <PrimaryHeading className='text-center lg:text-left' children="Guiding " redText="Light in a Complex " blackText="Landscape" />
                        <PrimaryParagraph className='mt-4 text-center lg:text-left' children="We see Herbert as more than just a chatbot – he's a friendly, knowledgeable guide in the often confusing world of German immigration law. Our vision is to bridge the gap between raw information and practical understanding, making the immigration process more approachable for all." />
                    </div>
                    <div className="relative max-w-[392px] w-full max-h-[457px]">
                        <Image src="/assets/images/webp/hello-img.png" alt='herbert-img' className='w-full max-w-[91.38px] ml-auto absolute top-0 left-0' width={100} height={100} />
                        <Image src="/assets/images/webp/herbert-img.png" alt='herbert-img' className='lg:w-full w-8/12 max-w-[359px] mx-auto lg:mr-0' width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero 