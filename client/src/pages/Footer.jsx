import React from 'react'
import imag1a from '../assets/image1a.webp'

const Footer = () => {
    return (
        <div>
            <div className="bg-zinc-800 sm:hidden">
                <div className='flex justify-center'>
                    <img src={imag1a} alt="" className='h-20' />
                </div>
                <div className='space-y-2'>
                    <p className="text-white ml-7">Explore our range of beautiful properties curated for you!</p>
                    <p className="text-white ml-7"><i className="ri-mail-line text-white text-2xl"></i> <span className='ml-2'>contact@thekarnani.com</span>
                    </p>
                    <p className="text-white ml-7"><i className="ri-phone-fill text-white text-2xl"></i><span className='ml-2'> +44 7895299086</span> </p>
                    <p className="text-white ml-7"><i className="ri-whatsapp-line text-white text-2xl"></i> <span className='ml-2'>+44 2045842425</span></p>
                    <p className="text-white ml-7"><i className="ri-map-pin-fill text-white text-2xl"></i>
                        <span className='ml-2'>
                            Househat UK Limited, 124 City Road, London, England, EC1V 2NX.
                        </span>
                    </p>
                    <p className="text-white ml-7"><i className="ri-map-pin-fill text-white text-2xl space-x-1"></i>
                        <span className='ml-2'>
                            Househat UK Limited, The Oxford Science Park, Robert Robinson Ave, Littlemore, Oxford, OX4 4GP.
                        </span>
                    </p>
                </div>
                <div className='ml-6 mt-20 space-y-2'>
                    <div className='text-white'>Contact Us</div>
                    <div className='text-white'>Refer a Friend</div>
                    <div className='text-white'>List with us</div>
                    <div className='text-white'>Cancellation Policy</div>
                    <div className='text-white'>Privacy Policy</div>
                    <div className='text-white'>Partner with us</div>
                    <div className='text-white'>Careers</div>
                    <div className='text-white'>FAQs</div>
                    <div className='text-white'>T&C</div>
                </div>
                <div className='ml-6 mt-20 space-y-2'>
                    <div className='text-2xl text-white'>Follow us on</div>
                    <div className='text-xl text-white ml-2'>Instagram</div>
                    <div className='text-xl text-white ml-2'> LinkedIn</div>
                    <div className='text-xl text-white ml-2'> Youtube</div>
                    <div className='text-xl text-white ml-2'> Facebook</div>
                </div>
                <div className='ml-6 mr-6 pb-2 mt-20 text-white'>
                    Karnani is a trading name of HOUSEHAT UK LIMITED registered in England and Wales No. 12525449. © Karnani 2024
                    Househat UK Limited is member ofProperty Redress Scheme.Househat UK Limited is a member ofUKALAwithClient Money Protection (007396).
                </div>
            </div>
            {/* ------------------------------------------------------------------- */}
            <div className="bg-zinc-800 hidden sm:flex">
                <div className="flex flex-col">
                    <div className="grid grid-cols-3">
                        <div className='space-y-2'>
                            <img src={imag1a} alt="" className='h-20' />

                            <p className="text-white ml-7">Explore our range of beautiful properties curated for you!</p>
                            <p className="text-white ml-7"><i className="ri-mail-line text-white text-2xl"></i> <span className='ml-2'>contact@thekarnani.com</span>
                            </p>
                            <p className="text-white ml-7"><i className="ri-phone-fill text-white text-2xl"></i><span className='ml-2'> +44 7895299086</span> </p>
                            <p className="text-white ml-7"><i className="ri-whatsapp-line text-white text-2xl"></i> <span className='ml-2'>+44 2045842425</span></p>
                            <p className="text-white ml-7"><i className="ri-map-pin-fill text-white text-2xl"></i>
                                <span className='ml-2'>
                                    Househat UK Limited, 124 City Road, London, England, EC1V 2NX.
                                </span>
                            </p>
                            <p className="text-white ml-7"><i className="ri-map-pin-fill text-white text-2xl space-x-1"></i>
                                <span className='ml-2'>
                                    Househat UK Limited, The Oxford Science Park, Robert Robinson Ave, Littlemore, Oxford, OX4 4GP.
                                </span>
                            </p>
                        </div>
                        <div className='ml-6 mt-20 space-y-2'>
                            <div className='text-white'>Contact Us</div>
                            <div className='text-white'>Refer a Friend</div>
                            <div className='text-white'>List with us</div>
                            <div className='text-white'>Cancellation Policy</div>
                            <div className='text-white'>Privacy Policy</div>
                            <div className='text-white'>Partner with us</div>
                            <div className='text-white'>Careers</div>
                            <div className='text-white'>FAQs</div>
                            <div className='text-white'>T&C</div>
                        </div>
                        <div className='ml-6 mt-20 space-y-2'>
                            <div className='text-2xl text-white'>Follow us on</div>
                            <div className='text-xl text-white ml-2'>Instagram</div>
                            <div className='text-xl text-white ml-2'> LinkedIn</div>
                            <div className='text-xl text-white ml-2'> Youtube</div>
                            <div className='text-xl text-white ml-2'> Facebook</div>
                        </div>
                    </div>
                    <div className='ml-6 mr-6 pb-2 mt-20 text-white'>
                        Karnani is a trading name of HOUSEHAT UK LIMITED registered in England and Wales No. 12525449. © Karnani 2024
                        Househat UK Limited is member ofProperty Redress Scheme.Househat UK Limited is a member ofUKALAwithClient Money Protection (007396).
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer