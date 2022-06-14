import { Form, FormControl, Button } from "react-bootstrap";

function Register() {
    return (
        <div>
            <Form>
                <FormControl
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                />
                <FormControl
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                />
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}


export default Register;