import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-twelve-server-six.vercel.app/categoriesType')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            })
    }, [])
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
            <Link className="justify-between">
                Categories
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            {/* <ul className="p-2 z-30">
                {categories.map(category => <li key={category._id}><Link to={`category/${category.categoryId}`}>{category.categoryName}</Link></li>
                )}
            </ul> */}
        </li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button className='btn btn-primary btn-outline mr-0 lg:mr-4 shadow-inner' onClick={handleLogOut} to='/signout'>Sign Out</button></li>
            </>
            : <li><Link className='btn btn-primary text-white mr-0 lg:mr-4' to='/login'>Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 p-0 lg:py-4 container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-4xl">we<span className='bg-slate-500 text-white px-1 rounded-md'>Sell</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className='navbar-end  lg:hidden'>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;