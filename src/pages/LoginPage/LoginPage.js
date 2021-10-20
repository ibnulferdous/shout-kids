import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { logInUsingGoogle, user, errorFirebase, successFirebase, emailLogIn } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        emailLogIn(data);
    };

    return (
        <div className="container px-2 py-7 text-center">
            <h1 className="text-uppercase fw-700">Log in</h1>
            <p className="mb-5 text-grey">Don't have an account?
                <Link to='/register' className="mx-2 fw-700 link-text">Create an account</Link>
            </p>
            <div className="form-div mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                required: true
                            })
                            }
                            className="d-block w-100"
                        />
                        {errors.password && errors.password.type === "required" && <p className="error-message">Password is required</p>}
                    </div>
                    {
                        errorFirebase && <p className="error-message">{errorFirebase}</p>
                    }
                    {
                        successFirebase && <p className="error-message">{successFirebase}</p>
                    }

                    <input type="submit" className="d-block mt-4 mx-auto theme-button" value="Log in" />
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

export default LoginPage;