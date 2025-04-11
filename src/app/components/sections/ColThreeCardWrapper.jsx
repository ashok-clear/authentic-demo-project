'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { client } from '../../../..'

const ColThreeCardWrapper = () => {

  const [document, setDocument] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doc = await client.getByUID("cardcolumnsecond", String(11));
        console.log(doc)
        setDocument(doc.data);
      } catch (err) {
        console.error("Failed to fetch Prismic data:", err);
      }
    };
    fetchData()
  }, []);

  return (
    <section className='ColThreeCardWrapper w-full relative py-[45px] lg:py-[100px] overflow-hidden bg-[#f1f3f5] max-w-[1920px] bg-white mx-auto min-h-[632px] flex flex-col justify-center'>
      <div className="container">
        <div className="">
          <h2 className='text-[#151831] text-[24px] lg:text-[50px] font-semibold leading-tight mb-5 max-w-[880px]'>{document?.title}</h2>
        </div>
        <div className="flex relative outline-none w-calc-full-plus-30 flex-wrap ">
          {document?.card?.map((card, index) => {
            return (
                <div key={index} className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
                  <div className='relative overflow-visible shadow-lg inline-block align-top h-full   lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
                    <div className="flex items-center mb-[16px]">
                      <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                        <Image src={card.logo.url} alt="logo" width={47} height={52}
                        />
                      </div>
                    </div>
                    <div className="h-[calc(100%-20%)] pb-[30px] relative">
                      <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                        {card.subtitle}
                      </h4>
                      <p className='text-[#151831] mt-[6px] '>{card.subtext}</p>
                    </div>
                    <div className="absolute bottom-[20px] left-[25px] w-auto">
                      <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">{document?.link.text}</a>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default  ColThreeCardWrapper;
