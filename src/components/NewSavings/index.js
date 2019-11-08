import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewSavings(props) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [state, setState] = useState({
    goal: "",
    priority: "",
    price: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (validated === true) {
      handleClose();
    }
    console.log(state);
  };

  return (
    <div>
      <div className="row mb-4">
        <button
          onClick={handleShow}
          type="button"
          className="add-button mx-auto"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="plus"
            class="svg-inline--fa fa-plus fa-w-12"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
            ></path>
          </svg>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add new {props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Goal</Form.Label>
              <Form.Control
                name="goal"
                onChange={handleChange}
                value={state.goal}
                type="text"
                placeholder="New Skis"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a name for your goal.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Importance</Form.Label>
              <Form.Control
                name="priority"
                onChange={handleChange}
                value={state.priority}
                as="select"
              >
                <option>1 (I need this as fast as possible)</option>
                <option>2 (I really want this)</option>
                <option>3 (I want this but don't need it right away)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={state.price}
                name="price"
                type="number"
                placeholder="$0"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid price
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="submit-btn"
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
