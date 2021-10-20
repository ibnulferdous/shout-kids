import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './RegisterPage.css';

const RegisterPage = () => {
    const { logInUsingGoogle, user, registrationUsingEmail, errorFirebase, successFirebase } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        registrationUsingEmail(data);
    };

    return (
        <div className="container px-2 py-7 text-center">
            <h1 className="text-uppercase fw-700">Create Account</h1>
            <p className="mb-5 text-grey">Alreay have an account?
                <Link to='/login' className="mx-2 fw-700 link-text">Log in here</Link>
            </p>
            <div className="form-div mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="my-4">
                        <input 
                            placeholder="Full Name" 
                            type="text" 
                            defaultValue={user?.displayName ? user.displayName : ""}
                            {...register('fullName', { required: true })} 
                            className="d-block w-100" 
                        />
                        {errors.fullName && errors.fullName.type === "required" && <p className="error-message">Full name is required</p>}
                    </div>

                    <div className="my-4">
                        <input 
                            placeholder="Email" 
                            type="email" 
                            defaultValue={user?.email ? user.email : ""}
                            {...register('email', { required: true })} 
                            className="d-block w-100" 
                        />
                        {errors.email && errors.email.type === "required" && <p className="error-message">Email is required</p>}
                    </div>

                    <div className="my-4">
                        <input 
                            placeholder="Password" 
                            type="password" 
                            {
                                ...register('password', { 
                                    required: true,
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters!"
                                    }
                                })
                            } 
                            className="d-block w-100"
                        />
                        {errors.password && errors.password.type === "required" && <p className="error-message">Password is required</p>}
                        {errors.password && <p className="error-message">{errors.password.message}</p>}
                    </div>
                    {
                        errorFirebase && <p className="error-message">{errorFirebase}</p>
                    }
                    {
                        successFirebase && <p className="error-message">{successFirebase}</p>
                    }
                    
                    <input type="submit" className="d-block mt-4 mx-auto theme-button" value="Register" />
                </form>
            </div>
            <div className="mt-5">
                <h5>Or use Google account to log in</h5>
                <button onClick={logInUsingGoogle} className="google-button">
                    <i className="fab fa-google"></i>
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;