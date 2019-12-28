/**
 * File: TopNavBar.jsx
 * Code for the top navigation bar element.
 * @author Bach Tran
 * @since 1.0
 * @licence GPL-3.0
 */
import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

/**
 * The top navigation bar.
 * The code was taken from react-bootstrap project.
 * @author Bach Tran
 * @since 1.0
 * @licence GPL-3.0
 */
class TopNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="/home">bonjsour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </div>
        )
    }
}

export default TopNavbar;