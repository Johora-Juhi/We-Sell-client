import React from 'react';
import { Link } from 'react-router-dom';

const BannerSlide = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full  ">
            <div className='carosel-img'>
                <img src={image} alt="" className="w-full"/>
            </div>
            <div className="absolute transform -translate-y-1/2 top-1/2 text-center left-96 w-full hidden lg:block">
                    <h4 className='text-3xl font-semibold tracking-widest text-gray-600'>Get Your Own Mobile Device</h4>
                    <h1 className='text-6xl font-bold tracking-wider py-3 uppercase'> Starting $80</h1>
                    <Link className='btn btn-primary text-white mt-6'>Shop Now</Link>
            </div>
            <div className="absolute lg:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2  hidden ">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerSlide;