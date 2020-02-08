import React, { Component, state } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import API from '../../utils/API'

import './style.css'

class SavingsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active : this.props.active,
      id : this.props.id
    }
  }
  
  progress = Math.round(this.props.cost_remaining / this.props.cost * 100);
  progressInstance = <ProgressBar now={this.progress} />;

  setState = (prevState) => {
    return {active: !prevState.active};
  }

  toggleActive = (id) => {
    API.toggleSavings(id).then(() =>{
      console.log(this.state.id, this.state.active)
      this.setState({
        active: true
      })
    }).then(() => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div className="card card-savings mb-5">
        <div className="card-body">
          {this.progressInstance}
          <div className="d-flex mb-4">
            <div className="mr-auto">
              <div className="d-flex align-items-center mb-3">
                <div onClick={() => this.toggleActive(this.state.id)} className="task-button">
                  {this.props.active ? (
                    <svg className="gi gi-radio-button-on-fill mr-3 fs-sm text-success" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z" />
                    </svg>) :
                    (<svg className="gi gi-radio-button-on-fill mr-3 fs-sm text-success" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                    </svg>)}
                </div>
                <h3 className="lead lh-lg">
                  <p>{this.props.title}</p>
                </h3>
              </div>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex mr-auto">
              <p>{"$" + this.props.cost_remaining + " / $" + this.props.cost}</p>
            </div>
            <div className="d-flex">
              <svg className="gi gi-clock-outline mr-2 fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" /><path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z" />
              </svg>
              <p>{this.props.priority}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SavingsCard;