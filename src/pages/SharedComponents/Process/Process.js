import React from 'react';
import point1 from '../../../images/point-1.jpg';
import point2 from '../../../images/point-2.jpg';
import point3 from '../../../images/point-3.jpg';
import point4 from '../../../images/point-4.jpg';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section">
            <div className="container my-5">
                <h2 className="fw-700 my-4 text-center">WHAT TO EXPECT - THERAPY PROCESS</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
                    <div className="col">
                        <img src={point1} alt="point one" />
                        <h3 className="h4 mb-3">Free Initial Phone Consultation</h3>
                        <p>TeleTherapy now available, please call for appointment</p>
                    </div>
                    <div className="col">
                        <img src={point2} alt="point two" />
                        <h3 className="h4 mb-3">Comprehensive Diagnostic Evaluations</h3>
                        <p>comprehensive assessments of each child’s sensory-motor and speech abilities</p>
                    </div>
                    <div className="col">
                        <img src={point3} alt="point three" />
                        <h3 className="h4 mb-3">Assessment Report and Recommendations</h3>
                        <p>They can help your child master daily tasks such as dressing, eating and playing</p>
                    </div>
                    <div className="col">
                        <img src={point4} alt="point four" />
                        <h3 className="h4 mb-3">Bespoke Therapy Sessions</h3>
                        <p>evaluation and treatment of auditory processing deficits</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;