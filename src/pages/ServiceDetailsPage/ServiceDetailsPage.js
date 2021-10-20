import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetailsPage.css';
import serviceDetailsImageOne from '../../images/service-deatils-1.jpg';
import { Row } from 'react-bootstrap';
import SpecializationItem from './SpecializationItem';

const ServiceDetailsPage = () => {
    const [ serviceDetails, setServiceDetails ] = useState({});
    const { serviceId } = useParams();
    
    useEffect(() => {
        fetch(`https://ibnulferdous.github.io/helthcare-data/service${serviceId}.json`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, []);

    const { description, duration, image, name, price, specialization, therapist } = serviceDetails;

    let durationtext = "";

    if (duration < 60) {
        durationtext = `Duration: ${duration} minutes`;
    } else if (duration < 120) {
        durationtext = `Duration: Up to 1 hour`;
    } else {
        durationtext = `Duration: Up to 2 hours`;
    }

    console.log(serviceDetails)


    return (
        <div className="services-details-page">
            <section className="section-1">
                <div className="container my-5">
                    <div className="row">
                        <div className="col">
                            <div className="details-h1-div mx-auto mt-5">
                                <img src={image} alt="service" className="services-details-image d-block mx-auto" />
                                <h1 className="fw-700 text-uppercase text-center pt-5 pb-4">{name}</h1>
                                <div className="service-info-div row justify-content-center mb-4">
                                    <div className="col-md-3 d-flex justify-content-center">
                                        <li className="text-grey">{durationtext}</li>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center">
                                        <li className="text-grey">Price: ${price}</li>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="row g-md-5 pt-3 mb-5">
                        <div className="col-md-7 col-lg-8">
                            <p>{description}</p>
                        </div>
                        <div className="col-md-5 col-lg-4 pt-5 pt-md-0">
                            {
                                serviceDetails?.therapist && <div>
                                    <img src={therapist.image} alt="therapist" className="therapist-image mb-3" />
                                    <h5 className="mb-0">{therapist.name}</h5>
                                    <p className="mb-0 text-grey">{therapist.degree}</p>
                                    <p className="mb-0 text-grey">{therapist.certification}</p>
                                    <p className="mb-0 text-grey">{therapist.institute}</p>
                                </div>
                            }                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-2">
                <div className="container py-5">
                    <div className="row g-md-5">
                        <div className="col-md">
                            <img src={serviceDetailsImageOne} alt={`service ${name}`} className="img-fluid" />
                        </div>
                        <div className="col-md">
                            <h3 className="fw-700 pt-5 pt-md-0">TAILORED THERAPY TO BEST SUIT YOUR CHILDREN IN DEVELOPING THEIR COMMUNICATION SKILLS</h3>
                            <p className="mt-4 mb-5">Our children’s speech therapy center addresses communication disorders, motor skills, and offers specific individual treatments and speech therapy options. Let’s evaluate the benefits of individual speech therapy working.</p>
                            <Row xs={1} md={2} className="g-2">
                                {
                                    serviceDetails?.specialization && specialization.map((item, index) => <SpecializationItem key={index} item={item}></SpecializationItem>)
                                }                                
                            </Row>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailsPage;