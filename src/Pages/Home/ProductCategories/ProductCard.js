import React from 'react';
import './ProductCard.css';

const ProductCard = ({ category }) => {
    const { categoryName, categoryImage } = category;
    return (
        <div className='relative overflow-hidden'>
            <img className='zoom brightness-75' src={categoryImage} alt="" />
            <h1 className=' text-xl lg:text-3xl text-white absolute top-1/2 lg:top-3/4 left-5 font-bold tracking-wide'>{categoryName}</h1>
        </div>
    );
};

export default ProductCard;