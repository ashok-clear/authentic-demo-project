import React from 'react'
import Image from 'next/image'

const CardColumnFirst = () => {
  return (
    <section className='w-full relative py-[45px] lg:py-[100px] overflow-hidden max-w-[1920px] bg-white mx-auto min-h-[632px] flex flex-col justify-center'>
      <div className="container">
        <h2 className='text-[#151831] text-[24px] lg:text-[50px] font-semibold leading-tight mb-5'>Ensure secure, anonymous digital investigations</h2>
        <div className="flex relative  outline-none w-calc-full-plus-30 flex-wrap ">
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full   lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/cyberthreat-dark-outline-icon.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Cybersecurity intelligence
                </h4>
                <p className='text-[#151831] mt-[6px] '>Access and analyze malicious content without exposing computer or network resources</p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div> 
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full    lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/evidence-dark-outline-icon.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Intelligence and evidence gathering
                </h4>
                <p className='text-[#151831] mt-[6px] '>Protect and spoof analysts’ digital signature while conducting OSINT and accessing PAI</p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full    lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/sfr-fin-crime-compliance-dark-outline.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Financial crime and compliance
                </h4>
                <p className='text-[#151831] mt-[6px] '>Securely investigate financial crime and fraud while maintaining analyst compliance with industry regulations</p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full    lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/sfr-trust-and-safety-dark-outline.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Trust and safety
                </h4>
                <p className='text-[#151831] mt-[6px] '>Protect analysts conducting trust and safety research while reducing time-to-insight to keep user communities safe and secure</p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full    lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/brand-misuse-dark-outline-icon.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Fraud and brand misuse
                </h4>
                <p className='text-[#151831] mt-[6px] '>Investigate fraud, brand misuse, platform abuse and trust and safety issues across the surface, deep or dark web</p>
              </div>
              <div className="absolute bottom-[20px] left-[25px] w-auto">
                <a href="/blog/collecting-osint-discord-guide" className="text-[16px] text-[#68be62] relative font-bold leading-[1.25] tracking-[-0.01em] text-left uppercase pr-[30px] no-underline outline-0 cursor-pointer inline-block">Learn more</a>
              </div>
            </div>
          </div>
          <div className="basis-full sm:basis-6/12 lg:basis-4/12 p-2">
            <div className='relative overflow-visible shadow-lg inline-block align-top h-full    lg:max-w-[409px] w-full min-h-[358px] bg-white rounded-[5px] border-t-0  transition-all duration-500 ease-in-out float-none clear-both p-[32px] pt-[32px] pr-[21px] pb-[40px] pl-[25px] outline-none  before:bg-gradient-to-r before:from-[#252d6a] before:via-[#595ad3] before:to-[#742abf] before:absolute before:top-0 before:left-[-2px] before:w-[101%] before:h-[7px] before:bg-[#5856d6] before:rounded-tl-[5px] before:rounded-tr-[5px]'>
              <div className="flex items-center mb-[16px]">
                <div className="w-[47px] h-[52px] overflow-hidden mr-[22px] flex items-center justify-center">
                  <Image
                    src="/logos/corporate-research-grey-outline-icon.png"
                    alt="man-image"
                    width={47}
                    height={52}
                    className=''
                  />
                </div>
              </div>
              <div className="h-[calc(100%-20%)] pb-[30px] relative">
                <h4 className='overflow-hidden font-semibold text-[#151831] text-[30px] leading-[1.13] font-proxima'>
                  Corporate research and protection
                </h4>
                <p className='text-[#151831] mt-[6px] '>Corporate research and protection</p>
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

export default CardColumnFirst;
