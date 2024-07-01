import { useEffect, useState } from "react";
import {
  fetchRandomMovieTvDetails,
  fetchSeasonDetails,
  fetchTvDetailsById,
} from "../apiService/apiService";
import { detail } from "../types/Tmdb";
import { useParams } from "react-router-dom";
import TvSeasons from "../pages/TvSeasons";
import TvCarousels from "../components/TvCarousels";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Tv = () => {
  const [randomTrendTv, setRandomTrendTv] = useState<detail | null>(null);
  const [tvClicked, setTvClicked] = useState<detail | null>(null);
  const [seasonDetail, setSeasonDetail] = useState<{
    name: string;
    vote_average: number;
  } | null>(null);
  const { id, numSec } = useParams<{ id: string; numSec: string }>();

  useEffect(() => {
    setRandomTrendTv(null);
    setTvClicked(null);
    setSeasonDetail(null);

    const fetchRandomTrendTv = async () => {
      const random = await fetchRandomMovieTvDetails("randomTvTrending");
      setRandomTrendTv(random ? random : null);
    };

    const fetchTvDetails = async () => {
      const movie = await fetchTvDetailsById(id || "");
      setTvClicked(movie);
    };

    const fetchTvDetailsSeason = async () => {
      const movie = await fetchTvDetailsById(id || "");
      if (numSec && seasonDetail) {
        const mergedDetails = { ...movie, ...seasonDetail };
        setTvClicked(mergedDetails);
      }
    };

    const fetchSeason = async () => {
      if (id && numSec) {
        const { name, vote_average } = await fetchSeasonDetails(id, numSec);
        setSeasonDetail({ name, vote_average });
      }
    };

    if (id) {
      fetchSeason();
      fetchTvDetails();
    } else {
      fetchRandomTrendTv();
    }
    fetchTvDetailsSeason();
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
