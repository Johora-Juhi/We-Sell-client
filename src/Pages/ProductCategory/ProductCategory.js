import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal/BookingModal';
import ProductsCard from './ProductsCard';

const ProductCategory = () => {
    useTitle('Products');
    const products = useLoaderData();
    const [avaiableProducts, setAvailabeProducts]=useState(null);
     return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-2 lg:mx-32 gap-8 my-16'>
            {
                products.map(product=><ProductsCard
                key={product._id}
                product={product}
                setAvailabeProducts={setAvailabeProducts}>
                </ProductsCard>)
            }
            {
                avaiableProducts &&
                <BookingModal
                avaiableProducts={avaiableProducts}
                setAvailabeProducts={setAvailabeProducts}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductCategory;