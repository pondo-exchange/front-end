import { React, useState } from "react";
import { FormControl, Form, Button, Dropdown, DropdownButton, Container, Row } from "react-bootstrap";
import "./login_dropdown.css";
import axios from "../../api/axios";

function LoginDropdown() {
    const [success, setSuccess] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const LOGIN_URL = "/login";

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify( { user: { username, password }} ),
                { headers: { "Content-Type": "application/json" } }
            );
            setSuccess(true);
            console.log(response);
        }
        catch (error) {
            if (!error?.response) {
                setErrorMessage("No server response.");
            }
            else {
                setErrorMessage("Invalid credentials.");
            }
        }
    }

    function handleLogout(e) {
        e.preventDefault();
        setSuccess(false);
    }

    if (success === false) {
        return (
            <DropdownButton title="Log In">
                <Form className="d-flex">
                    <Container>
                        <Row>
                            <FormControl
                                type="text"
                                placeholder="Username"
                                aria-label="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <FormControl
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Row>
                        <Row>
                            <Button type="submit" onClick={handleLogin}>Login</Button>
                        </Row>
                    </Container>
                </Form>
            </DropdownButton>   
        )
    }
    else {
        return (
            <div>
                Welcome, {username}!
                <Button onClick={handleLogout}>Log Out</Button>
            </div>
        )
    }
}

export default LoginDropdown;