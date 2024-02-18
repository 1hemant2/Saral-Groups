import React from 'react'

const Feature = ({ icon, text }) => {
    return (
        <div className='flex justify-center items-center flex-col '>
            <img src={icon} alt="" className='mb-4' />
            {
                text.map((t, index) => (
                    index === 0 ? <div className="text-3xl font-bold text-slate-600">{t}</div> : <div className='text-xs text-gray-600'>{t}</div>
                ))
            }
        </div>
    )
}

export default Feature;