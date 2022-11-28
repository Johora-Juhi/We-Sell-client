import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyWishlist = () => {
    const {user}=useContext(AuthContext);
    const url = `http://localhost:5000/mywishlist?email=${user?.email}`;

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div className='bg-blue-50 p-8'>
        <div>
            <h1 className='text-xl font-bold'>My Wishlist: {products?.length}</h1>
        </div>
        <div className="overflow-x-auto my-8">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Seller Contact</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) =>
                            <tr key={product._id}  className="hover">
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.phone}</td>
                                <td>
                                    {
                                        product.price && !product.paid &&
                                        <Link to={`/dashboard/payment/${product._id}`} className="btn btn-sm text-white btn-primary"><button>Pay</button></Link>
                                    }
                                    {
                                        product.price && product.paid &&
                                        <p className='text-green-600'>Paid</p>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyWishlist;