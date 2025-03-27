"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import { client } from '../../../..';


const CardWithbutton = () => {

    const [document, setDocument] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await client.getByUID("cardwithbutton", String(3));
                console.log(doc)
                setDocument(doc.data);
            } catch (err) {
                console.error("Failed to fetch Prismic data:", err);
            }
        };
        fetchData()
    }, []);
    return (
        <section className='w-full relative py-[45px] lg:py-[100px] overflow-hidden max-w-[1920px] bg-white mx-auto'>
            <div className="container">
                <h2 className="text-[#151930] max-w-[850px] tracking-[-0.5px] text-[24px] lg:text-[50px] font-proxima-nova font-semibold leading-[1.1]">{document?.title}</h2>
                <div className='flex flex-wrap justify-between mt-[10px] lg:mt-[30px] flex-col md:flex-row'>
                    <div className="basis-full md:basis-6/12 flex-shrink-0 flex-grow-0 md:max-w-[calc(50%-25px)] min-h-[260px] rounded-[5px] shadow-[5px_5px_10px_0_rgba(21,25,48,0.2)] p-[25] lg:p-[44px_50px_35px] mt-[25px] relative bg-gradient-to-b from-[#3f6ab1] to-[#43ade0]">
                        <div className="mb-[80px] lg:mb-[95px]">
                            <h4 className='text-white font-proxima-nova font-black lg:font-medium text-[20px] lg:text-[30px] leading-[1.13]'>{document?.subhead}</h4>
                            <p className='text-white mt-[13px] font-proxima-nova text-14px lg:text-[18px] font-normal leading-[1.39] tracking-normal'>{document?.subtitle}</p>
                        </div>
                        <div className="absolute bottom-[35px]">
                            <a href="/products/silo-for-research" className="px-[25] py-[10] lg:px-[30px] lg:py-[16px]  bg-[rgba(255,255,255,0.15)] border-white border-2 border-transparent text-white text-center inline-block relative font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-md overflow-hidden align-middle no-underline">
                                <span>{document?.button.text}</span></a>
                        </div>
                    </div>
                    <div className="basis-full md:basis-6/12 flex-shrink-0 flex-grow-0 md:max-w-[calc(50%-25px)] min-h-[260px] rounded-[5px] shadow-[5px_5px_10px_0_rgba(21,25,48,0.2)] p-[25] lg:p-[44px_50px_35px] mt-[25px] relative bg-gradient-to-b from-[#2a3371] to-[#5658cd]">
                        <div className="mb-[80px] lg:mb-[95px]">
                            <h4 className='text-white font-proxima-nova font-black lg:font-medium text-[20px]  lg:text-[30px] leading-[1.13]'>{document?.secondsubhead}</h4>
                            <p className='text-white mt-[13px] font-proxima-nova text-14px lg:text-[18px] font-normal leading-[1.39] tracking-normal'>{document?.secondsubtitle}</p>
                        </div>
                        <div className="absolute bottom-[35px]">
                            <a href="/products/silo-for-research" className="px-[25px] py-[10px] lg:px-[30px] lg:py-[16px]  bg-[rgba(255,255,255,0.15)] border-white border-2 border-transparent text-white text-center inline-block relative font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-md overflow-hidden align-middle no-underline">
                            <span>{document?.button.text}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardWithbutton;
