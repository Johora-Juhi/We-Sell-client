import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddProduct = () => {
    useTitle('Add Product');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const currnetYear = new Date().getFullYear();
    const today = format(new Date(), 'PP')
    const imageHostKey = process.env.REACT_APP_imgbb_Key;

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesType')
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                }
                const product = {
                    sellerName: user.displayName,
                    email: user.email,
                    name: data.productName,
                    conditionType: data.condition,
                    sellerPhone: data.mobile,
                    sellerLocation: data.location,
                    categoryId: data.categoryId,
                    originalPrice: data.orginalPrice,
                    resalePrice: data.resaleSale,
                    yearOfPurchase: data.yearOfPurchase,
                    description: data.description,
                    image: imgData.data.url,
                    yearsUsed: currnetYear - data.yearOfPurchase,
                    postTime: today
                }

                fetch('http://localhost:5000/categories', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        Swal.fire({
                            position: 'center center',
                            icon: 'success',
                            title: 'Product added Successfully',
                            showConfirmButton: false,
                            timer: 2000
                        })
                        navigate('/dashboard/myProducts')
                    })
            })
    }
    return (
        <div className='flex justify-center items-center my-5 bg-slate-100'>
            <div className='w-full px-7 my-10 py-10 mx-5 '>
                <div className="text-3xl text-center">Add A Product</div>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className=''>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("productName", {
                                    required: "Product name is required"
                                })} />
                            {errors.productName && <p className='text-red-500'>{errors.productName?.message}</p>}
                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("condition", {
                                    required: true
                                })}
                            >
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("mobile", {
                                    required: true
                                })}
                            />
                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("location", {
                                    required: "Your location is required"
                                })}
                            />
                            {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}

                        </div>
                        <div className="form-control  w-full mb-2">
                            <label className="label">
                                <span className="label-text">Guitar Type</span>
                            </label>
                            <select {...register("categoryId", {
                                required: "Phone type is required"
                            })} className="select select-bordered w-full">
                                {
                                    categories.map(category => <option key={category._id}
                                        value={category.categoryId}>
                                        {category.categoryName}
                                    </option>
                                    )
                                }
                            </select>
                            {errors.categoryId && <p className='text-red-500'>{errors.categoryId?.message}</p>}

                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Orginal Price</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("orginalPrice", {
                                    required: true
                                })}
                            />
                        </div>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="text" className="input input-bordered w-full"
                                {...register("resaleSale", {
                                    required: "Resale price is required"
                                })}
                            />
                            {errors.resaleSale && <p className='text-red-500'>{errors.resaleSale?.message}</p>}

                        </div>
                    </div>

                    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2'>
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Year Of Purchase</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("yearOfPurchase", {
                                    required: true
                                })}
                            >
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full"
                                {...register("image", { required: true })} />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24"  {...register("description", {
                            required: "Please Enter your product description"
                        })}></textarea>
                        {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}

                    </div>

                    <input className='btn btn-primary rounded-none text-white my-5' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;