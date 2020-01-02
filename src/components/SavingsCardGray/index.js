import React, { Component, state } from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import API from '../../utils/API'

import './style.css'

function SavingsCard(props) {

  const progress = Math.round(props.cost_remaining / props.cost * 100);

  const progressInstance = <ProgressBar now={progress} />;

  const toggleActive = (id) => {
    API.toggleShift(id)
  }

  return (
    <div class="card card-savings mb-5">
      <div class="card-body">
          {/* <div class="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div> */}
        {progressInstance}
        <div class="d-flex mb-4">
          <div class="mr-auto">
            <div class="d-flex align-items-center mb-3">
              <div onClick={toggleActive()} className="task-button">
                {props.active ? (
                <svg class="gi gi-radio-button-on-fill mr-3 fs-sm text-success" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
                </svg>) :
                (<svg class="gi gi-radio-button-on-fill mr-3 fs-sm text-success" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                </svg>)}
              </div>
              <h3 class="lead lh-lg">
                <p>{props.title}</p>
              </h3>
            </div>
            <p>{props.description}</p>
          </div>
        </div>
        <div class="d-flex">
          <div class="d-flex mr-auto">
            <svg class="gi gi-checkmark-square mr-2 fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z" />
              <path d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z" />
            </svg>
            <p>{props.cost_remaining + " / " + props.cost}</p>
          </div>
          <div class="d-flex">
            <svg class="gi gi-clock-outline mr-2 fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z" />
            </svg>
            <p>Due 16 days</p>
          </div>
        </div>
      </div>
    </div>
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
