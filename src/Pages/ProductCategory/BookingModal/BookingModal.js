import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ avaiableProducts, setAvailabeProducts }) => {
    const { user } = useContext(AuthContext);

    const { name, image, resalePrice, _id } = avaiableProducts;
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const order = {
            productId: _id,
            productName: name,
            image,
            price: resalePrice,
            buyerName,
            email,
            phone,
            location
        }

        fetch('https://assignment-twelve-server-six.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setAvailabeProducts(null);
                    Swal.fire({
                        position: 'center center',
                        icon: 'success',
                        title: 'Phone Booked Successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    // refetch();
                }
                else {
                    Swal.fire({
                        position: 'center center',
                        icon: 'error',
                        title: data.message
                    })
                }
            })
        console.log(order);
    }
    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleOrder} className='mt-6 grid gap-2 grid-cols-1'>
                        <label className="label">
                            <span className="label-text">Buyer's Name</span>
                        </label>
                        <input name='name' disabled type="text" value={user?.displayName} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Buyer's Email</span>
                        </label>
                        <input name='email' disabled type="text" value={user?.email} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input name='price' disabled type="text" value={resalePrice} className="input input-bordered w-full" />

                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input name='phone' type="text" placeholder='Enter Your Phone Number' className="input input-bordered w-full" required />

                        <label className="label">
                            <span className="label-text">Buying Location</span>
                        </label>
                        <input name='location' type="text" placeholder='Enter Your Location' className="input input-bordered w-full" required />
                        <input className='btn btn-primary w-full mt-4' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;