import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data)
            })
    }, [])
    return (
       <div>
        <h1 className='text-4xl font-bold mt-8 tracking-wide uppercase text-center'>Categories</h1>
        <p className='bg-cyan-900 mx-auto py-1 mt-2 w-1/12'></p>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 px-28'>
            {
                categories.map(category => <ProductCard
                    key={category.categoryId}
                    category={category}></ProductCard>)
            }
        </div>
       </div>
    );
};

export default ProductCategories;