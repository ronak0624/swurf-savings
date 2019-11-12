import React from 'react';
import Card from 'react-bootstrap/Card'
import './style.css'
import Moment from 'moment';

export default function ShiftCard(props) {
    const shiftStart = Date.parse(props.shiftStart);
    console.log(shiftStart, "hours");
    return (
        <Card className="mb-5 card-shift mx-auto" bsClass="card-shift">
            <Card.Body>
                <Card.Title>{shiftStart} hours</Card.Title>
                <Card.Title>${props.earnings} earned</Card.Title>
            </Card.Body>
        </Card>
    )
}
