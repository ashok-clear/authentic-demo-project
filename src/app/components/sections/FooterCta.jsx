import React from 'react'
import Image from 'next/image'
const FooterCta = () => {
    return (
        <section className='w-full  overflow-hidden relative  max-w-[1920px] bg-white mx-auto min-h-[231px] lg:min-h-[632px] flex flex-col justify-center py-[45px] lg:py-[150px]'>
            <div className='absolute w-full h-full top-0 left-0'>
                <Image
                    src="/images/footer-cta-image.png"
                    alt="man-image"
                    width={1920}
                    height={503}
                    className='w-full h-full object-cover'
                />

            </div>
            <div className="container">
                <div className='text-white relative max-w-[1050px] mx-auto text-center p-0'>
                    <h2 className='font-normal mb-[13px] text-[24px] lg:text-[50px] leading-[1.1]' >Get Started</h2>
                    <h5 className=' text-[16px] lg:text-[24px] font-normal mt-[15px] leading-[1.2] tracking-normal'>Want to learn more about the Silo Web Isolation Platform? </h5>
                    <div className='w-full text-center relative mt-[15px] lg:mt-[45px] mx-auto'>
                    <a className='lg:mx-[25px] min-w-[225px] px-[30px] py-[10px] lg:px-[40px]  lg:py-[16px] mt-0 m-[5px] text-center inline-block relative outline-none text-[16px] font-bold cursor-pointer transition-all duration-300 ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle text-white no-underline ' href="/">
                        <span className='inline-block text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>get a demo</span>
                    </a>
                    <a className="lg:mx-[25px] min-w-[225px] px-[30px] py-[10px] lg:px-[30px]  lg:py-[16px] m-[5px] bg-[rgba(255,255,255,0.15)] border-white border-2 border-transparent text-white text-center inline-block relative font-bold cursor-pointer transition-all duration-300 ease-in-out rounded-md overflow-hidden align-middle no-underline" href="/">
                    <span className='inline-block text-[16px] leading-[1.25] relative left-0 font-sans text-white uppercase transition-all duration-300 ease-in-out'>start trail</span>
                    </a>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterCta;
