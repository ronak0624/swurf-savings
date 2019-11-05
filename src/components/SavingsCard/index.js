import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

// export default class SavingsCard extends Component {
//     render() {
//         return (
//             <div className="card mb-5">
//                 <div className="card-header">Emergency Fund</div>
//                 <div className="progress">
//                     <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
//                 </div>
//             </div>
//         )
//     }
// }

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