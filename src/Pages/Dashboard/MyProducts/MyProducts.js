import React, { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import useTitle from '../../../hooks/useTitle';

const MyProducts = () => {
    useTitle('My Product');

    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }
    const handleDetetingProduct = product => {
        fetch(`https://assignment-twelve-server-six.vercel.app/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Product Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    const handleAdvertise = id => {
        fetch(`https://assignment-twelve-server-six.vercel.app/product/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Product Advertised Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    const url = `https://assignment-twelve-server-six.vercel.app/myproducts?email=${user?.email}`;

    const { data: products = [], isLoading, refetch } = useQuery({
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
                <h1 className='text-xl font-bold'>Manage Products: {products?.length}</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Sales Status</th>
                            <th>Advertise</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.resalePrice}</td>
                                    <td>{product.conditionType}</td>
                                    <td>
                                        {
                                            product.resalePrice && !product.paid &&
                                            <p>Avaiable</p>
                                        }
                                        {
                                            product.resalePrice && product.paid &&
                                            <p>Sold</p>
                                        }
                                    </td>
                                    <td>
                                        {<button onClick={() => handleAdvertise(product._id)} className="btn btn-xs btn-outline btn-primary" disabled={product.advertise}>Advertise</button>}
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingProduct.name}. It can not be done`}
                    successAction={handleDetetingProduct}
                    modalData={deletingProduct}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default MyProducts;