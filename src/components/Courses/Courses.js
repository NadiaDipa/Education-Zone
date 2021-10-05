import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Courses = (props) => {
    const { courseName, image, price} = props.course;
  
    return (
         
    <Card className="h-100">
    <img className="card-image" width="100%" height="230px" src= {image} alt="" />
    <Card.Body>
      <Card.Title>{courseName}</Card.Title>
      <Card.Text>
        
      </Card.Text>
      <p>Price: {price}</p>
      <button className="button">Enroll Now</button>
    </Card.Body>
    
  </Card>
           
       
    );
};

export default Courses;