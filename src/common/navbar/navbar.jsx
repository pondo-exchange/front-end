import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import "./navbar.css";

function Navbar(props) {
    return (
        // For some reason if I don't do variant="dark" the dropdown doesn't want to cooperate
        <BootstrapNavbar className="color-nav" variant="dark" style={{ maxHeight: '60px' }}>
            <Container fluid>
                <BootstrapNavbar.Brand className="navbar-text" href="/">Pondo Exchange</BootstrapNavbar.Brand>
                <Nav className="me-auto my-2 my-lg-0">
                      <Nav.Link className="navbar-text" href="/tournaments-list">Tournaments</Nav.Link>
                      <Nav.Link className="navbar-text" href="#forums">Forums</Nav.Link>
                </Nav>

                {props.showLoginRegister ? 
                    <Nav>
                        <Nav.Link className="navbar-text" href="/login">Login</Nav.Link>
                        <Nav.Link className="navbar-text" href="/register">Register</Nav.Link>
                    </Nav>
                    : null
                }
                
            </Container>
        </BootstrapNavbar>
    )
}

Navbar.defaultProps = {
    "showLoginRegister": true
}

export default Navbar;

// className="justify-content-end flex-grow-1 pe-3" 