import React, {Component} from 'react';
import ReactModal from 'react-modal';
import Dropdown from '../../components/Dropdown';
import ShiftCard from '../../components/ShiftCard';
import Container from 'react-bootstrap/Container';
import API from "../../utils/API";

export default class Shifts extends Component {
  state = {
    title: "",
    priority: "",
    cost: 0,
    shifts: [],
    dropdownTitle: "Priority",
    showModal: false,
    shift_start: [
      {
        id: 0,
        title: '12:00',
        key: 'shift_start'
      },
      {
        id: 1,
        title: '2 (I WANT this really badly)',
        key: 'shift_start'
      },
      {
        id: 2,
        title: '3 (I want this but can wait)',
        key: 'shift_start'
      }
    ]
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  componentDidMount() {
    this.loadSavings();
  }

  loadSavings = () => {
    API.findAllSavingGoals()
      .then(res => {
          this.setState({ savings: res.data })
          console.log(this.state.savings);
        }
      )
      .catch(err => console.log(err));
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleSubmit = (req, res) => {
    const {title, priority, cost} = this.state
    req.body = {title, priority, cost} 
    console.log(req.body)
    API.postNewSavingsGoal(req.body)
      .then(res => {
        if(res.status === 200){
          this.handleCloseModal()
          this.loadSavings()
        }
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp,
      priority: temp[id].title
    })
  }

    render() {
        return (
          <Container>
            <button className="btn btn-block btn-lg btn-primary w-50 mx-auto mt-5" onClick={this.handleOpenModal}>Add new shift</button>
            <ReactModal 
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
                shouldCloseOnOverlayClick={true}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="fs-xs" id="modalLabel">New Shift</h2>
                  <button onClick={this.handleCloseModal} className="btn btn-sm btn-circle btn-neutral align-self-start" type="button" aria-label="Close">
                    <svg className="gi gi-close fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                    </svg>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <label className="mt-3" htmlFor="cost">Earnings</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        $
                      </div>
                      <input name="cost" onChange={this.handleChange} value={this.state.cost} className="form-control form-control-lg" id="cost" type="number" placeholder="55"/>
                    </div>
                    <label className="mt-3" htmlFor="priorityDropdown">Shift starting time</label>
                    <Dropdown title="3:00"
                              list={this.state.shift_start}
                              resetThenSet={this.resetThenSet}
                              id="priorityDropdown"/>
                  </form>
                </div>
                <div className="modal-footer">
                  <button onClick={this.handleSubmit} className="btn btn-block btn-lg btn-primary" type="submit">Submit</button>
                </div>
              </div>
            </ReactModal>
            <div className="container mt-5">
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
                )}
            </div>
          </Container>
        )
      }
}