import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, FormControl, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import axios from "../../../api/axios";

function OrderOptions() {

    const location = useLocation().pathname.split("/").slice(1, 4).join("/");
    console.log(location);

    function handleSubmit() {
        // TODO: Call the API endpoint IDK James said it was not up yet so lets TODO this
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormControl placeholder="Quantity" />
                <ButtonGroup>
                    <ToggleButton>Buy</ToggleButton>
                    <ToggleButton>Sell</ToggleButton>
                </ButtonGroup>
                <Button type="submit">Confirm</Button>
            </Form>
        </div>
    );
}

export default OrderOptions;