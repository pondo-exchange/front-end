import { React, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "../../api/axios";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const REGISTER_URL = "/register";

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify( { user: { username, password }} ),
                { headers: { "Content-Type": "application/json" } }
            );
            setSuccess(true);
            setUsername("");
            setPassword("");
        }
        catch (error) {
            if (!error?.response) {
                setErrorMessage("No server response.");
            }
            else {
                setErrorMessage("Registration failed.");
            }
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormControl
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <FormControl
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}


export default Register;