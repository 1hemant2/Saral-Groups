import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = ({ text, onClick }) => {
    const handleClick = () => {
        onClick();
    }
    return (
        <div className="w-44 h-16 bg-[#42d9c2] text-white flex items-center justify-center text-2xl rounded-md cursor-pointer" onClick={handleClick}>{text}</div>
    )
}

export default Button;