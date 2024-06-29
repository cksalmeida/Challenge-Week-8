import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import { detail } from "../types/Tmdb";

const Celebrities = () => {
  const [randomTrend, setRandomTrend] = useState<detail | null>(null);

  const fetchRandomTrendMovie = async () => {
    const random = await fetchRandomMovieTvDetails("randomTrending");
    setRandomTrend(random ? random : null);
  };

  useEffect(() => {
    fetchRandomTrendMovie();
  }, []);

  return (
    <div>
      <Hero detail={randomTrend} />
      <Footer />
    </div>
  );
};

export default Celebrities;