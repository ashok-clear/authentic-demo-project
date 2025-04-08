"use client"
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import { client } from '../../../..';

const ColWithLogo = () => {

    const [document, setDocument] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await client.getByUID("colwithlogos", String(4));
                console.log(doc)
                setDocument(doc.data);
            } catch (err) {
                console.error("Failed to fetch Prismic data:", err);
            }
        };
        fetchData()
    }, []);

    return (
        <section className='w-full relative  overflow-hidden max-w-[1920px]  mx-auto min-h-[632px] flex flex-col justify-center bg-[#f8f9fa] py-[45px] md:py-[80px] lg:px-0 lg:py-[150px]' >
            <div className="container">
                <h2 className='font-semibold leading-[1.1] tracking-normal max-w-[960px] text-[#151831] text-[24px] text-center sm:text-left sm:text-[30px] md:text-[50px] font-[Proxima-Nova]'>{document?.title}</h2>
                <div className='flex justify-center items-center  flex-wrap mt-[30px]'>
                    <div className="basis-full sm:basis-6/12 md:basis-3/12  mx-auto mt-[10px] relative">
                        <div className='mx-auto max-w-[150px] h-[100px] lg:max-w-[281px] lg:h-[130px] w-full mx-auto'>
                            {document?.fedrampwithtext?.url ? (
                                <Image
                                    src={document.fedrampwithtext.url}
                                    alt="Header Logo"
                                    width={158}
                                    height={23}
                                    className='w-full max-w-full align-top border-0 h-full object-contain'
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="basis-full sm:basis-6/12 md:basis-3/12  mx-auto mt-[10px] relative">
                        <div className='mx-auto max-w-[150px] h-[100px] lg:max-w-[281px] lg:h-[130px] w-full mx-auto'>
                            {document?.aicpalogo?.url ? (
                                <Image
                                    src={document.aicpalogo.url}
                                    alt="Header Logo"
                                    width={158}
                                    height={23}
                                    className='w-full max-w-full align-top border-0 h-full object-contain'
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="basis-full sm:basis-6/12 md:basis-3/12  mx-auto mt-[10px] relative">
                        <div className='mx-auto max-w-[150px] h-[100px] lg:max-w-[281px] lg:h-[130px] w-full mx-auto'>
                            {document?.pcilogo?.url ? (
                                <Image
                                    src={document.pcilogo.url}
                                    alt="Header Logo"
                                    width={158}
                                    height={23}
                                    className='w-full max-w-full align-top border-0 h-full object-contain'
                                />
                            ) : null}
                        </div>
                    </div>
                    <div className="basis-full sm:basis-6/12 md:basis-3/12  mx-auto mt-[10px] relative">
                        <div className='mx-auto max-w-[150px] h-[100px] lg:max-w-[281px] lg:h-[130px] w-full mx-auto'>
                            {document?.hipaacompliant?.url ? (
                                <Image
                                    src={document.hipaacompliant.url}
                                    alt="Header Logo"
                                    width={158}
                                    height={23}
                                    className='w-full max-w-full align-top border-0 h-full object-contain'
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className='mt-[36px] text-center'>
                    <a className='px-[40px] py-[16px] mt-0 text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white no-underline ' href="">
                        <span className='inline-block text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>{document?.button.text}</span>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default ColWithLogo;
