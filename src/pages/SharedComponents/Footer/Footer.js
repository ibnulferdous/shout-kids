import React from 'react';
import footer1 from '../../../images/footer-1.jpg';
import footer2 from '../../../images/footer-2.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container mt-5">
                <div className="row g-md-5 align-items-center mb-5 pb-5">
                    <div className="col-md">
                        <div className="mb-5">
                            <h1 className="fw-700 mb-4">BOOK A FREE INITAL CONSULTATION NOW</h1>
                            <p className="h5 mb-5">If you are concerned about your child’s speech and language skills, don’t wait any longer. Reach out today and talk to one of our speech and language pathologist about a free consultation.</p>
                            <button className="theme-button">Request a Consultation</button>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="row g-md-5 align-items-end">
                            <div className="col-md">
                                <img src={footer1} alt="kid" className="img-fluid" />
                            </div>
                            <div className="col-md">
                                <img src={footer2} alt="kid" className="img-fluid" />
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="w-100"></div>
                <div className="row footer-credit-div ">
                    <div className="col-md py-3 d-flex justify-content-center justify-content-md-start">
                        <p className="text-grey mb-0">&copy; 2021 Shout Kids, All Rights Reserved</p>
                    </div>
                    <div className="col-md d-flex justify-content-center justify-content-md-end social-icons py-3">
                        <a href="http://facebook.com/" rel="noreferrer" target="_blank">
                            <i className="fab fa-facebook-f mx-2"></i>
                        </a>
                        <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                            <i className="fab fa-twitter mx-2"></i>
                        </a>
                        <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
                            <i className="fab fa-youtube mx-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;