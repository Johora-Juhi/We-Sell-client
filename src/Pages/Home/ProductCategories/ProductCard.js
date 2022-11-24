import React from 'react';
import './ProductCard.css';

const ProductCard = ({ category }) => {
    const { categoryName, categoryImage } = category;
    return (
        <div className="card shadow-xl image-full bg-opacity-20">
            <figure className='p-div'>
                <img className='c-div' src={categoryImage} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title text-3xl text-white pt-32 tracking-widest">{categoryName}</h2>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">View items</button>
                </div> */}
            </div>
        </div>
    );
};

export default ProductCard;