import React, { Component, state } from 'react'
import Card from 'react-bootstrap/Card'
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
        <div className="edit-icons"></div>
        <Card.Text className="text-center text-muted display-5 savings-title">
          <b>Priority </b>
          {props.priority}
        </Card.Text>
        <Card.Title className="mb-4">{props.title}</Card.Title>
        <Card.Text>
          {progressInstance}
        </Card.Text>
        <Card.Text className="text-center">
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Row>
                <Col className="savings-title">Saved</Col>
              </Row>
              <Row>
                <Col className="price-title">${props.priceRemaining}</Col>
              </Row>
            </Col>
            <Col xs lg="2">
              <Row>
                <Col className="savings-title">Left</Col>
              </Row>
              <Row>
                <Col className="price-title">${props.price}</Col>
              </Row>
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
