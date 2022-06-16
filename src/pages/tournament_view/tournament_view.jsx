import Navbar from "../../common/navbar/navbar";
import InstrumentCarousel from "./instrument_carousel/instrument_carousel";
import UserStats from "./user_stats/user_stats";
import { Button } from "react-bootstrap";

function TournamentView() {
    const tournamentName = "Pondo Exchange #1";

    return (
        <div>
            <Navbar />
            <h1>{tournamentName}</h1>
            <Button href="./problems">View Problems</Button>
            <InstrumentCarousel />
            <UserStats />
        </div>
    );
}

export default TournamentView;