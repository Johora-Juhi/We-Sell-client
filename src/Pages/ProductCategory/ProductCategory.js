import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal/BookingModal';
import ProductsCard from './ProductsCard';
import banner from '../../assets/images/banner2.jpg';

const ProductCategory = () => {
    useTitle('Products');
    const products = useLoaderData();
    const [avaiableProducts, setAvailabeProducts]=useState(null);
     return (
        <div>
            <div className='relative mb-32'>
                <img className='' src={banner} alt="" />
                <div className='absolute top-1/3 w-full text-center'>
                    <h1 className='uppercase text-5xl font-bold text-white'>want one!</h1>
                    {/* <p>Avaiable Options {products.length}</p> */}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-2 lg:mx-32'>
            {
                products.map(product=><ProductsCard
                key={product._id}
                product={product}
                setAvailabeProducts={setAvailabeProducts}>
                </ProductsCard>)
            }
            </div>
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