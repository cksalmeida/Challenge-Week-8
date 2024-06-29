import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import { detail } from "../types/Tmdb";

const Tv = () => {
  const [randomTrendTv, setRandomTrendTv] = useState<detail | null>(null);

  const fetchRandomTrendTv = async () => {
    const random = await fetchRandomMovieTvDetails("randomTvTrending");
    setRandomTrendTv(random ? random : null);
  };

  useEffect(() => {
    fetchRandomTrendTv();
  }, []);
  return (
    <div>
      <Hero detail={randomTrendTv} />
      <Footer />
    </div>
  );
};

export default Tv;
