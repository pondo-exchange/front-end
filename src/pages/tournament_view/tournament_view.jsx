import Navbar from "../../common/navbar/navbar";
import InstrumentCarousel from "./instrument_carousel/instrument_carousel";
import UserStats from "./user_stats/user_stats";

function TournamentView() {
    return (
        <div>
            <Navbar />
            <InstrumentCarousel />
            <UserStats />
        </div>
    );
}

export default TournamentView;