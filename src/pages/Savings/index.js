import React, { Component } from 'react';
import NewSavings from '../../components/NewSavings'
import ReactModal from 'react-modal'
import SavingsCard from '../../components/SavingsCard'
import Container from 'react-bootstrap/Container'
import API from '../../utils/API';
import './style.css'

export default class Savings extends Component {
  state = {
    savings: [],
    showModal: false
  }

  componentDidMount() {
    this.loadSavings();
  }

  loadSavings = () => {
    API.findAllSavingGoals(sessionStorage.user)
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

  render() {
    return (
      <Container>
        <button className="btn btn-block btn-lg btn-primary" onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
           shouldCloseOnOverlayClick={true}
        >
          {/* <div class="modal-dialog modal-dialog-centered" role="document"> */}
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="fs-xs" id="modalLabel">New Savings Goal</h2>
            <button onClick={this.handleCloseModal} class="btn btn-sm btn-circle btn-neutral align-self-start" type="button" aria-label="Close">
              <svg class="gi gi-close fs-sm" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <label for="recipient">Title</label>
              <input class="form-control form-control-lg mb-5" id="recipient" type="text" placeholder="Recipient"/>
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Type message..."></textarea>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-block btn-lg btn-primary" type="submit">Send message</button>
          </div>
        </div>
      {/* </div> */}
        </ReactModal>
        {this.state.savings.length ? (
          this.state.savings.map(saving => (
            <SavingsCard
              priority={saving.priority}
              title={saving.title}
              price={saving.price}
              priceRemaining={saving.price_remaining} />
          ))
        ) : (
            <h3 className="text-center">No goals yet!</h3>
          )}
      </Container>
    )
  }
}