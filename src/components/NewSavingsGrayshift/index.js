import React, { Component } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root');

export default class index extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const props = {};