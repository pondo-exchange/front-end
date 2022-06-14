import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import LoginDropdown from "../login dropdown/login_dropdown";
import "./navbar.css";

function Navbar() {
    return (
        <BootstrapNavbar className="color-nav">
            <Container>
                <BootstrapNavbar.Brand href="#home">Pondo Exchange</BootstrapNavbar.Brand>
                <Nav className="me-auto">
                      <Nav.Link href="/tournaments-list">Tournaments</Nav.Link>
                      <Nav.Link href="#forums">Forums</Nav.Link>
                </Nav>
                <LoginDropdown />
                </Container>
        </BootstrapNavbar>
    )
}

export default Navbar;