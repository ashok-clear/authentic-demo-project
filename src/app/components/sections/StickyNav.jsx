import React from 'react'
import Image from 'next/image'

const StickyNav = () => {
    return (
        <section className='relative w-full max-w-[1920px] z-10 h-[75px] opacity-100 mx-auto bg-white overflow-hidden' >
            <div className="bg-[#151831] w-full max-w-[1920px] py-[4px] transition-[top] duration-300 ease-in-out">
                <div className="container">
                    <ul className='flex items-center mb-0 text-left'>
                        <li className="mr-[62px] text-left py-[5px] max-w-[320px] relative text-[16px] font-normal leading-[1.67]" ><a href="#digitalinvestigations">Digital Investigations</a></li>
                        <li className="mr-[62px] text-left py-[5px] max-w-[320px] relative text-[16px] font-normal leading-[1.67]" ><a href="#sase">SASE</a></li>
                        <li className="text-left py-[5px] max-w-[320px] relative text-[16px] font-normal leading-[1.67]" ><a href="#secureweb">Secure Web Access</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default StickyNav;
