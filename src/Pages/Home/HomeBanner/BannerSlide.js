import React from 'react';
import './BannerSlide.css';
const BannerSlide = ({ slide,advertise }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full hover-this">
            <div className='carosel-img'>
                <img src={image} alt="" className="w-full"/>
            </div>
            <div className="absolute transform -translate-y-1/2 top-1/2 text-center left-96 w-full hidden lg:block">
                    <h4 className='text-3xl font-semibold tracking-widest text-gray-600'>Get Your Own Mobile Device</h4>
                    <h1 className='text-5xl font-bold text-white py-3 uppercase'> Starting $80</h1>
                    <a href={`${advertise}`} className='btn btn-primary rounded-none text-white mt-4'>Shop Now</a>
            </div>
            <div className="hidden lg:block">
                <a href={`#slide${prev}`} className="text-2xl left-text btn btn-circle btn-outline">❮</a>
                <a href={`#slide${next}`} className="text-2xl right-text btn btn-circle btn-outline">❯</a>
            </div>
        </div>
        // absolute lg:flex justify-between transform -translate-y-1/2  right-5 top-1/2 hidden
    );
};

export default BannerSlide;