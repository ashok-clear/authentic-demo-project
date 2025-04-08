"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import { client } from '../../../..'

const tabData = [
    {
        title: "Cloud-Native Platform",
        blurb: "Deploy and scale seamlessly across the globe, and centrally manage activity regardless of computer, network or location",
        imageSource: "/images/a8-cloud-native-platform2.png",
        altText: "cloud-image"
    },
    {
        title: "Full Isolation",
        blurb: "Run all web code in a secure, high-trust environment fully isolated on all sides — from malicious web content to unmanaged devices and networks",
        imageSource: "/images/a8-full-isolation.png",
        altText: "full-isolation"
    },
    {
        title: "Policy and Audit",
        blurb: "Govern all web activity with rich, admin-defined policies and give admins complete visibility, audit and oversight through a comprehensive logging framework",
        imageSource: "/images/a8-policy-and-audit.png",
        altText: "policy-and-audit"
    },

]

const TabWithImg = () => {
    const [activeTab, setactiveTab] = useState(tabData[0]);

        const [document, setDocument] = useState()
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const doc = await client.getByUID("tabswithdata", String(7));
                    console.log(doc)
                    setDocument(doc.data);
                } catch (err) {
                    console.error("Failed to fetch Prismic data:", err);
                }
            };
            fetchData()
        }, []);

    return (
        <section className='h-[100vh] w-full  py-[45px] lg:py-[150px] relative m-auto max-w-[1920px] bg-[#f1f3f5] overflow-hidden'>
            <div className="container">
                <h2 className="text-[#151831] mb-[30px] text-[30px] lg:text-[50px] font-proxima font-semibold leading-[1.1]">{document?.title}</h2>
                <h5 className='mb-[30px] mt-[10px] text-[#151831] text-[16px] lg:text-[24px] font-proxima font-semibold leading-[1.1]'>{document?.subtitle}</h5>
                <div className="flex flex-wrap justify-between items-start mt-[40px]" >
                    <div className="basis-full lg:basis-5/12 w-full relative lg:border-r-2 pr-[50px]  lg:border-r-[#5856d6]">
                        <div className="relative min-h-[300px] pr-[50px">
                            {tabData.map((item, index) => (
                                <div className="relative px-[29px] py-[20px] bg-transparent border-none rounded-[5px] transition-colors duration-300 ease-in-out cursor-pointer" data-tab={`tab-${index}`} key={index} onClick={() => setactiveTab(item)}>
                                    <h4 className="text-[#151831] text-[18px] lg:text-[24px] font-semibold leading-[1.21] mt-0 mb-0 tracking-normal">{item.title}</h4>
                                    <p className='text-[#424c67] max-w-[445px] font-proxima text-[16px] lg:text-[18px] font-normal leading-[1.39] tracking-normal'>
                                        {item.blurb}</p>
                                </div>
                            ))}
                            <div className="mt-[40px] text-center !lg:text-left">
                                <a href="/products/silo-web-isolation-platform" className="lg:mx-[25px] min-w-[225px] px-[30px] py-[10px] lg:px-[40px]  lg:py-[16px] mt-0 m-[5px] text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white no-underline ">
                                    <span className='inline-block text-[14px]  lg:text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>View Platform</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full lg:basis-7/12">
                        <div className=" lg:max-w-[690px] w-full overflow-hidden  max-h-[507px] float-right">
                            <Image
                                src={activeTab.imageSource}
                                alt={activeTab.altText}
                                width={690}
                                height={507}
                                className='h-[300px] lg:h-[507px]  object-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabWithImg;
