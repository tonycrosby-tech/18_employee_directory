import React from "react";
import SearchBox from "./SearchBox";
import "../styles/Nav.css";

function Nav({ handleSearch }) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-collapse row" id="nav-bar">
        <SearchBox handleSearch={handleSearch} />
      </div>
    </nav>
  );
}

export default Nav;
