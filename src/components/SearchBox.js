import { useState } from "react";

function SearchBox(props) {

  return (
    <div className="SearchBox">
      <form>
        <label>
          Search by Title:
          <input
            type="search"
            name="searchQuery"
            placeholder="search by title"
            value={props.searchQuery}
            onChange={(e) => { props.setSearchQuery(e.target.value) }}
          />
        </label>
      </form>
    </div>
  )
}

export default SearchBox;