import { useEffect, useState } from "react";
import Footer from "./Footer";
import { detail } from "../types/Tmdb";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import Hero from "./Hero";

const Movie = () => {
  const [randomTrendMovie, setRandomTrendMovie] = useState<detail | null>(null);

  const fetchRandomTrendMovie = async () => {
    const random = await fetchRandomMovieTvDetails("randomMovieTrending");
    setRandomTrendMovie(random);
  };

  useEffect(() => {
    fetchRandomTrendMovie();
  }, []);

  return (
    <div>
      <Hero detail={randomTrendMovie} />
      <Footer />
    </div>
  );
};

export default Movie;
