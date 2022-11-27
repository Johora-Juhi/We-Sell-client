import React, { useEffect, useState } from 'react';
import ProductCard from './CategoriesCard';

const ProductCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categoriesType')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data)
            })
    }, [])
    return (
        <div className='my-32'>
            <h1 className='text-3xl font-bold tracking-wide uppercase text-center'>Categories</h1>
            <p className='bg-gray-200 mx-auto py-1 mt-2 w-1/12'></p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 px-2 lg:px-28'>
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