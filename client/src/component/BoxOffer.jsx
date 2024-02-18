import React from 'react'

const BoxOffer = ({ icon, text }) => {
    return (
        <div className="w-80 h-20 bg-[#42d9c2] flex justify-start items-center mt-4">
            <img src={icon} alt="" className=' h-10 w-10' />
            <p>
                {
                    text.map((t, index) => (
                        <span key={index} >
                            {index === 0 ? <span className="font-medium">{t} <br></br></span> : <span className='text-xs'>{t}</span>}
                        </span>
                    ))
                }
            </p>
        </div>
    )
}

export default BoxOffer;