import React from 'react';
import { useNavigate } from 'react-router-dom';

const PropertiesBox = ({ id, image_url, rent, name, about }) => {
    console.log(image_url);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/propertiesDetial/${id}`)
    }
    return (
        <div className="bg-slate-100   shadow-xl cursor-pointer " onClick={handleClick} >
            <img src={image_url} alt="image" className='h-40 w-96' />
            <div className='text-black'>From €{rent}/month</div>
            <div className='text-2xl font-semibold'>{name}</div>
        </div>
    )
}

export default PropertiesBox;