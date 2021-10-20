import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './BookSessionPage.css';

const BookSessionPage = () => {
    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="book-session-page pt-5 pb-7">
            <main>
                <div className="container-fluid">
                    <div className="row hero-content-div">
                        <div className="col-md gx-0 about-hero-left">
                            <div></div>
                            {/* <img src={heroImage} alt="child trying to learn" className="img-fluid" /> */}
                        </div>
                        <div className="col-md hero-right">
                            <div>
                                <h1 className="fw-700 mb-4 text-uppercase">Book A session</h1>
                                <p className="h5 mb-5">If you are concerned about your child’s speech and language skills, please feel free to reach out and get the best support and help for your child to reach his maximum potential.</p>
                                <div className="booking-form">
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
                                                placeholder="Phone"
                                                type="tel"
                                                {...register('phone')}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="my-4">
                                            <textarea id="w3review" name="w3review" rows="3" className="booking-text-area w-100" />
                                        </div>

                                                                        

                                        <input type="submit" className="d-block mt-4 mx-auto theme-button" value="Book A Session" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="row shapes-div">
                        <div className="col-md-7 d-flex justify-content-end mt-5">
                            <div className="egg-shape d-none d-md-block"></div>
                        </div>
                        <div className="col-md-5 gx-0 d-flex justify-content-end">
                            <div className="triangle-shape d-none d-md-block"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookSessionPage;