import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
// import useToken from '../../../hooks/useToken';
import login from '../../../assets/images/login.jpg';


const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);

    // if (token) {
    //     navigate('/');
    // }
    const handleSignUp = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                // toast.success('Success Notification !', {
                //     position: toast.POSITION.TOP_CENTER
                // });

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.log(error))
                saveUser(data.name, data.email);
                console.log(user);
            })

            .catch(error => {
                console.error(error);
                setSignupError(error.message);
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })
    }

    return (
        <div className="card flex w-full lg:w-1/2 mx-auto shadow-inner lg:shadow-2xl my-8 bg-base-100 flex-col lg:flex-row">
            <div className='relative hidden lg:block w-1/2'>
                <img src={login} alt="" />
                <h3 className='absolute bottom-36 left-36 w-1/4 text-xl font-bold text-center'>Now, you are waiting to create a new account!</h3>
            </div>
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: "Name is required"
                    })} type="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email Address is required"
                    })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                {signupError &&
                    <label className="label">
                        <span className="label-text text-red-500">{signupError}</span>
                    </label>}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: "Password is required"
                        ,
                        minLength: { value: 6, message: 'Password must be 6 charecters or more' },
                        pattern: { value: /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "])/, message: "Password must be strong" }
                    })} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-accent">SignUp</button>
                </div>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;