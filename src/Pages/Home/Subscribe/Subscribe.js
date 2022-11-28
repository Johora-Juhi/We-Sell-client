import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Subscribe = () => {
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_v7efq22', 'template_fnqzesg', e.target, 'HcDRoU-wmqyzWpFtz')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center-center',
                    icon: 'success',
                    title: 'Subscribed',
                    showConfirmButton: false,
                    timer: 2000
                })
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-5/6 mt-32 mx-auto'>
            <div>
                <h1 className='uppercase text-xl  font-bold'>know it all first!</h1>
                <p className='font-light'>Never Miss Anything From weSell By Signing Up To Our Newsletter.</p>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div>
                <form className='flex gap-2' onSubmit={sendEmail}>
                    <input type="email" placeholder="Enter your email" className="input input-bordered rounded-none w-full max-w-xs" />
                    <button className='btn btn-primary rounded-none text-white' type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;