import { Dropdown, DropdownButton } from "react-bootstrap";

function UserStats() {

    const instruments = [
        {
            "name": "Instrument 1",
            "position": "",
            "profit": "",
            "recentTrades": []
        },
        {
            "name": "Instrument 2",
            "position": "",
            "profit": "",
            "recentTrades": []
        }
    ]

    return ( // TODO: Handle onClick when dropdown item is clicked
        <div>
            <h2>Your Stats</h2>
            <DropdownButton id="dropdown-basic-button" title="Instruments">
                {instruments.map(
                    (instrument) => (
                        <Dropdown.Item>{instrument.name}</Dropdown.Item>
                    )
                )}
            </DropdownButton>
        </div>
    )
}


export default UserStats;