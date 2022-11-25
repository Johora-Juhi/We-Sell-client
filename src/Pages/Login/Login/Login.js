// import { set } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
// import useToken from '../../../hooks/useToken';
import login from '../../../assets/images/login.jpg';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [LoginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(LoginUserEmail);

    // if (token) {
    //     navigate(from, { replace: true })
    // }
    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.error(error.message);
                setLoginError(error.message);
            })
    }
    return (
        <div className="card flex w-full lg:w-1/2 mx-auto shadow-inner lg:shadow-2xl my-8 bg-base-100 flex-col lg:flex-row">
            <div className='relative hidden lg:block w-1/2'>
            <img src={login} alt="" />
            <h3 className='absolute top-1/2 left-36 w-1/4 text-xl font-bold text-center'>Now, you are waiting for your login!</h3>
            </div>
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                <h1 className="text-3xl text-center">Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: "Email Address is required"
                    })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: "Password is required"
                        ,
                        minLength: { value: 6, message: 'Password must be 6 charecters or more' }
                    })} type="password" placeholder="password" className="input input-bordered" />
                    {errors.password && <p className='text-red-500' >{errors.password?.message}</p>}
                    {loginError &&
                        <label className="label">
                            <p className="label-text text-red-500">{loginError}</p>
                        </label>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <button className="btn btn-accent">Login</button>
                </div>
                <p className='text-center label-text'>New to Doctors Portal? <Link to='/signup' className='text-primary'> Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Login;