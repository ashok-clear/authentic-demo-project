import React from 'react'
import Image from 'next/image'

const UseCasesData = {
    title: "Putting Silo to work",
    subtitle: "Whether conducting digital investigations, extending SASE capabilities or improving protection while online, Silo can be tuned to meet the specific needs of the use case.",
}

const UseCases = ({ title, subtitle = [], version = "v-1" }) => {
        return (
        <section className='w-full relative overflow-hidden max-w-[1920px] bg-white mx-auto min-h-[400px] xl:min-h-[632px] lg:min-h-[480px] py-[45px] lg:py-[100px] flex flex-col justify-center'>
            <div className="absolute w-full h-full inset-0 block">
                <Image src="/images/blue-gradient-woman-using-mini-laptop-green-shadow.png" alt="blue-gradient-man"  width={158} height={23} className='w-full max-w-full align-top border-0 h-full '/>
            </div>
            <div className="container">
                <div className='max-w-[712px] ml-0'>
                    {title && (
                        <h1 className='font-[500] text-[32px] sm:text-[42px] md:text-[46px] lg:text-[52px] xl:text-[62px] leading-[1.2] tracking-normal mb-[12px] lg:mb-[15px] text-white' dangerouslySetInnerHTML={{ __html: title }}></h1>
                    )}
                    {subtitle && <h4 className='font-[500] leading-[1.13] tracking-normal text-white max-w-[640px] text-[20px] md:text-[24px] lg:text-[28px]'>{subtitle}</h4>}
                </div>
            </div>
        </section >
    )
}

export default UseCases;
