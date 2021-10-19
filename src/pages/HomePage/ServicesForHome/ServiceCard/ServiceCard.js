import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    
    const { name, image, description, duration, price, id } = service;
    
    console.log(service)

    let durationtext = "";

    if(duration < 60) {
        durationtext = <li>Duration: {duration} minutes</li>
    } else if (duration < 120) {
        durationtext = <li>Duration: Up to 1 hour</li>
    } else {
        durationtext = <li>Duration: Up to 2 hours</li>
    }

    return (
        <div>
            <Col className="h-100">
                <Card className="h-100 bg-transparent border-0">
                    <Card.Img variant="top" src={image} className="img-fluid" />
                    <Card.Body className="px-0">
                        <h3 className="fw-700 text-uppercase">{name}</h3>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <ul className="d-flex justify-content-between service-card-credentials ps-0">
                            {durationtext}
                            <li>Fee: ${price}</li>
                        </ul>
                        <Link to={`/service-details/${id}`}>
                            <button className="theme-button mt-3">View Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceCard;