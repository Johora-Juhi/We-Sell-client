import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ProductsCard = ({ product, setAvailabeProducts }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const { _id, name, image, conditionType, resalePrice, originalPrice, yearsUsed, yearOfPurchase, sellerName, sellerPhone, sellerLocation, postTime, paid, status } = product;

    const handleReport = id => {
        fetch(`https://assignment-twelve-server-six.vercel.app/productReport/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Product Reported',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
                else {
                    Swal.fire({
                        position: 'center center',
                        icon: 'error',
                        title: data.message
                    })
                }
            }
            )
    }

    return (
        <>
            {resalePrice && !paid &&

                <div className="bg-transparent flex flex-col lg:flex-row border-gray-200 border-2">
                    <figure className="pl-10 w-full lg:w-2/4">
                        <img src={image} alt="" />
                    </figure>
                    <div className="my-8 text-center lg:text-start w-full  lg:w-2/4 ">
                        <h2 className="font-semibold text-2xl mb-3">{name}</h2>
                        <div className="font-light">
                            <p>Used: {yearsUsed} years</p>
                            <p>Purchased: {yearOfPurchase} </p>
                            <p>Condition: {conditionType}</p>
                            <p className='font-bold'><span className='text-xl'>৳</span> {resalePrice}</p>
                            <p>Original Price: <span className='text-xl font-bold'>৳</span> <del>{originalPrice}</del></p>

                            <div className="divider"></div>
                            <h2 className='font-bold '>Seller Info</h2>
                            <div className='flex gap-2 justify-center lg:justify-start items-center'>
                                <p>Name: {sellerName}</p>
                                {product.verified && <p className='text-blue-500 text-xl font-bold'>✔</p>}
                            </div>
                            <p>Phone: {sellerPhone}</p>
                            <p>Location: {sellerLocation}</p>
                            <p>Posted: {postTime}</p>
                        </div>
                        <div className='flex justify-center lg:justify-start gap-6 items-center mt-2 '>
                            <label onClick={() => setAvailabeProducts(product)} htmlFor="order-modal" className="btn btn-primary rounded-none text-white btn-sm">Book Now</label>
                            <button onClick={() => handleReport(_id)} className='btn btn-error btn-outline btn-sm ml-5'>Report</button>
                        </div>
                    </div>
                </div>
            }</>
    );
};

export default ProductsCard;