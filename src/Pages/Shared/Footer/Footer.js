import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope,FaPhone } from "react-icons/fa";


const Footer = () => {
    return (
            <footer className='footer bg-slate-100 justify-evenly p-10 text-base-content bg-cover bg-center mt-8 border-t border-slate-200'>
                <div>
                    <div className=''>
                        <p className="font-bold text-4xl pb-6">
                            we<span className='bg-slate-500 text-white px-1 rounded-md'>Sell</span></p>
                        <p className='font-semibold pb-3'>Providing services since 2016</p>
                        <p >Copyright © 2022 - All right reserved</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Categories</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link className="link link-hover">Categories</Link>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <p className="link link-hover flex gap-2 justify-center items-center"><FaEnvelope/> <p>zohrajuhi1012@gmail.com</p></p>
                    <p className="link link-hover flex gap-2 justify-center items-center"><FaPhone/> <p>+880 1978-110498</p></p>
                </div>
            </footer>
    );
};

export default Footer;