import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SiteNavbar.css';
import defaultUserPic from '../../../images/user-default.jpg';

const SiteNavbar = () => {
    const { user, logOut } = useAuth();

    let userIdentity = "";

    if(user) {
        if(user.displayName) {
            userIdentity = user.displayName;
        } else if(user.email) {
            userIdentity = user.displayName;
        } else {
            userIdentity = "Unknown";
        }
    }

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
                                {
                                    !user && <Nav.Link as={Link} to="/login">Log in</Nav.Link>
                                }

                                {
                                    !user && <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                }

                                {
                                    user && <Nav.Link className="user-info d-flex align-items-center">
                                        <img src={user?.photoURL ? user?.photoURL : defaultUserPic} className="navbar-user-pic mx-2" alt="U" />
                                        <span>{userIdentity}</span>
                                    </Nav.Link>                                    
                                }

                                {
                                    user && 
                                    <Nav.Link>
                                        <button 
                                        onClick={logOut}
                                        className="btn btn-link nav-custom-link"
                                        >Log out</button>
                                    </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default SiteNavbar;