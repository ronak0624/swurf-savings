import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import axios from 'axios';

const URL = "https://swurfapi.herokuapp.com";

export default function LoginForm() {

    const [validated, setValidated] = useState(false);

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = event => {
        const form = event.currentTarget;
        const isValid = form.checkValidity();

        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if(validated){
            event.preventDefault();
            console.log(state);
            axios.post(URL + '/login', {
                username: state.username,
                password: state.password
              })
              .then(function (response) {
                  if(response.data.success){
                    sessionStorage.setItem("user", state.username);
                  }
                console.log(response)
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    };

    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <Form className="mt-5 mx-auto w-75 login-form" noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="display-5 mt-5 text-center"><b>Login</b></h2>
            <Form.Group md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputAt">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        onChange={handleChange}
                        value={state.username}
                        name="username"
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter your username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={handleChange} value={state.password} type="password" placeholder="password" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
                <Button className="mx-auto submit-btn" type="button" onClick={handleSubmit}>Submit</Button>
            </Row>
        </Form>
    );
}