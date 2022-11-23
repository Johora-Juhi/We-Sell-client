import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className='bg-blue-50 p-8'>
            <p>Something Went Wrong</p>
            <p className='text-red-500 py-2'>{error.statusText || error.message}</p>
            <h1 className='text-xl'>Please <Link onClick={handleLogOut} to='/signout'>Sign Out</Link> and again login</h1>
        </div>
    );
};

export default DisplayError;