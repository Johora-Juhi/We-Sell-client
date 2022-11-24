import React from 'react';
import img1 from '../../../assets/images/banner1.jpg';
import img2 from '../../../assets/images/banner2.jpg';
import img3 from '../../../assets/images/banner3.jpg';
import BannerSlide from './BannerSlide';

const HomeBanner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerSlide
                    key={slide.id}
                    slide={slide}></BannerSlide>)
            }
        </div>
    );
};

export default HomeBanner;