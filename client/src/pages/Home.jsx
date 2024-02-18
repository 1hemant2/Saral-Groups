import React, { useState } from 'react'
import image1 from '../assets/image.jpg'
import imag1c from '../assets/image1c.webp';
import imag1d from '../assets/image1d.webp';
import imag1e from '../assets/image1e.webp';
import imag1f from '../assets/image1f.webp';
import imag1g from '../assets/image1g.webp';
import imag2a from '../assets/image2a.webp';
import imag2 from '../assets/image2.webp';
import imag3 from '../assets/image3.webp';
import Button from '../component/Button'
import Button2 from '../component/Button2';
import BoxOffer from '../component/BoxOffer';
import Feature from '../component/Feature';
import BoxCity from '../component/BoxCity';
import PeaceOfMind from '../component/PeaceOfMind';
import Footer from './Footer';
import ProtectedPage from '../component/ProtectedPage';
import { useNavigate } from 'react-router-dom';




const Home = () => {
    const navigate = useNavigate();
    const navigateProperties = () => {
        navigate("/properties")
    }
    return (
        <>

            <div className='sm:hidden'>
                <div className="">
                    <div className="relative">
                        <img src={image1} alt="" className='opacity-75 bg-slate-500 ' />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <div className='absolute top-1'>
                            <ProtectedPage></ProtectedPage>
                        </div>
                        <p className='absolute top-32 left-5 text-white text-3xl font-bold ' >
                            Let's Plan Your <br></br>
                            Next Move <i className="ri-send-plane-fill text-white text-3xl ml-3"></i> </p>
                        <div className='absolute top-52 text-white text-xl m-4'>Explore our range of beautiful properties curated for you!</div>
                        <div className='absolute top-96 ml-16'><Button text={"Explore Now"}></Button></div>
                    </div>
                    <div className='text-2xl flex justify-center mt-6 font-semibold'>SPECIAL OFFERS</div>
                    <div>
                        <div className='flex justify-center mt-6'><BoxOffer icon={imag1c} text={["Karnani Exclusive Offer", "Book through us and get £50 as cashback*"]}>
                        </BoxOffer></div>
                        <div className='flex justify-center mt-6'><BoxOffer icon={imag1d} text={["£100 Amazon Voucher", "For every person who books through your referral, you get a £100 Amazon gift voucher*"]}>
                        </BoxOffer></div>
                    </div>
                    <div>
                        <div className='flex justify-center mt-24'><Feature icon={imag1e} text={["10,000+ Beds",
                            "Choose from an extensive range of options",
                            "and book the one that suits you the best."
                        ]}></Feature></div>
                        <div className='flex justify-center mt-24'><Feature icon={imag1f} text={["500+ Universities",
                            "Explore the top student and professional",
                            "housing options close to city centre and",
                            "prestigious universities."
                        ]}></Feature></div>
                        <div className='flex justify-center mt-24'><Feature icon={imag1g} text={["50+ Cities", "We serve many big cities",
                            "all across the UK and Australia.",
                        ]}></Feature></div>
                    </div>
                    <div className='text-[#054457] font-semibold m-10 flex justify-center text-xl'>TOP CITIES WE COVER</div>
                    <div>
                        <div className='ml-8 mr-8 mb-6'>
                            <BoxCity h="100" w="50" text="London" image={imag2a}></BoxCity>
                        </div>
                        <div className='ml-8 mr-8 mb-3'>
                            <BoxCity h="100" w="50" text="Barhingham" image={imag2}></BoxCity>
                        </div>
                        <div className='ml-8 mr-8 mb-3'>
                            <BoxCity h="100" w="50" text="Coventry" image={imag3}></BoxCity>
                        </div>
                    </div>
                    <div className='flex justify-center m-12'><Button text={"Explore MORE"}></Button></div>
                    <div className='bg-[#f5f5f5] '>
                        <div className='m-10'>
                            <p className='text-[#054457] text-3xl font-semibold '>Giving You Peace of Mind</p>
                            <div className='mt-4'>
                                <PeaceOfMind heading={"Prime Locations"} text={"Our accommodations are strategically positioned across the areas, placing you within a reach of local attractions, vibrant city life, and convenient transportation links. Enjoy the best of each area without compromising on accessibility."}></PeaceOfMind>
                                <PeaceOfMind heading={"Tailored Experiences"} text={"Find the perfect room that suits your needs, whether it's a cozy single space or a spacious en-suite. Our diverse range of accommodation ensures comfort tailored to your preferences."}></PeaceOfMind>
                                <PeaceOfMind heading={"Exceptional Amenities"} text={"Take advantage of modern conveniences such as high-speed Wi-Fi, all incluive bills, entertainment options for relaxation, and dedicated workspaces for your productivity needs."}></PeaceOfMind>
                                <PeaceOfMind heading={"Impeccable Service"} text={"Our attentive staff and proprty manager is available, ready to assist you with personalized recommendations and ensuring a seamless and enjoyable stay from check-in to departure."}></PeaceOfMind>
                                <PeaceOfMind heading={"Safety & Security"} text={"Rest assured with our commitment to your safety. Our accommodations feature modern security systems, including CCTV surveillance, and strict adherence to safety protocols for your peace of mind."}></PeaceOfMind>
                                <PeaceOfMind heading={"Affordable Luxury"} text={"Experience the perfect blend of luxury and affordability. Our accommodations offers premium comfort at competitive rates, allowing you to indulge in a delightful stay without straining your budget."}></PeaceOfMind>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button2 text={"BOOKING PROCESS"}></Button2>
                    </div>
                    <div>
                        <Footer>
                        </Footer>
                    </div>

                </div>
            </div>
            {/* -------------------------------------------------------- */}
            <div className='hidden sm:flex'>
                <div className="">
                    <div className="relative">
                        <img src={image1} alt="" className='opacity-75 bg-slate-500 h-[600px] w-full' />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <div className='absolute top-1'>
                            <ProtectedPage></ProtectedPage>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='absolute top-32  text-white text-8xl font-bold ' >
                                Let's Plan Your Next Move <i className="ri-send-plane-fill text-white text-6xl ml-3"></i> </p>
                            <div className='absolute top-56 text-white text-xl m-4'>Explore our range of beautiful properties curated for you!</div>
                            <div className='absolute top-96 ml-16'><Button text={"Explore Now"} onClick={navigateProperties}></Button></div>
                        </div>
                    </div>
                    <div className='text-2xl flex justify-center mt-6 font-semibold'>SPECIAL OFFERS</div>
                    <div className='flex flex-row space-x-8 items-center justify-center'>
                        <div className='flex justify-center mt-6'><BoxOffer icon={imag1c} text={["Karnani Exclusive Offer", "Book through us and get £50 as cashback*"]}>
                        </BoxOffer></div>
                        <div className='flex justify-center mt-6'><BoxOffer icon={imag1d} text={["£100 Amazon Voucher", "For every person who books through your referral, you get a £100 Amazon gift voucher*"]}>
                        </BoxOffer></div>
                    </div>
                    <div className='flex justify-center items-center space-x-52'>
                        <div className='flex justify-center mt-24'><Feature icon={imag1e} text={["10,000+ Beds",
                            "Choose from an extensive range of options",
                            "and book the one that suits you the best."
                        ]}></Feature></div>
                        <div className='flex justify-center mt-24'><Feature icon={imag1f} text={["500+ Universities",
                            "Explore the top student and professional",
                            "housing options close to city centre and",
                            "prestigious universities."
                        ]}></Feature></div>
                        <div className='flex justify-center mt-24'><Feature icon={imag1g} text={["50+ Cities", "We serve many big cities",
                            "all across the UK and Australia.",
                        ]}></Feature></div>
                    </div>
                    <div className='text-[#054457] font-semibold m-10 flex justify-center text-4xl mt-8'>TOP CITIES WE COVER</div>
                    <div className='flex justify-center items-center'>
                        <div className='ml-8 mr-8 mb-6'>
                            <BoxCity h="100" w="50" text="London" image={imag2a}></BoxCity>
                        </div>
                        <div className='ml-8 mr-8 mb-3'>
                            <BoxCity h="100" w="50" text="Barhingham" image={imag2}></BoxCity>
                        </div>
                        <div className='ml-8 mr-8 mb-3'>
                            <BoxCity h="100" w="50" text="Coventry" image={imag3}></BoxCity>
                        </div>
                    </div>
                    <div className='flex justify-center m-12'><Button text={"Explore MORE"}></Button></div>
                    <div className='bg-[#f5f5f5] '>
                        <div className='m-10'>
                            <p className='text-[#054457] text-3xl font-semibold flex justify-center pt-5 '>Giving You Peace of Mind</p>
                            <div className='mt-4 grid grid-cols-3'>
                                <PeaceOfMind heading={"Prime Locations"} text={"Our accommodations are strategically positioned across the areas, placing you within a reach of local attractions, vibrant city life, and convenient transportation links. Enjoy the best of each area without compromising on accessibility."}></PeaceOfMind>
                                <PeaceOfMind heading={"Tailored Experiences"} text={"Find the perfect room that suits your needs, whether it's a cozy single space or a spacious en-suite. Our diverse range of accommodation ensures comfort tailored to your preferences."}></PeaceOfMind>
                                <PeaceOfMind heading={"Exceptional Amenities"} text={"Take advantage of modern conveniences such as high-speed Wi-Fi, all incluive bills, entertainment options for relaxation, and dedicated workspaces for your productivity needs."}></PeaceOfMind>
                                <PeaceOfMind heading={"Impeccable Service"} text={"Our attentive staff and proprty manager is available, ready to assist you with personalized recommendations and ensuring a seamless and enjoyable stay from check-in to departure."}></PeaceOfMind>
                                <PeaceOfMind heading={"Safety & Security"} text={"Rest assured with our commitment to your safety. Our accommodations feature modern security systems, including CCTV surveillance, and strict adherence to safety protocols for your peace of mind."}></PeaceOfMind>
                                <PeaceOfMind heading={"Affordable Luxury"} text={"Experience the perfect blend of luxury and affordability. Our accommodations offers premium comfort at competitive rates, allowing you to indulge in a delightful stay without straining your budget."}></PeaceOfMind>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button2 text={"BOOKING PROCESS"}></Button2>
                    </div>
                    <div>
                        <Footer>
                        </Footer>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;