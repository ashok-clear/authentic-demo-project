"use client"
import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from "react";
import { client } from '../../../..';

const bannerData = {
    title: "Digital investigations without the risk",
    subtitle: "Stay isolated from malware and anonymous to prying eyes on the surface, deep and dark web with Authentic8's Silo for Research.",
}

const HeroBanner = ({ title, subtitle = [], version = "v-1" }) => {

    const [document, setDocument] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await client.getByUID("Test", String(1));
                console.log(doc)
                setDocument(doc.data);
            } catch (err) {
                console.error("Failed to fetch Prismic data:", err);
            }
        };
        fetchData()
    }, []);

    return (
        <section className='w-full relative overflow-hidden max-w-[1920px] bg-white mx-auto min-h-[400px] xl:min-h-[632px] lg:min-h-[480px] py-[45px] lg:py-[100px] flex flex-col justify-center'>
            <div className="absolute w-full h-full inset-0 block">
                <video muted autoPlay loop allowFullScreen playsInline preload="auto" className='block w-full h-full object-cover'>
                    <source src="/videos/authentic8.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="container">
                <div className='max-w-[712px] ml-0'>
                    {title && (
                        <h1 className='font-[500] text-[32px] sm:text-[42px] md:text-[46px] lg:text-[52px] xl:text-[62px] leading-[1.2] tracking-normal mb-[12px] lg:mb-[15px] text-white' dangerouslySetInnerHTML={{ __html: title }}></h1>
                    )}
                    {subtitle && <h4 className='font-[500] leading-[1.13] tracking-normal text-white max-w-[640px] text-[20px] md:text-[24px] lg:text-[28px]'>{subtitle}</h4>}
                    <div className='mt-[15px] lg:mt-[32px]'>
                        <p>{document?.username}</p>
                        <p>{document?.password}</p>
                        <Image src={document?.manimage.url} width={300} height={300} alt="man" />
                        <a className='px-[30px] py-[10px]  lg:px-[40px] lg:py-[16px] mt-0 text-center inline-block relative outline-none text-[14px] lg:text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white no-underline ' href="">
                            <span className='inline-block text-[14px] lg:text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>Free trial</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner;
