import { React, useState } from "react";
import { Dropdown, DropdownButton, Container, Row, Col } from "react-bootstrap";

function UserStats() {
    const instruments = [
        {
            "name": "Instrument 1",
            "position": "300",
            "profit": "200",
            "recentTrades": ["BUY", "SELL"]
        },
        {
            "name": "Instrument 2",
            "position": "100",
            "profit": "200",
            "recentTrades": []
        }
    ]
    
    const [currInstrument, setCurrInstrument] = useState(instruments[0]);

    return (
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
                    <h2>Position</h2>
                    {props.currInstrument.position}
                </Col>
                <Col>
                    <h2>Profit</h2>
                    {props.currInstrument.profit}
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Recent Trades</h2>
                    {props.currInstrument.recentTrades.map(
                        (trade) => (<div>{trade}</div>)
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default UserStats;