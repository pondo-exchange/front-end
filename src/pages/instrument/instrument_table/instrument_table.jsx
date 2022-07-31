import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";

function InstrumentTable() {
    const [tableData, setTableData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [renderTable, setRenderTable] = useState([]);
    const [renderUser, setRenderUser] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const location = useLocation().pathname.split("/").slice(1, 4).join("/");

    async function getData() {
        try {
            const api = location;
            const token = window.localStorage.getItem("bearer-token");
            const response = await axios.get(api, { headers: { "Authorization": `Bearer ${token}` } });
            const data = response.data;
            for (const array in data) {
                data[array].sort((a, b) => b["price"] - a["price"]);  // Sort descending
            }
            setTableData([data["bids"], data["asks"]]);
            setUserData([data["userBids"], data["userAsks"]]);
            renderData(tableData, setRenderTable);
            renderData(userData, setRenderUser);
        }
        catch (error) {
            if (!error?.response) {
                setErrorMessage("No server response.");
            }
            else {
                setErrorMessage("Failed to pull information.");
            }
            console.log(error);
        }
    }

    function renderData(data, setter) {
        const render = [];
        if (data.length === 0) {
            return;
        }
        for (const ask of data[1]) {  // Asks
            render.push((
                <tr>
                    <td></td>
                    <td>{ask["price"]}</td>
                    <td>{ask["price"]}</td>
                    <td>{ask["volume"]}</td>
                </tr>
            ));
        }
        for (const bid of data[0]) {  // Bids
            render.push((
                <tr>
                    <td>{bid["volume"]}</td>
                    <td>{bid["price"]}</td>
                    <td>{bid["price"]}</td>
                    <td></td>
                </tr>
            ));
        }
        setter(render);
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        renderData(tableData, setRenderTable);
        renderData(userData, setRenderUser);
    }, [tableData, userData]);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>BID</th>
                        <th />
                        <th>ASK</th>
                        <th />
                    </tr>
                    <tr>
                        <th>VOLUME</th>
                        <th>PRICE</th>
                        <th>PRICE</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable.map((row) => (row))}
                </tbody>
            </Table>
            <Table>
            <thead>
                <tr>
                    <th>BID</th>
                    <th />
                    <th>ASK</th>
                    <th />
                </tr>
                <tr>
                    <th>VOLUME</th>
                    <th>PRICE</th>
                    <th>PRICE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                {renderUser.map((row) => (row))}
            </tbody>
        </Table>
        </div>
    );
}

export default InstrumentTable;