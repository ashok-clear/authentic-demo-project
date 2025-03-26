import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className='bg-[#151831] max-w-[1920px] mx-auto w-full relative'>
            <div className="container">
                <div className='pt-8 pb-10 lg:pt-[80px] pr-0 lg:pb-12 pl-0 flex items-start flex-wrap'>
                    <div className='basis-full lg:basis-2/12 flex justify-between md:justify-center flex-row md:flex-col w-1/2 float-left relative'>
                        <div className='mt-[30px]'>
                            <div className="w-[160px] h-[19px]">
                                <a href="" className='cursor-pointer no-underline outline-0 inline-block font-proxima'>
                                    <Image
                                        src="/logos/authentic8-white-logo.svg"
                                        alt="man-image"
                                        width={158}
                                        height={23}
                                        className='w-full max-w-full align-top border-0 h-full object-contain'
                                    />
                                </a>
                            </div>
                            <div className="">
                                <p className='font-proxima text-[18px] font-normal leading-[1.39] tracking-normal text-[#424b68] mt-[22px]'>
                                    <span className='text-[14px] font-normal leading-[1.43] tracking-normal text-left text-white max-w-[156px] block'>333 Twin Dolphin Drive </span>
                                    <span className='text-[14px] font-normal leading-[1.43] tracking-normal text-left text-white max-w-[156px] block'>Suite 112</span>
                                    <span className='text-[14px] font-normal leading-[1.43] tracking-normal text-left text-white max-w-[156px] block'>Redwood City, CA 94065 </span>
                                </p>
                                <p>
                                    <a className="text-[14px] font-normal tracking-normal text-left mt-[12px] text-white transition-colors duration-[300ms] ease-in-out no-underline outline-0 cursor-pointer inline-block font-proxima" href="tel:1-877-659-6535">+1-877-659-6535</a>
                                </p>
                                <div className="mt-[15px]">
                                    <a className="text-[14px] font-bold leading-[1.21] tracking-normal text-center text-white py-[5px] px-[30px] max-w-[165px] inline-block relative cursor-pointer transition-all duration-[300ms] ease-in-out bg-[#68be62] border-2 border-transparent rounded-[5px] overflow-hidden align-middle" href="/demo-request">BOOK A DEMO</a>
                                </div>
                            </div>

                        </div>
                        <div className="mt-[41px]">
                            <p className='text-[14px] font-bold tracking-[0.84px] text-left text-[#5ac8fa] leading-[1.39]'>FOLLOW US:</p>
                            <div className="mt-[16px]">
                                <a aria-label="social-media-links" className='max-w-[20px] h-[16px] cursor-pointer inline-block mr-[11px] relative text-white' href="https://www.twitter.com/company/authentic8" rel="noopener noreferrer" target="_blank">
                                    <svg fill="#ffffff" viewBox="0 0 18.201 19" className='w-full h-full'> <defs> <clipPath className="clip-Path"> <path className="cls-1" d="M0 0H18.201V19H0z" id="Rectangle_72"></path> </clipPath> </defs> <g id="Group_110"> <g clipPath="url(#clip-path)" id="Group_109"> <path className="cls-1" d="M16.352 5.718a10.529 10.529 0 0 1-1.244 4.94 10.158 10.158 0 0 1-3.59 4.018 10.264 10.264 0 0 1-5.8 1.67A10.36 10.36 0 0 1 0 14.676c.261.024.557.035.889.035a7.4 7.4 0 0 0 4.656-1.6 3.465 3.465 0 0 1-2.186-.73 3.715 3.715 0 0 1-1.3-1.831 6.671 6.671 0 0 0 .676.036 4.735 4.735 0 0 0 .995-.108A3.758 3.758 0 0 1 1.6 9.166 3.58 3.58 0 0 1 .746 6.82v-.072a3.507 3.507 0 0 0 1.671.5A4.138 4.138 0 0 1 1.209 5.9a3.617 3.617 0 0 1 .071-3.666 10.291 10.291 0 0 0 3.395 2.773 10.338 10.338 0 0 0 4.283 1.138 5.232 5.232 0 0 1-.071-.854 3.7 3.7 0 0 1 .5-1.866 3.673 3.673 0 0 1 3.2-1.867 3.578 3.578 0 0 1 1.511.32 4.255 4.255 0 0 1 1.227.854 7.589 7.589 0 0 0 2.375-.889A3.708 3.708 0 0 1 16.068 3.9a7.993 7.993 0 0 0 2.132-.6 8.211 8.211 0 0 1-1.884 1.955 2.188 2.188 0 0 1 .036.463z" id="Path_18" transform="translate(0 .805)"></path> </g> </g> </svg>
                                </a>
                                <a aria-label="social-media-links" className="max-w-[20px] h-[16px] cursor-pointer inline-block mr-[11px] relative text-white" href="https://www.linkedin.com/company/authentic8" rel="noopener noreferrer" target="_blank">
                                    <svg fill="#ffffff" viewBox="0 0 15.926 19" className='w-full h-full'> <defs> <clipPath className="clip-Path"> <path className="cls-1" d="M0 0H15.926V19H0z" id="Rectangle_73"></path> </clipPath> </defs> <g id="Group_112"> <g clipPath="url(#clip-path)" id="Group_111"> <path className="cls-1" d="M.569 4.455A1.846 1.846 0 0 1 0 3.1a1.846 1.846 0 0 1 .569-1.348 1.846 1.846 0 0 1 1.351-.569 1.845 1.845 0 0 1 1.35.569A1.846 1.846 0 0 1 3.839 3.1a1.846 1.846 0 0 1-.569 1.355 1.845 1.845 0 0 1-1.35.569 1.846 1.846 0 0 1-1.351-.569zm-.32 12.654V6.481h3.306v10.628zm12.37 0V11.92a5.781 5.781 0 0 0-.212-1.849 1.5 1.5 0 0 0-1.529-.96 1.666 1.666 0 0 0-1.6.854 3.971 3.971 0 0 0-.355 1.884v5.26h-3.27V6.481h3.164v1.457h.035a2.833 2.833 0 0 1 1.137-1.173 3.5 3.5 0 0 1 1.99-.569 3.526 3.526 0 0 1 3.235 1.458 7.185 7.185 0 0 1 .711 3.626v5.829z" id="Path_19" transform="translate(0 .611)"></path> </g> </g> </svg>
                                </a>
                                <a aria-label="social-media-links" className="max-w-[20px] h-[16px] cursor-pointer inline-block mr-[11px] relative text-white" href="https://www.g2.com/products/authentic8-silo/reviews#reviews" rel="noopener noreferrer" target="_blank">
                                    <svg fill="#ffffff" viewBox="0 0 19 18.836" className='w-full  h-full'> <defs> <clipPath className="clip-Path"> <path className="cls-1" d="M0 0H19V18.836H0z" id="Rectangle_70"></path> </clipPath> </defs> <g id="Group_106"> <g clipPath="url(#clip-path)" id="Group_105"> <path className="cls-1" d="M9.83 0a7.969 7.969 0 0 1 1.965.164L9.83 3.93A5.463 5.463 0 0 0 4.1 9.006a5.463 5.463 0 0 0 5.076 5.731h.654a5.722 5.722 0 0 0 3.6-1.31l2.129 3.6a9.925 9.925 0 0 1-5.731 1.8A9.377 9.377 0 0 1 0 9.825 9.377 9.377 0 0 1 9.011 0z" id="Path_14"></path> <path className="cls-1" d="M52.052 38.007l2.457 4.093-2.456 3.93-2.293-3.93h-4.749l2.456-4.094z" id="Path_15" transform="translate(-35.509 -29.984)"></path> <path className="cls-1" d="M59.749 9a3.3 3.3 0 0 1 .491-1.8 5.648 5.648 0 0 1 1.474-1.31l.327-.164c.655-.327.819-.491.819-.819s-.491-.655-.819-.655a1.573 1.573 0 0 0-1.474.983l-.819-.819a4.336 4.336 0 0 1 .819-.983 2.433 2.433 0 0 1 1.474-.333 2.287 2.287 0 0 1 1.474.491A2.022 2.022 0 0 1 64.17 4.9a1.878 1.878 0 0 1-1.474 1.8l-.491.327c-.491.328-.819.491-.983.983h2.948v1.152z" id="Path_16" transform="translate(-47.135 -2.448)"></path> </g> </g> </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="basis-full  lg:basis-10/12 flex flex-wrap justify-bteween">
                        <div className="mr-5 mt-[30px]  lg:pl-[39px]">
                            <ul>
                                <li>
                                    <span className='text-[#5ac8fa] block text-[14px] font-bold mb-[10px] max-w-[200px] mt-0 tracking-[0.84px] text-left pt-[5px] pr-0 uppercase'>PRODUCTS</span>
                                </li>
                                <li>
                                    <a href="/products/silo-for-research" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Silo for Research</a>
                                </li>
                                <li>
                                    <a href="/products/zero-trust-application-access" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Zero Trust Application Access</a>
                                </li>
                                <li>
                                    <a href="/products/risky-web-link-isolation" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Risky Web Link Isolation</a>
                                </li>
                                <li>
                                    <a href="/products/secure-browsing" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Secure Browsing</a>
                                </li>
                                <li>
                                    <a href="/products/silo-web-isolation-platform" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Silo Platform</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-5 mt-[30px]  lg:pl-[39px]">
                            <ul>
                                <li>
                                    <span className='text-[#5ac8fa] block text-[14px] font-bold mb-[10px] max-w-[200px] mt-0 tracking-[0.84px] text-left pt-[5px] pr-0 uppercase'>USE CASES</span>
                                </li>
                                <li>
                                    <a href="/use-cases/#digitalinvestigations" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Digital investigations</a>
                                </li>
                                <li>
                                    <a href="/use-cases/#sase" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>SASE</a>
                                </li>
                                <li>
                                    <a href="/use-cases/#secureweb" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Secure web access</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-5 mt-[30px]  lg:pl-[39px]">
                            <ul>
                                <li>
                                    <span className='text-[#5ac8fa] block text-[14px] font-bold mb-[10px] max-w-[200px] mt-0 tracking-[0.84px] text-left pt-[5px] pr-0 uppercase'>COMPANY</span>
                                </li>
                                <li>
                                    <a href="/company/about-us" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>About us</a>
                                </li>
                                <li>
                                    <a href="/company/leadership-team" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Leadership </a>
                                </li>
                                <li>
                                    <a href="/partners" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Partners</a>
                                </li>
                                <li>
                                    <a href="/news-press" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>News and press</a>
                                </li>
                                <li>
                                    <a href="/about/careers" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Careers</a>
                                </li>
                                <li>
                                    <a href="/certifications" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Certifications</a>
                                </li>
                                <li>
                                    <a href="/contact-us" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-5 mt-[30px]  lg:pl-[39px]">

                            <ul>
                                <li>
                                    <span className='text-[#5ac8fa] block text-[14px] font-bold mb-[10px] max-w-[200px] mt-0 tracking-[0.84px] text-left pt-[5px] pr-0 uppercase'>Resources</span>
                                </li>
                                <li>
                                    <a href="/resources" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Resource library</a>
                                </li>
                                <li>
                                    <a href="/needlestack" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Podcast</a>
                                </li>
                                <li>
                                    <a href="/blog" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Blog</a>
                                </li>
                                <li>
                                    <a href="/success-stories" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Success stories</a>
                                </li>
                                <li>
                                    <a href="/glossary" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Glossary</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-5 mt-[30px]  lg:pl-[39px]">
                            <ul>
                                <li>
                                    <span className='text-[#5ac8fa] block text-[14px] font-bold mb-[10px] max-w-[200px] mt-0 tracking-[0.84px] text-left pt-[5px] pr-0 uppercase'>GET STARTED</span>
                                </li>
                                <li>
                                    <a href="/demo-request" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case' >Book a demo</a>
                                </li>
                                <li>
                                    <a href="/sfr-free-trial" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case' >Free trial </a>
                                </li>
                                <li>
                                    <a href="/sfr-product-video-tour" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case' >Demo on demand</a>
                                </li>
                                <li>
                                    <a href="/products/silo-for-research/pricing" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case' >Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-5 mt-[30px]  lg:pl-[39px]">
                            <ul>
                                <li>
                                    <span className='text-[#5ac8fa] block text-[14px] font-bold mb-[10px] max-w-[200px] mt-0 tracking-[0.84px] text-left pt-[5px] pr-0 uppercase'>Support</span>
                                </li>
                                <li>
                                    <a href="/support" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>Support</a>
                                </li>
                                <li>
                                    <a href="https://status.authentic8.com/" className='text-[14px] font-normal tracking-normal text-left inline-block max-w-[200px] mt-[10px] text-white cursor-pointer pr-[15px] normal-case'>System status</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <div className="relative w-full bottom-0 py-[21px] px-0 border-t border-white">
                <div className="container">
                    <div className="flex text-center relative p-0">
                        <div className="basis-6/12 ">
                            <ul className='flex justify-start flex-wrap'>
                                <li>
                                    <a href="/privacy-policy"  className='mx-[8px] relative text-[12px] leading-[1.67] font-normal tracking-normal text-white no-underline outline-none cursor-pointer inline-block font-[Proxima-Nova] after:absolute after:top-[56%] after:transform after:translate-y-[-50%] after:right-[-9px] after:m-auto after:w-[1px] after:h-[38%] after:bg-white after:cursor-auto'>Privacy policy</a>
                                </li>
                                <li>
                                    <a href="/gdpr-imprint" className='mx-[8px] relative text-[12px] leading-[1.67] font-normal tracking-normal text-white no-underline outline-none cursor-pointer inline-block font-[Proxima-Nova] after:absolute after:top-[56%] after:transform after:translate-y-[-50%] after:right-[-9px] after:m-auto after:w-[1px] after:h-[38%] after:bg-white after:cursor-auto'>GDPR imprint</a>
                                </li>
                                <li>
                                    <a href="/terms-of-service" className='mx-[8px] relative text-[12px] leading-[1.67] font-normal tracking-normal text-white no-underline outline-none cursor-pointer inline-block font-[Proxima-Nova] after:absolute after:top-[56%] after:transform after:translate-y-[-50%] after:right-[-9px] after:m-auto after:w-[1px] after:h-[38%] after:bg-white after:cursor-auto'>Terms of service</a>
                                </li>
                                <li>
                                    <a href="/copyright" data-drupal-link-system-path="node/376" className='mx-[8px] relative text-[12px] leading-[1.67] font-normal tracking-normal text-white no-underline outline-none cursor-pointer inline-block font-[Proxima-Nova] after:absolute after:top-[56%] after:transform after:translate-y-[-50%] after:right-[-9px] after:m-auto after:w-[1px] after:h-[38%] after:bg-white after:cursor-auto'>Copyright policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-6/12 flex justify-end flex-wrap">
                            <small className='text-[12px] leading-none align-top text-white font-[Proxima-Nova] inline-block pt-[5px] tracking-[0.001em]'><sub>© </sub>2025 Authentic8, Inc. All Rights Reserved.</small>
                            </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
