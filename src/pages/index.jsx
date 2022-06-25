import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Profile from "./profile/profile";
import InstrumentView from "./instrument/instrument";
import TournamentView from "./tournament_view/tournament_view";
import TournamentsList from "./tournaments_list/tournaments_list";
import Register from "./register/register";
import Problems from "./problems/problems";
import Login from "./login/login";

function Webpages() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/instrument/*" element={<InstrumentView />} />
                <Route path="/tournament-view" element={<TournamentView />} />
                <Route path="/tournaments-list" element={<TournamentsList />} />
                <Route path="/register" element={<Register />} />
                <Route path="/problems" element={<Problems />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default Webpages;