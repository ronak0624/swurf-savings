import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Dropdown from '../../components/Dropdown';
import ShiftCard from '../../components/ShiftCard';
import Container from 'react-bootstrap/Container';
import API from "../../utils/API";

var shift_start_suffix = [
  {
    id: 0,
    title: 'AM',
    key: 'shift_start_suffix_list'
  },
  {
    id: 1,
    title: 'PM',
    key: 'shift_start_suffix_list'
  },
]
var shift_end_suffix = [
  {
    id: 0,
    title: 'AM',
    key: 'shift_end_suffix_list'
  },
  {
    id: 1,
    title: 'PM',
    key: 'shift_end_suffix_list'
  },
]
var shift_start_list = [
  {
    id: 0,
    title: '1:00',
    key: 'shift_start_list'
  },
  {
    id: 1,
    title: '2:00',
    key: 'shift_start_list'
  },
  {
    id: 2,
    title: '3:00',
    key: 'shift_start_list'
  },
  {
    id: 3,
    title: '4:00',
    key: 'shift_start_list'
  },
  {
    id: 4,
    title: '5:00',
    key: 'shift_start_list'
  },
  {
    id: 5,
    title: '6:00',
    key: 'shift_start_list'
  },
  {
    id: 6,
    title: '7:00',
    key: 'shift_start_list'
  },
  {
    id: 7,
    title: '8:00',
    key: 'shift_start_list'
  },
  {
    id: 8,
    title: '9:00',
    key: 'shift_start_list'
  },
  {
    id: 9,
    title: '10:00',
    key: 'shift_start_list'
  },
  {
    id: 10,
    title: '11:00',
    key: 'shift_start_list'
  },
  {
    id: 11,
    title: '12:00',
    key: 'shift_start_list'
  },
]
var shift_end_list =[
  {
    id: 1,
    title: '1:00',
    key: 'shift_end_list'
  },
  {
    id: 1,
    title: '2:00',
    key: 'shift_end_list'
  },
  {
    id: 2,
    title: '3:00',
    key: 'shift_end_list'
  },
  {
    id: 3,
    title: '4:00',
    key: 'shift_end_list'
  },
  {
    id: 4,
    title: '5:00',
    key: 'shift_end_list'
  },
  {
    id: 5,
    title: '6:00',
    key: 'shift_end_list'
  },
  {
    id: 6,
    title: '7:00',
    key: 'shift_end_list'
  },
  {
    id: 7,
    title: '8:00',
    key: 'shift_end_list'
  },
  {
    id: 8,
    title: '9:00',
    key: 'shift_end_list'
  },
  {
    id: 9,
    title: '10:00',
    key: 'shift_end_list'
  },
  {
    id: 10,
    title: '11:00',
    key: 'shift_end_list'
  },
  {
    id: 11,
    title: '12:00',
    key: 'shift_end_list'
  },
]

