import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HomeBanner from '../HomeBanner/HomeBanner';
import ProductCategories from '../ProductCategories/ProductCategories';
import Specialties from '../Specialty/Specialties';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <HomeBanner></HomeBanner>
            <ProductCategories></ProductCategories>
            <Specialties></Specialties> 
            <Subscribe></Subscribe>           
        </div>
    );
};

export default Home;