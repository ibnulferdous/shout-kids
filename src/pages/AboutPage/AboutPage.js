import React from 'react';
import './AboutPage.css';
import about2 from '../../images/about-2.jpg';

const AboutPage = () => {
    return (
        <div className="about-page pt-5 pb-7">
            <main>
                <div className="container-fluid">
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

            <section>
                <div className="container">
                    <div className="row justify-content-center py-6">
                        <div className="col-md-7 text-center">
                            <h2>“Our mission is to provide all children with the best support to improve their communication skills and reach their full potential”</h2>
                            <p className="mt-2">- Andrew Mead -</p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container pt-6 pb-7">
                    <div className="row justify-content-center">
                        <div className="col text-center">
                            <h2 className="fw-700 text-uppercase text-center mb-5">Our Team</h2>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        <div className="col text-center mb-5 mb-md-0">
                            <img src="https://i.postimg.cc/PJFkZpRX/doctor2.jpg" alt="therapist" className="therapist-image mb-3 d-block mx-auto" />
                            <h5 className="mb-0">Andrew Mead, BS</h5>
                            <p className="mb-0 text-grey">Licensed Speech-Language Pathologist</p>
                            <p className="mb-0 text-grey">Board Certified Behavior Analyst</p>
                            <p className="mb-0 text-grey">Beachwood OH 44122</p>
                        </div>
                        <div className="col text-center mb-5 mb-md-0">
                            <img src="https://i.postimg.cc/QCNXFfCr/doctor.jpg" alt="therapist" className="therapist-image mb-3 d-block mx-auto" />
                            <h5 className="mb-0">Aletta Sinoff Ph.D., CCC-SLP, BCBA-D</h5>
                            <p className="mb-0 text-grey">Licensed Speech-Language Pathologist</p>
                            <p className="mb-0 text-grey">Board Certified Behavior Analyst</p>
                            <p className="mb-0 text-grey">Beachwood OH 44122</p>
                        </div>
                        <div className="col text-center mb-5 mb-md-0">
                            <img src="https://i.postimg.cc/kXJ5rWmH/doctor3.jpg" alt="therapist" className="therapist-image mb-3 d-block mx-auto" />
                            <h5 className="mb-0">Brad Hamilton Ph.D.</h5>
                            <p className="mb-0 text-grey">Licensed Speech-Language Pathologist</p>
                            <p className="mb-0 text-grey">Board Certified Behavior Analyst</p>
                            <p className="mb-0 text-grey">Beachwood OH 44122</p>
                        </div>
                        <div className="col text-center mb-5 mb-md-0">
                            <img src="https://i.postimg.cc/8ctT4kZ5/doctor6.jpg" alt="therapist" className="therapist-image mb-3 d-block mx-auto" />
                            <h5 className="mb-0">Darrel Wilson Ph.D.</h5>
                            <p className="mb-0 text-grey">Licensed Speech-Language Pathologist</p>
                            <p className="mb-0 text-grey">Board Certified Behavior Analyst</p>
                            <p className="mb-0 text-grey">Beachwood OH 44122</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container pt-0 pt-lg-5">
                    <div className="row">
                        <div className="col-md">
                            <img src={about2} alt="testimonial of about" className="img-fluid" />
                        </div>
                        <div className="col-md ps-3 ps-md-5 pt-5 pt-md-0 d-flex align-items-center">
                            <div className="testimonial-text">
                                <h3>“My Daughter Has Made Amazing Progress With Her Speech! Now That Others Can Understand Her, She Has Much More Confidence.”</h3>
                                <p className="mt-2">Carol A.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>       
        </div>
    );
};

export default AboutPage;