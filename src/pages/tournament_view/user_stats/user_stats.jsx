import { React, useState } from "react";
import { Dropdown, DropdownButton, Container, Row, Col } from "react-bootstrap";

function UserStats() {
    const instruments = [
        {
            "name": "Instrument 1",
            "position": "",
            "profit": "",
            "recentTrades": ["BUY", "SELL"]
        },
        {
            "name": "Instrument 2",
            "position": "",
            "profit": "",
            "recentTrades": []
        }
    ]

    const [currInstrument, setCurrInstrument] = useState(instruments[0]);

    return ( // TODO: Handle onClick when dropdown item is clicked
        <div>
            <h2>Your Stats</h2>
            <DropdownButton id="dropdown-basic-button" title={currInstrument.name}>
                {instruments.map(
                    (instrument) => (<Dropdown.Item onClick={() => setCurrInstrument(instrument)}>{instrument.name}</Dropdown.Item>)
                )}
            </DropdownButton>
            <InstrumentInfo currInstrument={currInstrument} />
        </div>
    )
}

function InstrumentInfo(props) {
    return (
        <Container>
            <Row>
                <Col>
                    {props.currInstrument.position}
                </Col>
                <Col>
                    {props.currInstrument.profit}
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.currInstrument.recentTrades.map(
                        (trade) => (<Trade trade={trade} />)
                    )}
                </Col>
            </Row>
        </Container>
    )
}

function Trade(props) {
    return (
        <h2>{props.trade}</h2>
    )
}


export default UserStats;