import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import { trending } from "../types/Tmdb";
import HomeCarousels from "../components/HomeCarousels";

const Home = () => {
  const [randomTrend, setRandomTrend] = useState<trending | null>(null);

  const fetchRandomTrend = async () => {
    const random = await fetchRandomMovieTvDetails();
    setRandomTrend(random);
  };

  useEffect(() => {
    fetchRandomTrend();
  }, []);

  return (
    <div>
      <Hero trending={randomTrend} />
      <HomeCarousels />
    </div>
  );
};

export default Home;
