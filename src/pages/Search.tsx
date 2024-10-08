import React from "react";
import MovieSearch from "../components/MovieSearch";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "Tudo";

  return (
    <div className="movie-search-page h-full bg-neutral-600">
      <Header />
      <MovieSearch query={query} category={category} />
      <Footer />
    </div>
  );
};

export default Search;
