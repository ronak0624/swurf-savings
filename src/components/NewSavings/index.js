import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import API from '../../utils/API';

export default function NewSavings(props) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [state, setState] = useState({
    title: "",
    price: 0,
    price_remaining: 0,
    priority: ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    const { name, value } = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(state)
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (validated === true) {
      API.postNewSavingGoal(sessionStorage.user, state)
        .then(res => console.log(res))
    }
    console.log(state);
  };

  return (
    <div>
      <div className="row mb-4">
        <button onClick={handleShow} type="button" className="btn btn-outline-primary mx-auto w-50">+</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="newForm.goal">
              <Form.Label>Goal</Form.Label>
              <Form.Control name="title" onChange={handleChange} value={state.title} type="email" placeholder="New Skis" />
            </Form.Group>
            <Form.Group controlId="newForm.priority">
              <Form.Label>Importance</Form.Label>
              <Form.Control as="select" name="priority" onChange={handleChange} value={state.priority}>
                <option>1 (I need this as fast as possible)</option>
                <option>2 (I really want this)</option>
                <option>3 (I want this but don't need it right away)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control onChange={handleChange} 
                  value={state.price} 
                  name="price" 
                  type="number" 
                  placeholder="$400" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
            onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}