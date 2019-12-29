import React, {Component} from 'react';
import NewShift from '../../components/NewShift';
import ShiftCard from '../../components/ShiftCard';
import Container from 'react-bootstrap/Container';
import Modal from '../../components/Modal'
import API from "../../utils/API";

export default class Shifts extends Component {
    state = {
      shifts: []
    }
  
    componentDidMount() {
      this.loadShifts();
    }
  
    loadShifts = () => {
      API.findAllValidShifts(sessionStorage.user)
        .then(res => {
            this.setState({ shifts: res.data })
            console.log(this.state.shifts);
          }
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
          <Container>
            <Modal />
            {/* <NewShift shiftLoader={this.loadShifts}/>
            {this.state.shifts.length ? (
              this.state.shifts.map(shift => (
                <ShiftCard 
                    shiftEnd={shift.shiftEnd} 
                    shiftStart={shift.shiftStart} 
                    earnings={shift.earnings}
                />
              ))
            ) : (
                <h3 className="text-center">Add a previous shift!</h3>
              )} */}
          </Container>
        )
      }
}