import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, Button } from "react-bootstrap";

function InstrumentCarousel() {

    const instruments = [
        {
            "name": "Instrument 1",
            "description": "AAPL Option",
            "link": "./instrument-view"
        },
        {
            "name": "Instrument 2",
            "description": "GOOGL Option",
            "link": "./instrument-view"
        }
    ]

    return (
        <Carousel navButtonsAlwaysVisible={true}>
            {instruments.map((instrument, i) => <Instrument key={i} instrument={instrument} /> )}
        </Carousel>
    )
}

function Instrument(props) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.instrument.name}</Card.Title>
                    <Card.Text>{props.instrument.description}</Card.Text>
                    <Button variant="primary" href={props.instrument.link}>View Instrument</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default InstrumentCarousel;