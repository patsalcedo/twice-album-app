import React, { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const updateSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const getSearch = (evt) => {
    evt.preventDefault();
    props.search(search);
    setSearch("");
  };

  return (
    <form className="search-form">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for a TWICE album..."
        onChange={updateSearch}
        value={search}
      />
      <button className="search-button" type="submit" onClick={getSearch}>
        Search
      </button>
    </form>
  );
};
export default Search;
