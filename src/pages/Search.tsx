import React, { useState } from "react";
import MovieSearch from "../components/MovieSearch";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="movie-search-page">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieSearch query={query} />
    </div>
  );
};

export default Search;
