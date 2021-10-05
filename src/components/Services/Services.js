import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses)
    useEffect(() => {
        fetch('./infos.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div>
            <h1 className ="headline pb-3 pt-3 mb-3 bg-dark text-center">Our Top Services</h1>
            <div div className = "courses" >
                
                <Row xs={1} md={3} className="g-4">
                    {
                       courses.map(course => <Col> <Courses course ={course}></Courses> </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;