import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";

function Home() {
    const [auth, setAuth] = useState(false);

    return (
        <div>
            <Navbar />
            Pretty home page
        </div>
    )
}

export default Home;