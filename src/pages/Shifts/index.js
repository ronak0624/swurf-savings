import React from 'react';
import NewShift from '../../components/NewShift';
import ShiftCard from '../../components/ShiftCard';
import Container from 'react-bootstrap/Container'

var mockData = [
    { shiftStart: 4, earnings: 136, shiftEnd: 3 },
    { shiftStart: 24, earnings: 49, shiftEnd: 20 },
    { shiftStart: 3, earnings: 116, shiftEnd: 7 },
    { shiftStart: 12, earnings: 27, shiftEnd: 15 },
    { shiftStart: 21, earnings: 88, shiftEnd: 21 },
    { shiftStart: 23, earnings: 92, shiftEnd: 5 },
    { shiftStart: 20, earnings: 118, shiftEnd: 17 },
    { shiftStart: 19, earnings: 81, shiftEnd: 9 },
    { shiftStart: 12, earnings: 82, shiftEnd: 19 },
    { shiftStart: 23, earnings: 82, shiftEnd: 7 },
    { shiftStart: 16, earnings: 85, shiftEnd: 11 },
    { shiftStart: 5, earnings: 52, shiftEnd: 9 },
    { shiftStart: 8, earnings: 73, shiftEnd: 24 },
    { shiftStart: 15, earnings: 56, shiftEnd: 19 },
    { shiftStart: 17, earnings: 120, shiftEnd: 20 },
    { shiftStart: 3, earnings: 128, shiftEnd: 5 },
    { shiftStart: 19, earnings: 71, shiftEnd: 17 },
    { shiftStart: 18, earnings: 144, shiftEnd: 1 },
    { shiftStart: 1, earnings: 87, shiftEnd: 17 },
    { shiftStart: 24, earnings: 42, shiftEnd: 1 },
    { shiftStart: 22, earnings: 83, shiftEnd: 24 },
    { shiftStart: 3, earnings: 109, shiftEnd: 14 },
    { shiftStart: 4, earnings: 77, shiftEnd: 10 },
    { shiftStart: 10, earnings: 23, shiftEnd: 21 },
    { shiftStart: 10, earnings: 64, shiftEnd: 8 },
    { shiftStart: 12, earnings: 116, shiftEnd: 20 },
    { shiftStart: 3, earnings: 135, shiftEnd: 15 },
    { shiftStart: 22, earnings: 126, shiftEnd: 10 },
    { shiftStart: 6, earnings: 116, shiftEnd: 15 },
    { shiftStart: 14, earnings: 147, shiftEnd: 10 },
    { shiftStart: 14, earnings: 119, shiftEnd: 1 },
    { shiftStart: 22, earnings: 121, shiftEnd: 2 },
    { shiftStart: 19, earnings: 52, shiftEnd: 8 },
    { shiftStart: 2, earnings: 108, shiftEnd: 15 },
    { shiftStart: 5, earnings: 67, shiftEnd: 14 },
    { shiftStart: 16, earnings: 95, shiftEnd: 16 },
    { shiftStart: 9, earnings: 34, shiftEnd: 15 },
    { shiftStart: 15, earnings: 21, shiftEnd: 19 },
    { shiftStart: 16, earnings: 88, shiftEnd: 7 },
    { shiftStart: 19, earnings: 131, shiftEnd: 23 }
  ]

function ShiftList(){
    return (
        mockData.map((shift) => (
            <ShiftCard shiftEnd={shift.shiftEnd} shiftStart={shift.shiftStart} earnings={shift.earnings}/>
        ))
    )
}

export default function Shifts() {
    return(
        <Container>
            <NewShift />
            <ShiftList />
        </Container>
    )
}
