import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import {
  fetchRandomMovieTvDetails,
  fetchTvDetailsById,
} from "../apiService/apiService";
import { detail } from "../types/Tmdb";
import { useParams } from "react-router-dom";
import TvCarousels from "./TvCarousels";
import TvSeasons from "../pages/TvSeasons";

const Tv = () => {
  const [randomTrendTv, setRandomTrendTv] = useState<detail | null>(null);
  const [tvClicked, setTvClicked] = useState<detail | null>(null);
  const { id } = useParams<{ id: string }>();
  const { numSec } = useParams<{ numSec: string }>();

  useEffect(() => {
    const fetchRandomTrendTv = async () => {
      const random = await fetchRandomMovieTvDetails("randomTvTrending");
      setRandomTrendTv(random ? random : null);
    };

    const fetchTvDetails = async () => {
      const movie = await fetchTvDetailsById(id ? id : "");
      setTvClicked(movie);
    };

    if (id) {
      fetchTvDetails();
    } else {
      fetchRandomTrendTv();
    }
  }, [id, numSec]);

  return (
    <div>
      <Hero detail={tvClicked || randomTrendTv} id={id ? id : null} />
      {numSec ? (
        <TvSeasons numSec={numSec} id={id} />
      ) : id ? (
        <TvCarousels id={id} />
      ) : (
        <TvCarousels />
      )}
      <Footer />
    </div>
  );
};

export default Tv;