export default class Shifts extends Component {
  state = {
    earnings: 0,
    shift_start: "",
    shift_end: "",
    shift_start_suffix: "",
    shift_end_suffix: "",
    shifts: [],
    showModal: false,
    shift_start_suffix_list: [
      {
        id: 0,
        title: 'AM',
        key: 'shift_start_suffix_list'
      },
      {
        id: 1,
        title: 'PM',
        key: 'shift_start_suffix_list'
      },
    ],
    shift_end_suffix_list: [
      {
        id: 0,
        title: 'AM',
        key: 'shift_end_suffix_list'
      },
      {
        id: 1,
        title: 'PM',
        key: 'shift_end_suffix_list'
      },
    ],
    shift_start_list: [
      {
        id: 0,
        title: '1:00',
        key: 'shift_start_list'
      },
      {
        id: 1,
        title: '2:00',
        key: 'shift_start_list'
      },
      {
        id: 2,
        title: '3:00',
        key: 'shift_start_list'
      },
      {
        id: 3,
        title: '4:00',
        key: 'shift_start_list'
      },
      {
        id: 4,
        title: '5:00',
        key: 'shift_start_list'
      },
      {
        id: 5,
        title: '6:00',
        key: 'shift_start_list'
      },
      {
        id: 6,
        title: '7:00',
        key: 'shift_start_list'
      },
      {
        id: 7,
        title: '8:00',
        key: 'shift_start_list'
      },
      {
        id: 8,
        title: '9:00',
        key: 'shift_start_list'
      },
      {
        id: 9,
        title: '10:00',
        key: 'shift_start_list'
      },
      {
        id: 10,
        title: '11:00',
        key: 'shift_start_list'
      },
      {
        id: 11,
        title: '12:00',
        key: 'shift_start_list'
      },
    ],
    shift_end_list: [
      {
        id: 1,
        title: '1:00',
        key: 'shift_end_list'
      },
      {
        id: 1,
        title: '2:00',
        key: 'shift_end_list'
      },
      {
        id: 2,
        title: '3:00',
        key: 'shift_end_list'
      },
      {
        id: 3,
        title: '4:00',
        key: 'shift_end_list'
      },
      {
        id: 4,
        title: '5:00',
        key: 'shift_end_list'
      },
      {
        id: 5,
        title: '6:00',
        key: 'shift_end_list'
      },
      {
        id: 6,
        title: '7:00',
        key: 'shift_end_list'
      },
      {
        id: 7,
        title: '8:00',
        key: 'shift_end_list'
      },
      {
        id: 8,
        title: '9:00',
        key: 'shift_end_list'
      },
      {
        id: 9,
        title: '10:00',
        key: 'shift_end_list'
      },
      {
        id: 10,
        title: '11:00',
        key: 'shift_end_list'
      },
      {
        id: 11,
        title: '12:00',
        key: 'shift_end_list'
      },
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
    this.loadShifts();
  }

  loadShifts = () => {
    API.findAllShifts()
      .then(res => {
        this.setState({ shifts: res.data })
        console.log(this.state.shifts);
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
    let {shift_start, shift_end, earnings} = this.state
    shift_start+=this.state.shift_start_suffix
    shift_end+= this.state.shift_end_suffix
    earnings = Number.parseInt(earnings)
    req.body = {shift_start, shift_end, earnings}
    console.log(req.body)
    API.postNewShift(req.body)
      .then(res => {
        if (res.status === 200) {
          this.handleCloseModal()
          this.loadShifts()
        }
      })
  }

  resetThenSet = (id, key) => {
    // Because the dropdown does not function without a key name that is identical to the name of the array (list for dropdown) it comes from,
    // I have to remove the "_list" from the end of the object key. 
    let selectedTitle = this.state[key][id].title
    let stateKey = key.substring(0, key.length - 5)
    this.setState({
      [stateKey]: selectedTitle,
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
                  <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
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
                  <input name="earnings" onChange={this.handleChange} value={this.state.earnings} className="form-control form-control-lg" id="earnings" type="number" placeholder="55" />
                </div>
                <label className="mt-3" htmlFor="shift_start">Shift starting time</label>
                <div className="row pl-3">
                  <Dropdown title="3:00"
                    list={this.state.shift_start_list}
                    resetThenSet={this.resetThenSet}
                    id="shift_start" />
                  <Dropdown className="ml-3"
                    title="PM"
                    list={this.state.shift_start_suffix_list}
                    resetThenSet={this.resetThenSet}
                    id="shift_start_suffix" />
                </div>
                <label className="mt-3" htmlFor="shift_end">Shift ending time</label>
                <div className="row pl-3">
                  <Dropdown title="6:00"
                    list={this.state.shift_end_list}
                    resetThenSet={this.resetThenSet}
                    id="shift_end" />
                  <Dropdown className="ml-3"
                    title="PM"
                    list={this.state.shift_end_suffix_list}
                    resetThenSet={this.resetThenSet}
                    id="shift_end_suffix" />
                </div>
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
                shiftEnd={shift.shift_end}
                shiftStart={shift.shift_start}
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