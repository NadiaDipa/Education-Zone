import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import "./Contact.css"
const Contact = () => {
    return (
        <div>
            
            <div className="contact-img">
                 <img width = "500px"
                 src = "https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg?size=338&ext=jpg"
                 alt = ""/>
            </div>
            <div className="from">
                <Form className = "bg-dark pe-5 ps-5 pb-5 border border-5" >
                    <h1 className = "headline text-center bg-dark pb-3 pt-3 mb-3"> Contact With Us! </h1>
                    <Row Row className = "mb-3 text-white" >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Fullname</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="password" placeholder="To" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3 text-white" controlId="formGridAddress1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control placeholder="Enter Your Message Here!" />
                    </Form.Group>

                    <Row Row className = "mb-3 text-white" >
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>



                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button className="button btn-danger">SUBMIT</Button>
                </Form>
            </div>

          
        </div>
    );
};

export default Contact;