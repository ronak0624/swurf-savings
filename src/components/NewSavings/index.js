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
  }

  const handleSubmit = event => {
    console.log("Test 1");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("Test 2");
    setValidated(true);
    console.log(validated, "+",state.priority);
    if (validated === true && state.priority !== "Select") {
      console.log("Test 3")
        API.postNewSavingGoal(sessionStorage.user, state)
          .then(res => {
            console.log(res);
            window.location.reload();
          })
      }
  };

  return (
    <div>
      <div className="row mb-4">
        <button onClick={handleShow} type="button" className="add-button mx-auto"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg></button>
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
              <Form.Control as="select" name="priority" onChange={handleChange} value={state.priority} selected="1 (I need this as fast as possible)">
                <option>Select</option>
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
            onClick={handleSubmit}
            className="submit-btn">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}