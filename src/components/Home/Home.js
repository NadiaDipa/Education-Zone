import React, { useEffect, useState } from 'react';
import './Home.css';

import Courses from '../Courses/Courses';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./info.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);
    return (
        <div className="py-4">
           <div className="banner">
                <img className="img-fluid h-40" src="https://www.bestpraceduc.org/wp-content/uploads/2017/12/logo-1.jpg" alt="" />
           </div>
            
            <br />
            <div>
                <h1 className ="headline bg-dark pb-3 pt-3 mb-3 text-center">Our Featured Course</h1>
                <div className="card-content text-center">
                
                <div className="course-container">
                
            </div>
            <div className="searchbox mt-4 mb-4">
                <input type="text" className="p-2" placeholder="Enter Your Course" />
                <button className="btn btn-danger p-2">Search</button>
            </div>
            <div className="courses">
                <Row xs={1} md={3} className="g-4">
                    {
                       courses.map(course => <Col> <Courses course ={course}></Courses> </Col>)
                    }
                </Row>
            </div>
            </div>
            </div>
        </div>
        
    );
};

export default Home;