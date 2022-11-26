import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const ProductCategory = () => {
    const products = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-2 lg:mx-32 gap-8 my-16'>
            {
                products.map(product=><ProductsCard
                key={product._id}
                product={product}>
                </ProductsCard>)
            }
        </div>
    );
};

export default ProductCategory;