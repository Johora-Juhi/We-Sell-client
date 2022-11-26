import React from 'react';

const ProductsCard = ({ product }) => {
    const {
        name,
        image,
        conditionType,
        description,
        resalePrice,
        originalPrice,
        yearsUsed,
        sellerName,
        sellerPhone,
        sellerLocation,
        postTime
    } = product;
    return (
            <div className="bg-transparent flex flex-col lg:flex-row border-gray-200 border-2">
                <figure className="pl-10">
                    <img src={image} alt="" style={{ height: '420px' }} />
                </figure>
                <div className="my-10 text-center lg:text-start">
                    <h2 className="font-semibold text-2xl mb-3">{name}</h2>
                        <p>Used: {yearsUsed} years</p>
                        <p>Condition: {conditionType}</p> 
                        <p className='font-bold'>{resalePrice} Taka</p>
                        <p>Original Price: {originalPrice} Taka</p>

                        <div className="divider"></div> 
                       <h2 className='font-bold '>Seller Info</h2>
                       <p>Name: {sellerName}</p>
                       <p>Phone: {sellerPhone}</p>
                       <p>Location: {sellerLocation}</p>
                       <p>Posted: {postTime}</p>
                        <button className="btn btn-primary rounded-none text-white mt-2 btn-sm">Book Now</button>
                </div>
            </div>
    );
};

export default ProductsCard;