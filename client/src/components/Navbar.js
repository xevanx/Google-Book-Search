import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Google Books</Link>
            <ul className="navbar-nav ml-auto ml-sm-3 d-block">
                <li className="nav-item d-inline-block"><Link to="/search" className="nav-link active px-3">Search</Link></li>
                <li className="nav-item d-inline-block"><Link to="/saved" className="nav-link active px-3">Saved</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;