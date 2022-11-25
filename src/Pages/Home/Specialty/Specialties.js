import React from 'react';
import truck from '../../../assets/images/truck.png';
import hour from '../../../assets/images/hour.png';
import promotion from '../../../assets/images/promotion.png';

const Specialties = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mx-40 border-y border-gray-400 py-16 '>
            <div className='flex gap-4 justify-center overflow-hidden items-center border-r border-gray-400 py-2'>
                <div className="avatar zoom">
                    <div className="w-16 rounded">
                        <img src={truck} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold'>FREE SHIPPING</h1>
                    <p className='text-gray-400'>Free Shipping World Wide</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center overflow-hidden border-r border-gray-400 py-2'>
                <div className="avatar zoom">
                    <div className="w-16 rounded">
                        <img src={hour} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold'>24 X 7 SERVICE</h1>
                    <p className='text-gray-400'>Online Service For New Customer</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center items-center overflow-hidden py-2'>
                <div className="avatar zoom">
                    <div className="w-16 rounded">
                        <img src={promotion} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-xl font-bold'>FESTIVAL OFFER</h1>
                    <p className='text-gray-400'>New Online Special Festival Offer</p>
                </div>
            </div>
        </div>
    );
};

export default Specialties;