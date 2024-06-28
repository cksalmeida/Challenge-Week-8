import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import { detail } from "../types/Tmdb";

const Celebrities = () => {
  const [randomTrendPeople, setRandomTrendPeople] = useState<detail | null>(
    null
  );

  const fetchRandomTrendPeople = async () => {
    const random = await fetchRandomMovieTvDetails("randomPeopleTrending");
    console.log("🚀 ~ fetchRandomTrendPeople ~ random:", random);
    setRandomTrendPeople(random);
  };

  useEffect(() => {
    fetchRandomTrendPeople();
  }, []);
  return (
    <div>
      <Hero detail={randomTrendPeople} />
      <Footer />
    </div>
  );
};

export default Celebrities;
