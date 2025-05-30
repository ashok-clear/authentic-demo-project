"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { client } from '../../../..';
import { useRouter } from 'next/navigation';

const Header = () => {
    const navegate = useRouter() 

    const [document, setDocument] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const doc = await client.getByUID("header", String(5));
                console.log(doc)
                setDocument(doc.data);
            } catch (err) {
                console.error("Failed to fetch Prismic data:", err);
            }
        };
        fetchData()
    }, []);


    return (
        <header className="w-full relative max-w-[1920px] fixed top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-[0_5px_5px_2px_rgba(66,75,104,0.13)] z-99 py-5 lg:py-0">
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className="relative max-w-[158px] w-full h-[23px]">
                        <a href="/" className='absolute left-0 top-0 w-full h-full text-transparent text-0 opacity-0 z-2'></a>
                        {document?.headerlogo?.url ? (
                            <Image
                                src={document.headerlogo.url}
                                alt="Header Logo"
                                width={200}
                                height={100}
                            />
                        ) : null}
                    </div>
                    <nav className='flex justify-between items-center lg:flex-[0_0_calc(100%-158px)] max-w-[calc(100%-158px)]'>
                        <ul className='flex space-x-[30px] pl-[57px] hidden  lg:flex'>
                            <li className='py-[32px] position-[inherit] list-none'>
                                <Link className='text-[#151831] text-[15px] lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/product" >{document?.linkfirst.text}</Link>
                            </li>
                            <li className='py-[32px] position-[inherit] list-none'>
                                <Link className='text-[#151831] text-[15px] lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/usecases" >{document?.linksecond.text}</Link>
                            </li>
                            <li className='py-[32px] position-[inherit] list-none'>
                                <Link className='text-[#151831] text-[15px] lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/" >{document?.linkthird.text}</Link>
                            </li>
                            <li className='py-[32px] position-[inherit] list-none'>
                                <Link className='text-[#151831] text-[15px] lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/" >{document?.linkfourth.text}</Link>
                            </li>
                            <li className='py-[32px] position-[inherit] list-none'>
                                <Link className='text-[#151831] text-[15px] lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/">{document?.fifthlink.text}</Link>
                            </li>
                                <li className='py-[32px] position-[inherit] list-none'>
                                <Link className='text-[#151831] text-[15px] lg:text-[13px] xl:text-[15px] font-bold transition-colors duration-300 ease-in-out uppercase relative no-underline outline-none cursor-pointer inline-block font-sans' href="/">{document?.fifthlink.text}</Link>
                            </li>
                        </ul>

                        <div className="hidden lg:flex">
                            <span></span>
                            <a className='px-[13px] py-[10px] mr-[17px] text-[14px] border-[1px] border-[#68be62] bg-transparent mt-0 text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2  rounded-[5px] overflow-hidden align-middle text-white' href="">
                                <span className='text-[#68be62] leading-[1.23] text-[14px] left-0 inline-block relative font-sans uppercase transition-all duration-300 ease-in-out'>{document?.button.text}</span>
                            </a>
                            <a className='px-[13px] py-[10px] mt-0 text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white' href="">
                                <span>{document?.buttonsecond.text}</span>
                            </a>
                        </div>

                    </nav>
                    <div className="block relative w-[27px] h-[25px] text-[0] cursor-pointer ml-auto p-0 lg:hidden ">
                        <span className='absolute w-full h-[3px] bg-[#424b68] block left-0 top-[3px]'></span>
                        <span className='absolute w-full h-[3px] bg-[#424b68] block left-0 top-[44%]'></span>
                        <span className='absolute w-full h-[3px] bg-[#424b68] block left-0 top-[19px]'></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
