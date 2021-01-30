import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearch }) {
  return (
    <div className="searchBox">
      <form className="inline-form">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="search"
          onChange={e => handleSearch(e)}
        />
      </form>
    </div>
  );
}

export default SearchBox;
