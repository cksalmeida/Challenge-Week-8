import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import {
  fetchRandomMovieTvDetails,
  fetchTvDetailsById,
} from "../apiService/apiService";
import { detail } from "../types/Tmdb";
import { useParams } from "react-router-dom";

const Tv = () => {
  const [randomTrendTv, setRandomTrendTv] = useState<detail | null>(null);
  const [tvClicked, setTvClicked] = useState<detail | null>(null);
  const { id } = useParams<{ id: string }>();

  const fetchRandomTrendTv = async () => {
    const random = await fetchRandomMovieTvDetails("randomTvTrending");
    setRandomTrendTv(random ? random : null);
  };

  useEffect(() => {
    fetchRandomTrendTv();
  }, []);

  useEffect(() => {
    const fetchTvDetails = async () => {
      if (id) {
        const movie = await fetchTvDetailsById(id);
        setTvClicked(movie);
      }
    };
    fetchTvDetails();
  }, [id]);

  return (
    <div>
      <Hero detail={tvClicked || randomTrendTv} />
      <Footer />
    </div>
  );
};

export default Tv;
