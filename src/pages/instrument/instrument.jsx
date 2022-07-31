import Navbar from "../../common/navbar/navbar";
import InstrumentTable from "./instrument_table/instrument_table";
import OrderOptions from "./order_options/order_options";

function Instrument() {
    return (
        <div>
            <Navbar />
            <InstrumentTable />
            <OrderOptions />
        </div>
    )
}
export default Instrument;