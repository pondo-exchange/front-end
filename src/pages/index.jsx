import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Profile from "./profile/profile";
import InstrumentView from "./instrument_view/instrument_view";
import TournamentView from "./tournament_view/tournament_view";
import TournamentsList from "./tournaments_list/tournaments_list";
import Register from "./register/register";
import Problems from "./problems/problems";

function Webpages() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/instrument-view" element={<InstrumentView />} />
                <Route path="/tournament-view" element={<TournamentView />} />
                <Route path="/tournaments-list" element={<TournamentsList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/problems" element={<Problems />} />
            </Routes>
        </Router>
    );
}

export default Webpages;