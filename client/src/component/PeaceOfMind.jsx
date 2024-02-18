import React from 'react'

const PeaceOfMind = ({ heading, text }) => {
    return (
        <div className='mt-7'>
            <div className="text-2xl text-[#054457] font-semibold">{heading}</div>
            <p className='mt-3 text-sm text-gray-600'>{text}</p>
        </div>
    )
}

export default PeaceOfMind;