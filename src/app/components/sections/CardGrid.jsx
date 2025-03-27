import React from 'react'
import Image from 'next/image'
const CardGrid = () => {
  return (
    <section className='w-full relative py-[45px] lg:py-[100px] overflow-hidden max-w-[1920px] bg-white mx-auto min-h-[632px] flex flex-col justify-center'>
      <div className="container">
        <h2 className='text-[#151831] text-[24px] lg:text-[50px] font-semibold leading-tight mb-5'>Learn more about our approach and solutions</h2>
        <div className="flex relative outline-none w-calc-full-plus-30 flex-wrap lg:flex-nowrap">
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full  border-2 border-[#bdc4cc]  lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/blog.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
                <span className='block text-[16px] font-semibold leading-[1.88] max-w-[210px] overflow-hidden tracking-normal text-[#693dc7] uppercase'>blog</span>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Collecting OSINT on Discord: a guide
                </h4>
                <p className='text-[#151831] mt-[6px] '>Enable users to venture into uncategorized or untrusted websites without risk to your organization</p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full  border-2 border-[#bdc4cc]  lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
             <div className="relative ml-[-25px] mt-[-25px] mr-[-25px] h-[218px] ">
              <Image
                src="/images/s2e60_card_0.webp"
                alt="man-image"
                width={406}
                height={218}
                className='h-full w-full object-cover max-w-full align-top border-0"'
              />
              <div className="flex items-center mb-[16px] absolute top-[32px] left-[25px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/icons/mike-icon.svg"
                    alt="man-image"
                    width={48}
                    height={42}
                    className=''
                  />
                </div>
                <span className='block text-[16px] font-semibold leading-[1.88] max-w-[210px] overflow-hidden tracking-normal text-white uppercase'>Podcast</span>
              </div>
             </div>
             <div className="pt-[20px]  mb-[20px] relative">
              <h4 className="overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima">
                <span className="short-text">S2E60 | Social media intelligence…</span>
                {/* <div class="full-text">S2E60 | Social media intelligence gathering with Ritu Gill</div> */}
              </h4>
             </div>
             <div className="absolute w-auto  left-0 right-0 bottom-0 h-[51px] bg-white pt-[10px] pr-[25px] pb-0 pl-[25px]">
              <a href="/needlestack/social-media-intelligence-gathering" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Listen</a>
             </div>
            </div>  
          </div>
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full  border-2 border-[#bdc4cc]  lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/blog.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className='w-full max-w-100 '
                  />
                </div>
                <span className='block text-[16px] font-semibold leading-[1.88] max-w-[210px] overflow-hidden tracking-normal text-[#693dc7] uppercase'>blog</span>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  The perimeter is dead. Long live perimeter capabilities.
                </h4>
                <p className='text-[#151831] mt-[6px] '></p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardGrid;
