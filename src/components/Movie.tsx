import { useEffect, useState } from "react";
import Footer from "./Footer";
import { trending } from "../types/Tmdb";
import { fetchTrendingMovies } from "../apiService/apiService";

const Movie = () => {
  const [randomTrendMovie, setRandomTrendMovie] = useState<trending | null>(
    null
  );

  const fetchRandomTrendMovie = async () => {
    const random = await fetchTrendingMovies();
    setRandomTrendMovie(random);
    console.log(random);
  };

  useEffect(() => {
    fetchRandomTrendMovie();
  }, []);

  return (
    <div>
      Movie
      <Footer />
    </div>
  );
};

export default Movie;
