import React from 'react';

const AdvertiseItemCard = ({ product }) => {
    const { name, image, resalePrice,originalPrice, paid } = product;
    return (
        <div>
            {
                !paid &&
                <div className="card bg-base-100 shadow-xl rounded-tl-2xl rounded-br-2xl rounded-bl-none rounded-tr-none border-slate-400 border-2 w-64 my-20 mx-auto">
                    <figure><img src={image} alt="Shoes" style={{ height: '300px' }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className=''><span className='text-xl'>৳</span> {resalePrice}</p>
                        <p className='font-light'>Original Price: <span className='text-xl'>৳</span> <del className='text-red-500'>{originalPrice}</del></p>
                    </div>
                </div>
            }
        </div>
    );
};

export default AdvertiseItemCard;