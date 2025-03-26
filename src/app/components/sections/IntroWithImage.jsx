import React from 'react'
import Image from 'next/image'

const IntroWithImage = () => {
    return (
        <section className='relative w-full max-w-[1920px] mx-auto bg-white overflow-hidden pt-[100px] pb-[150px]' >
            <div className="container">
                <div className="content-wrap">
                    <h2 className='mt-[20px] mb-[30px] max-w-[1062px] text-[#151831] text-[50px] font-proxima font-semibold leading-[1.1]'>Shift your risk, centralize your control</h2>
                    <p className='max-w-[1062px] mb-[30px] text-[18px] font-normal leading-[1.39] text-[#424b68]'>The Silo Web Isolation Platform is a secure, cloud-native execution environment for all web-based activity. Silo is built on the principles that all web code and critical data should be isolated from the endpoint, and that browsing capabilities should be like any other enterprise workflow — configurable and auditable.&nbsp;</p>

                </div>
            </div>
        </section>
    )
}

export default IntroWithImage;
