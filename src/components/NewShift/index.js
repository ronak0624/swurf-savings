import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './style.css'
import { validate } from '@babel/types';

export default function NewShift(props) {
  const component = new React.Component(props);

  component.state = {
    earnings: "",
    shiftStart: "",
    shiftEnd: ""
  };

  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChange(event) {
    component.setState({[event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(validated === true){
      handleClose();
    }
  };

  return (
    <div>
      <div className="row mb-4">
        <button onClick={handleShow} type="button" className="add-button mx-auto"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg></button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>New Shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="validationCustom03">
              <Form.Label>Earnings ($)</Form.Label>
              <Form.Control onChange={handleChange} value={component.state.earnings} type="text" placeholder="$55.45" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid earnings number
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom04">
              <Form.Label>Shift Start</Form.Label>
              <Form.Control onChange={handleChange} value={component.state.shiftStart} type="text" placeholder="4:00" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid time.
          </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom05">
              <Form.Label>Shirt End</Form.Label>
              <Form.Control onChange={handleChange} value={component.state.shiftEnd} type="text" placeholder="8:00" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid time.
          </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}