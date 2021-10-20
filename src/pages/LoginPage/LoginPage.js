import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { logInUsingGoogle, user } = useAuth();

    console.log(user);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container my-5 text-center">
            <h1 className="text-uppercase fw-700 my-5">Log in</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Full Name" type="text" {...register('fullName', { required: true })} />
                    {errors.fullName && errors.fullName.type === "required" && <span>Full name is required</span>}
                    <input placeholder="Email" type="email" {...register('email', { required: true })} />
                    {errors.email && errors.email.type === "required" && <span>Email is required</span>}
                    <input placeholder="Password" type="password" {...register('password', { required: true })} />
                    {errors.password && errors.password.type === "required" && <span>Password is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div className="mt-5">
                <h5>or use the option below</h5>
                <button onClick={logInUsingGoogle}>Log in using Google</button>
            </div>
        </div>
    );
};

export default LoginPage;