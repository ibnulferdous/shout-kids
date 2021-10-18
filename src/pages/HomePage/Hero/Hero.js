import React from 'react';
import './Hero.css';
import heroImage from '../../../images/HomePage-Hero.jpg';

const Hero = () => {
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row hero-content-div">
                    <div className="col-md gx-0 hero-left">
                        <div></div>
                        {/* <img src={heroImage} alt="child trying to learn" className="img-fluid" /> */}
                    </div>
                    <div className="col-md hero-right">
                        <div>
                            <h1 className="fw-700 mb-4">WELCOME TO SHOUT KIDS׳ SPEECH AND LANGUAGE THERAPY</h1>
                            <p className="h5 mb-5">Supporting children to develop their communication skills and reach their maximum potential</p>
                            <button className="theme-button">Refer Your Child</button>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="row shapes-div overflow-hidden">
                    <div className="col-md-7 d-flex justify-content-end">
                        <div className="egg-shape"></div>
                    </div>
                    <div className="col-md-5 gx-0 d-flex justify-content-end">
                        <div className="triangle-shape"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;