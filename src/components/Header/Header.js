import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>

             <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </Nav>
                </Container>
            </Navbar>
            
       

        </div>
    );
};

export default Header;