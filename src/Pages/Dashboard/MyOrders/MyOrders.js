import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    useTitle('My Orders');

    const { user } = useContext(AuthContext);
    const url = `https://assignment-twelve-server-six.vercel.app/myorders?email=${user?.email}`;

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
        <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 px-5'>
            {
                products.map(product =>
                    <div key={product._id} className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl my-10 border-2 border-gray-500">
                        <figure className='w-full lg:w-2/4'><img src={product.image} alt="Movie" /></figure>
                        <div className="card-body w-full lg:w-2/4">
                            <h2 className="card-title text-2xl">{product.productName}</h2>
                            <hr />
                            <p className='font-light'>Price: ৳{product.price}
                                <br />
                                <br />
                                Seller Info: <br />

                                Phone: {product.phone} <br />
                                Location: {product.location}
                            </p>

                            <div className="card-actions justify-end">
                                {
                                    product.price && !product.paid &&
                                    <Link className="btn rounded-none text-white btn-primary "><button>Pay Now</button></Link>
                                }
                                {
                                    product.price && product.paid &&
                                    <p className='text-green-600'>Paid</p>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;