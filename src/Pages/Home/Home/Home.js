import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ProductCategories></ProductCategories>            
        </div>
    );
};

export default Home;