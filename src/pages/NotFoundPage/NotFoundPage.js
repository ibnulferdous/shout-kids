import React from 'react';
import './NotFoundPage.css';
import notFoundIcon from '../../images/404-page.svg';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="container my-5 text-center not-found">
            <div className="row justify-content-center align-items-center my-5">
                <div className="col pb-5">
                    <img src={notFoundIcon} alt="Not found" className="not-found-icon mb-3" />
                    <h1 className="display-3 pb-5">Page not found</h1>
                    <Link to='/' className="theme-button">Home</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;