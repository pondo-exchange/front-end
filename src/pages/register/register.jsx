import { React, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        console.log(username, password);

        // API call here or something
        e.preventDefault();
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
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}


export default Register;