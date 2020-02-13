import React from "react";
import "../css/search.css";

const Search = ({ coord }) => {
  return (
    <div className="wrap">
      <div style={{ marginBottom: "8px", fontWeight: "600" }}>
        Please input the location/stop you want to go to:
      </div>
      <div className="search">
        <form onSubmit={coord.onSearch} style={{ width: "100%" }}>
          <input
            className="searchTerm"
            type={coord.type}
            value={coord.value}
            onChange={coord.onInput}
          />
          <button className="searchButton" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
