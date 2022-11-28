import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ProductCategory.css';
import 'animate.css';
import BookingModal from '../BookingModal/BookingModal';
import useTitle from '../../../hooks/useTitle';
import ProductsCard from '../ProductsCard/ProductsCard';

const ProductCategory = () => {
    useTitle('Products');
    const products = useLoaderData();
    const [avaiableProducts, setAvailabeProducts] = useState(null);
    return (
        <div>
            <div className='proBanner'>
                <h1 className='text-6xl uppercase text-white animate__animated animate__fadeInDown'>want one !</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-2 lg:mx-32 py-20'>
                {
                    products.map(product => <ProductsCard
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