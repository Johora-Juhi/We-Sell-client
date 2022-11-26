import React from 'react';

const Subscribe = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-5/6 mt-32 mx-auto'>
            <div>
                <h1 className='uppercase text-xl  font-bold'>know it all first!</h1>
                <p className='font-light'>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
            </div>
            <div className="divider lg:divider-horizontal"></div> 
            <div className='flex gap-2'>
            <input type="email" placeholder="Enter your email" className="input input-bordered rounded-none w-full max-w-xs" />
            <button className='btn btn-primary rounded-none'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;