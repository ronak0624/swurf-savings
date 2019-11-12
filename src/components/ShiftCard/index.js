import React from 'react';
import Card from 'react-bootstrap/Card'
import './style.css'
import Moment from 'moment';

export default function ShiftCard(props) {
    function calculateHours(start, end){
        let parsedStart = parseInt(start.substring(0,2));
        let parsedEnd = parseInt(end.substring(0,2));
        let prefix = parsedEnd - parsedStart;

        console.log(parsedStart, parsedEnd, "this is the prefix before")
        if(parsedStart > parsedEnd){
            prefix = 12 - parsedStart + parsedEnd;
        }
        console.log(prefix, "this is the prefix")
        let suffix = Math.abs(parseInt(end.substring(3,5)) - parseInt(start.substring(3,5)));
        return prefix + (Number.parseFloat(suffix/60).toPrecision(2))
    }
    const hours = calculateHours(props.shiftStart, props.shiftEnd);

    return (
        <Card className="mb-5 card-shift mx-auto" bsClass="card-shift">
            <Card.Body>
                <Card.Title>{hours} hours</Card.Title>
                <Card.Title>${props.earnings} earned</Card.Title>
            </Card.Body>
        </Card>
    )
}
