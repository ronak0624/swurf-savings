import React from 'react';
import Card from 'react-bootstrap/Card'

export default function ShiftCard(props) {
    return (
        <Card className={props.className}>
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Uber</Card.Title>
                <Card.Text>
                    {props.shiftEnd - props.shiftStart} hours
                    ${props.earnings} earned
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
