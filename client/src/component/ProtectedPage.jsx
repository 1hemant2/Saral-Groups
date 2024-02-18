import React from 'react'
import imag1a from '../assets/image1a.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedPage = () => {
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const handleMenu = () => {
        setMenu(!menu);
    }
    const handleClick = (value) => {
        navigate(value);
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

        </div>
    )
}

export default ProtectedPage