import React from 'react'
import imag1a from '../assets/image1a.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';


const ProtectedPage = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const handleMenu = () => {
        setMenu(!menu);
    }
    const handleClick = (value) => {
        navigate(value);
    }
    const handleClickLap = () => {
        console.log('hi')
        navigate("/properties")
    }
    return (
        <div>
            <div className="sm:hidden">
                <div className="flex flex-row">
                    <div className=""><img src={imag1a} alt="" className='w-20 h-20' /></div>
                    <div className=''>
                        {
                            menu ?
                                <div>
                                    <div className="text-black bg-white text-xl space-y-2 w-56 ">
                                        <div className='hover:bg-[#42d9c2] ' onClick={() => handleClick("/")}>Home</div>
                                        <div className='hover:bg-[#42d9c2] ' onClick={() => handleClick("/properties")}>Properties</div>
                                        <div className='hover:bg-[#42d9c2] ' onClick={() => handleClick("/contact")}>Get in touch</div>
                                    </div>
                                </div> :
                                <div className=' w-56'>
                                </div>
                        }
                    </div>

                    <div className="">
                        <div className='mt-4 '>
                            <i class="ri-menu-line text-3xl"
                                onClick={handleMenu}
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------------------------------------- */}
            <div className="hidden sm:flex">
                <div className="grid grid-cols-4">
                    <div className=""><img src={imag1a} alt="" className='w-24 h-24' /></div>
                    <div className='w-96'>

                    </div>
                    <div className='w-5'></div>

                    <div className="flex flex-row items-center">
                        <Button text="Get in touch!" ></Button>
                        <p className="text-white ml-7"><i className="ri-phone-fill text-white text-2xl"></i></p>
                        <p className="text-white ml-7"><i className="ri-whatsapp-line text-white text-2xl"></i> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectedPage