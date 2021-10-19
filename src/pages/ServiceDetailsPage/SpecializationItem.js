import React from 'react';
import { Col } from 'react-bootstrap';

const SpecializationItem = (props) => {
    return (
        <Col>
            <li>{props.item}</li>
        </Col>
    );
};

export default SpecializationItem;