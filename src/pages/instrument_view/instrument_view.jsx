import Navbar from "../../common/navbar/navbar";
import InstrumentTable from "./instrument_table/instrument_table";
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