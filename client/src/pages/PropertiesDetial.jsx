import React from 'react'
import { useParams } from 'react-router-dom';
import ProtectedPage from '../component/ProtectedPage';
import Footer from './Footer';
import data from '../Data/data.json'
import Button2 from '../component/Button2';
import BoxOffer from '../component/BoxOffer';
import imag1c from '../assets/image1c.webp'
import imag1d from '../assets/image1d.webp'
const PropertiesDetial = () => {
    const param = useParams();
    const id = +param.id
    console.log(id);
    const property = data.properties;
    console.log(property);
    return (
        <>
            <div>
                <ProtectedPage></ProtectedPage>
            </div>
            <div className='sm:hidden'>
                <div>
                    {
                        property.map((d) => (
                            d.id === id ?
                                <div className='m-4'>
                                    <img src={d.image_url} alt="image" />
                                    <div className='text-xl'>{d.name}</div>
                                    <div className='flex justify-center'>
                                        <Button2 text={"Enqurie Now"}></Button2>
                                    </div>
                                    <div className='text-xl'>starting at <span className='text-[#42d9c2]'> €{d.rent}/month</span></div>
                                    <p className='flex justify-center font-semibold m-4'>Special Offer</p>
                                    <div className='flex justify-center mt-6'><BoxOffer icon={imag1c} text={["Karnani Exclusive Offer", "Book through us and get £50 as cashback*"]}>
                                    </BoxOffer></div>
                                    <div className='flex justify-center mt-6'><BoxOffer icon={imag1d} text={["£100 Amazon Voucher", "For every person who books through your referral, you get a £100 Amazon gift voucher*"]}>
                                    </BoxOffer></div>
                                    <h2 className='mt-4 text-2xl'>About</h2>
                                    <p className='flex text-xl'>{d.about}</p>
                                    <hr className='text-red-900' />
                                </div> : ''
                        ))
                    }
                </div>
            </div>
            <div className='hidden sm:flex'>
                <div>
                    {
                        property.map((d) => (
                            d.id === id ?
                                <div className='m-4 flex flex-col justify-center'>
                                    <img src={d.image_url} alt="image" />
                                    <div className='text-xl font-semibold'>{d.name}</div>
                                    <div className='flex justify-center'>
                                        <Button2 text={"Enqurie Now"}></Button2>
                                    </div>
                                    <div className='text-xl'>starting at <span className='text-[#42d9c2]'> €{d.rent}/month</span></div>
                                    <p className='flex justify-center font-semibold m-4'>Special Offer</p>
                                    <div className='flex flex-row space-x-4 justify-center'>
                                        <div className='flex justify-center mt-6'><BoxOffer icon={imag1c} text={["Karnani Exclusive Offer", "Book through us and get £50 as cashback*"]}>
                                        </BoxOffer></div>
                                        <div className='flex justify-center mt-6'><BoxOffer icon={imag1d} text={["£100 Amazon Voucher", "For every person who books through your referral, you get a £100 Amazon gift voucher*"]}>
                                        </BoxOffer></div>
                                    </div>
                                    <h2 className='mt-4 text-2xl'>About</h2>
                                    <p className='flex text-xl'>{d.about}</p>
                                    <hr className='text-red-900' />
                                </div> : ''
                        ))
                    }
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>

    )
}

export default PropertiesDetial;