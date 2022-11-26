import React, { useEffect } from 'react';

const ProductsCard = ({ product, setAvailabeProducts }) => {
    useEffect(() => {
        window.scrollTo(0,0)
        }, [])
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
            <figure className="pl-10 w-full lg:w-2/4">
                <img src={image} alt=""/>
            </figure>
            <div className="my-10 text-center lg:text-start w-full  lg:w-2/4 ">
                <h2 className="font-semibold text-2xl mb-3">{name}</h2>
                <p>Used: {yearsUsed} years</p>
                <p>Condition: {conditionType}</p>
                <p className='font-bold'><span className='text-2xl font-bold'>৳</span> {resalePrice}</p>
                <p>Original Price: <span className='text-2xl font-bold'>৳</span> <del>{originalPrice}</del></p>

                <div className="divider"></div>
                <h2 className='font-bold '>Seller Info</h2>
                <p>Name: {sellerName}</p>
                <p>Phone: {sellerPhone}</p>
                <p>Location: {sellerLocation}</p>
                <p>Posted: {postTime}</p>
                {/* <button className="btn btn-primary rounded-none text-white mt-2 btn-sm">Book Now</button> */}
                {/* disabled={status === 'paid'} */}
                <label onClick={() => setAvailabeProducts(product)} htmlFor="order-modal" className="btn btn-primary rounded-none text-white mt-2 btn-sm">Book Now</label>
            </div>
        </div>
    );
};

export default ProductsCard;