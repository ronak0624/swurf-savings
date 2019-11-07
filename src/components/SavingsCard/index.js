import React, { Component, state } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.css'

function SavingsCard(props) {

  const progress = Math.round(props.priceRemaining / props.price * 100);

  const progressInstance = <ProgressBar now={progress} label={`${progress}%`} />;

  return (
    <Card className="mb-5 mx-auto">
      <Card.Body>
        <Card.Text className="text-center">I need this</Card.Text>
        <Card.Title className="mb-4">{props.title}</Card.Title>
        <Card.Text>
          {progressInstance}
        </Card.Text>
        <Card.Text className="text-center">
          <Row className="justify-content-md-center savings-info">
            <Col xs lg="2">
              ${props.priceRemaining}
            </Col>
            <Col className="text-muted" md="auto">|</Col>
            <Col xs lg="2">
            ${props.price}
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SavingsCard;


//// MOCK DATA SYNTHESIZER
// var savings = [];

// for(var i = 0; i < 40; i++){
//   let d = new Date();
//   savings[i] = {
//           "title": "New Skis",
//           "price": Math.ceil(Math.random() * 1000),
//           "priceRemaining": Math.ceil(Math.random() * 400),
//           "priority": Math.ceil(Math.random() * 3),
//           "timeCreated": d.getHours(),
//           "achieved": false,
//   }
// }


// for(var i = 0; i < 40; i++){
//   let start = savings[i].price
//   let end = savings[i].priceRemaining

//   if(start < end){
//     console.log('swapping');
//     let swap = savings[i].price;
//     savings[i].price = savings[i].priceRemaining;
//     savings[i].priceRemaining = swap;
//   }
// }
