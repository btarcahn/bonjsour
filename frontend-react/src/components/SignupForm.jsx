import React from 'react'
import Form from "react-bootstrap/Form";
import {FormGroup} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class SignupForm extends React.Component {

    render() {
        return(
            <Container fluid="false">
                <Form>
                    <FormGroup controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="enter a valid email"/>
                        <Form.Text className="textMuted">
                            Your email will be used as a username.
                        </Form.Text>
                    </FormGroup>

                    <FormGroup controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="enter your desire password" />
                        <Form.Text className="textMuted">
                            Password should be at least 8 characters.
                        </Form.Text>
                    </FormGroup>

                    <FormGroup controlId="formRepeatPassword">
                        <Form.Label>Confirm your password</Form.Label>
                        <Form.Control type="password" placeholder="confirm your password" />
                    </FormGroup>
                </Form>

                <ButtonGroup controlId="submitButton">
                    <Button>Register</Button>
                </ButtonGroup>

            </Container>
        );
    }
}

export default SignupForm