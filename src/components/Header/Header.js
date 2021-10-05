import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            
        <Navbar bg="dark" variant="dark">
        <ul>
            <Link to="/home">
                <li>Home</li>
            </Link>
             <Link to ="/about">
                <li>About</li>
            </Link>
             <Link to="/services">
                <li>Services</li>
            </Link>
             <Link to="/contact">
                <li>Contact Us</li>
            </Link>
        </ul>
        </Navbar>

        </div>
    );
};

export default Header;