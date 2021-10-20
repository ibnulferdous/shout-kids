import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div>
            <main>
                <div className="container-fluid mt-5">
                    <div className="row hero-content-div">
                        <div className="col-md gx-0 about-hero-left">
                            <div></div>
                            {/* <img src={heroImage} alt="child trying to learn" className="img-fluid" /> */}
                        </div>
                        <div className="col-md hero-right">
                            <div>
                                <h1 className="fw-700 mb-4 text-uppercase">ABOUT SHOUT KIDS</h1>
                                <p className="h5 mb-5">We have been providing Speech-Language services for over 20 years and have
                                    successfully treated thousands of patients across many different etiologies and
                                    diagnoses affecting communication abilities. 
                                    <br />
                                    <br /> 
                                    Distinctive to us is our laser-like focus on the individual as we learn all we
                                    can about their diagnosis and its impact on their life in order to treat their
                                    communication deficit(s) to the best of our abilities.</p>
                                <button className="theme-button">Refer Your Child</button>
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

export default AboutPage;