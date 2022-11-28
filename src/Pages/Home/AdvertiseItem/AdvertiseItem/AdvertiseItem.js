import React, { useEffect, useState } from 'react';
import AdvertiseItemCard from '../AdvertiseItemCard/AdvertiseItemCard';
import './AdvertiseItem.css'

const AdvertiseItem = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://assignment-twelve-server-six.vercel.app/advertiseproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {
                products.length &&
                <div className='advertiseBackground my-32 flex flex-wrap justify-around gap-8 '>
                    {
                        products.map(product => <AdvertiseItemCard
                            key={product._id}
                            product={product}></AdvertiseItemCard>)
                    }
                </div>
            }
        </div>
    );
};

export default AdvertiseItem;