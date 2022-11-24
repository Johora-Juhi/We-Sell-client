import React from 'react';
import './ProductCard.css';

const ProductCard = ({ category }) => {
    const { categoryName, categoryImage } = category;
    return (
        <div className='relative overflow-hidden'>
            <img className='zoom brightness-75' src={categoryImage} alt="" />
            <h1 className='text-3xl text-white absolute top-3/4 left-5 font-bold tracking-wide'>{categoryName}</h1>
        </div>
    );
};

export default ProductCard;