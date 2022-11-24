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
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-28 '>
            {
                categories.map(category => <ProductCard
                    key={category.categoryId}
                    category={category}></ProductCard>)
            }
        </div>
    );
};

export default ProductCategories;