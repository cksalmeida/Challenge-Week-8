import React from "react";
import MovieSearch from "../components/MovieSearch";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "Tudo";

  return (
    <div className="movie-search-page">
      <Header />
      <MovieSearch query={query} category={category} />
    </div>
  );
};

export default Search;
