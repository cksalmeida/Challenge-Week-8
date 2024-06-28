import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { fetchRandomMovieTvDetails } from "../apiService/apiService";
import { trending } from "../types/Tmdb";
import Header from "../components/Header";

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
      <Header />
      <Hero trending={randomTrend} />
      <Footer />
    </div>
  );
};

export default Home;
