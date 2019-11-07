import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

function SavingsCard (props) {

    const progressPercent = 50;
  //   const progressPercent = props.calValue;
    const progressInstance = <ProgressBar now={progressPercent} label={`${progressPercent}%`} />;
  
      return (
  
          <Card>
          <Card.Body>
            <Card.Title>{props.title}title</Card.Title>
            <Card.Text>
              <div >
                  {progressInstance}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    
export default SavingsCard;

