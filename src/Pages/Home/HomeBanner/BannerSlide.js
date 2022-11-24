import React from 'react';

const BannerSlide = ({ slide }) => {
    const { id, image, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full  ">
            <div className='carosel-img'>
                <img src={image} alt="" className="w-full rounded-xl" style={{ height: '600px' }} />
            </div>

            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-slate-50 w-2/5'>Affordable Price For Car Servicing</h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-xl text-slate-50 w-3/5'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-error mr-5 text-slate-50">Discover More</button>
                <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerSlide;