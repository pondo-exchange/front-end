import Navbar from "../../common/navbar/navbar";
import InstrumentTable from "./instrument table/instrument_table";
import { Table } from "react-bootstrap";

function InstrumentView() {
    return (
        <div>
            <Navbar />
            <InstrumentTable />
        </div>
    )
}

export default InstrumentView;