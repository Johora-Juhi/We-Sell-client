import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    useTitle('All Seller');

    const [deletingSeller, setDeletingSeller] = useState(null)
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-twelve-server-six.vercel.app/users/sellers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });
    const handleVarifySeller = seller => {
        fetch(`https://assignment-twelve-server-six.vercel.app/users/sellers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Varified',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    refetch()
                }
            })
    }

    const closeModal = () => {
        setDeletingSeller(null);
    }
    const handleDetetingSeller = seller => {
        fetch(`https://assignment-twelve-server-six.vercel.app/users/sellers/${seller._id}`, {
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
                        title: 'Seller Deleted Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }
    return (
        <div className='bg-blue-50 p-8'>
            <div>
                <h1 className='text-3xl'>All Seller</h1>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Varify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>{!seller.verified && <button onClick={() => handleVarifySeller(seller)} className="btn btn-xs btn-outline btn-primary">Varify</button>}
                                        {seller.verified && <p className='text-blue-400 text-2xl font-bold'>✔</p>}
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error text-white">Delete</label>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={'Are you sure you want to delete'}
                    message={`If you delete ${deletingSeller.name}. It can not be done`}
                    successAction={handleDetetingSeller}
                    modalData={deletingSeller}
                    successButtonName={'Delete'}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div >
    );
};

export default AllSellers;