import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

export default function SignupForm() {

    const [validated, setValidated] = useState(false);

    const [state, setState] = useState({
        email: "",
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
        <Form className="mt-5 mx-auto w-75 signup-form" noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="display-5 mt-5 text-center"><b>Sign Up</b></h2>
            <Form.Group md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        onChange={handleChange}
                        name="username"
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" onChange={handleChange} value={state.email} type="text" placeholder="ronak@uw.edu" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={handleChange} value={state.password} type="password" placeholder="password" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
                <Button className="mx-auto submit-btn" type="primary" onClick={handleSubmit}>Submit</Button>
            </Row>
        </Form>
    );
}