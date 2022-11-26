import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesCard.css';

const CategoriesCard = ({ category }) => {
    const { categoryName, categoryImage, categoryId } = category;
    return (
       <Link to={`categories/${categoryId}`}>
        <div className='relative overflow-hidden'>
            <img className='zoom brightness-75' src={categoryImage} alt="" />
            <h1 className=' text-xl lg:text-3xl text-white absolute top-1/2 lg:top-3/4 left-5 font-bold tracking-wide'>{categoryName}</h1>
        </div>
        </Link>
    );
};

export default CategoriesCard;