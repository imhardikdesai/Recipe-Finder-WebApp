import React, { useContext } from "react";
import RecipeContext from "../../context/RecipeContext";
import "./SearchBar.css";

const Searchbar = () => {
  const { setQuery, query, handleFetchRecipe } = useContext(RecipeContext);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          name="search"
          id="searchBar"
          placeholder="&#xF002; Search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleFetchRecipe}
          value={query}
        />
      </div>
    </>
  );
};

export default Searchbar;
