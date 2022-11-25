import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useToken from '../../../hooks/useToken';
import login from '../../../assets/images/login.jpg';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [LoginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(LoginUserEmail);

    if (token) {
        navigate(from, { replace: true })
    }
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
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                const role = "user";
                saveUser(user.displayName, user.email, role);
            })
            .catch(error => console.error('error', error))
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
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
                setLoginUserEmail(email);
            })
    }
    return (
        <div className="card flex w-full lg:w-1/2 mx-auto shadow-inner lg:shadow-2xl my-8 bg-base-100 flex-col lg:flex-row">
            <div className='relative hidden lg:block w-1/2'>
            <img src={login} alt="" />
            <h3 className='absolute top-1/2 left-36 w-1/4 text-xl font-bold text-center'>Now, you are waiting for your login!</h3>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)} >
                <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
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
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                </div>
                <div className="form-control mt-4">
                    <button className="btn btn-primary text-white mt-2">Login</button>
                </div>
                <p className='text-center label-text my-2'>New to We Sell? <Link to='/signup' className='text-primary font-bold'> Create new account</Link></p>
            </form>
            <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button>
        </div>
            </div>
    );
};

export default Login;