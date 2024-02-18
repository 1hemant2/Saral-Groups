import React from 'react'

const BoxCity = ({ w, h, text, image }) => {
    return (
        <div className={` relative `}>
            <img src={image} alt="" className={`w-${w} h-${h} rounded-lg`} />
            <p className='bg-[#01000066] text-gray-100 absolute bottom-4 left-4  flex items-center justify-center rounded-md text-xl h-10 w-32 font-semibold'>{text}</p>
        </div>
    )
}

export default BoxCity;