import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";

import Home from "./home/home";
import Profile from "./profile/profile";
import InstrumentView from "./instrument view/instrument_view";
import TournamentView from "./tournament view/tournament_view";
import TournamentsList from "./tournaments list/tournaments_list";

function Webpages() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/instrument-view" element={<InstrumentView />} />
                <Route path="/tournament-view" element={<TournamentView />} />
                <Route path="/tournaments-list" element={<TournamentsList />} />
            </Routes>
        </Router>
    );
}

export default Webpages;