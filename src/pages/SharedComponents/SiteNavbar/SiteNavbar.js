import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SiteNavbar.css';

const SiteNavbar = () => {
    return (
        <div className="nav-container d-flex align-items-center">
            <div className="flex-grow-1">
                <Navbar collapseOnSelect expand="lg" variant="light" className="bg-cream">
                    <Container>
                        <Navbar.Brand as={Link} to="/" className="text-uppercase fw-700 brand-name">
                            <span>Shout Kids</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default SiteNavbar;