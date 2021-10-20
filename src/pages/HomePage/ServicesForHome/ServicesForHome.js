import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard/ServiceCard';
import './ServicesForHome.css';

const ServicesForHome = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://ibnulferdous.github.io/helthcare-data/therapyServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    } ,[]);

    return (
        <section className="services-on-home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7 text-center my-5">
                        <h2 className="fw-700 mb-4 text-center">FULL RANGE OF SERVICES FOR CHILDREN WITH SPEECH AND LANGUAGE DISORDERS</h2>
                    </div>
                </div>
                <Row xs={1} md={2} className="g-md-5 mb-5 pb-5">
                    {
                        services.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
                    }
                </Row>
            </div>
        </section>
    );
};

export default ServicesForHome;