import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/checkbook');
    }
    return (
        <div className='containerjar'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>{description}</p>
            <button onClick={handleClick}>CheckBook</button>
        </div>
    );
};

export default Service;