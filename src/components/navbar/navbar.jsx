import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./navbar.css";

function Navbar() {
    return (
        <BootstrapNavbar className="color-nav">
            <BootstrapNavbar.Brand href="#home">Pondo Exchange</BootstrapNavbar.Brand>
            <Nav className="me-auto">
                  <Nav.Link href="/tournaments-list">Tournaments</Nav.Link>
                  <Nav.Link href="#forums">Forums</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email address"
                />
                <FormControl
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </BootstrapNavbar>
    )
}

export default Navbar;