/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const search = () => {
    onSearch(term);
  };
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter a song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
