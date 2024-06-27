import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import { trending } from "../types/Tmdb";

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
      <Footer />
    </div>
  );
};

export default Home;
