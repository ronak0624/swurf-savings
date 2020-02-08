import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

export default function ShiftCard(props) {
    function calculateHours(start, end){
        let parsedStart = parseInt(start.substring(0,2));
        let parsedEnd = parseInt(end.substring(0,2));
        let prefix = parsedEnd - parsedStart;

        if(parsedStart > parsedEnd){
            prefix = 12 - parsedStart + parsedEnd;
        }

        let suffix = Math.abs(parseInt(end.substring(3,5)) - parseInt(start.substring(3,5)));
        return prefix + " hours, " + suffix + " minutes"
    }
    const hours = calculateHours(props.shiftStart, props.shiftEnd);

    return (
        // <Card className="mb-5 card-shift mx-auto" bsClass="card-shift">
        //     <Card.Body>
        //         <Row>
        //             <Col>
        //                 <Card.Title>Earnings</Card.Title>
        //                 <Card.Text className="text-center">${props.earnings}</Card.Text>
        //             </Col>
        //             <Col>
        //                 <Card.Title>Shift</Card.Title>
        //                 <Card.Text className="text-center">{hours}</Card.Text>
        //             </Col>
        //         </Row>
                
                
        //     </Card.Body>
        // </Card>
        <div className="card w-50 mx-auto mb-5">
            <div className="card-body">
                <div className="card-text float-left">
                    <h5>Start</h5>
                    {props.shiftStart}
                </div>
                <div className="card-text float-right">
                    <h5>End</h5>
                    {props.shiftEnd}
                </div>
                <br /><br />
                <div className="card-text mt-3">
                    <h5>Earnings</h5>
                    <div className="card-text">${props.earnings}</div>
                </div>
            </div>
        </div>
    )
}
