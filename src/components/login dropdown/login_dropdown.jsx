import { React, useState } from "react";
import { FormControl, Form, Button, Dropdown, DropdownButton, Container } from "react-bootstrap";
import "./login_dropdown.css";

function LoginDropdown() {
    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState("");

    function handleLogin() {
        setAuth(!auth);
    }

    if (auth === false) {
        return (
            <DropdownButton title="Log In">
                <Form className="d-flex">
                    <FormControl
                        type="text"
                        placeholder="Username"
                        aria-label="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <FormControl
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                    />
                    <Button type="submit" onClick={handleLogin}>Login</Button>
                </Form>
            </DropdownButton>   
        )
    }
    else {
        return (
            <div>
                Welcome, {username}!
                <Button onClick={handleLogin}>Log Out</Button>
            </div>
        )
    }
}

export default LoginDropdown;