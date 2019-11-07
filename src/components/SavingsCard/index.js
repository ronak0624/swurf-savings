import React, { Component, state } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './style.css'

function SavingsCard (props) {

    const progress = Math.round(props.priceRemaining / props.price * 100);

    const progressInstance = <ProgressBar now={progress} label={`${progress}%`} />;
  
      return (
        <Card className="mb-5 mx-auto">
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {progressInstance}
            </Card.Text>
            <Card.Text className="text-center">
                ${props.priceRemaining} | ${props.price}
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
