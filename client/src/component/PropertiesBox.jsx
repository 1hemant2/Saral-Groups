import React from 'react';
import { useNavigate } from 'react-router-dom';

const PropertiesBox = ({ id, image_url, rent, name, about }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/propertiesDetial/${id}`)
    }
    return (
        <div className="bg-slate-100  h-52 shadow-xl cursor-pointer" onClick={handleClick} >
            <img src={image_url} alt="image" height={48} width={48} />
            <div className='text-black'>From €{rent}/month</div>
            <div className='text-2xl font-semibold'>{name}</div>
        </div>
    )
}

export default PropertiesBox;