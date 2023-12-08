import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">GLIS Portal</div>
            <div className="right">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/insights">Insights</a>
                <a href="/optimal_location">Optimal Location</a>
            </div>
        </div>

    )
}

export default Navbar;
