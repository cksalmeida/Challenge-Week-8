import { useEffect, useState } from "react";
import { detail } from "../types/Tmdb";
import {
  fetchMoviesDetailsById,
  fetchRandomMovieTvDetails,
  fetchSimilarMovies,
} from "../apiService/apiService";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieCarousels from "../components/MovieCarousels";
import Carrossel from "../components/Carrossel";

const Movie = () => {
  const [movieClicked, setMovieClicked] = useState<detail | null>(null);
  const [randomTrendMovie, setRandomTrendMovie] = useState<detail | null>(null);
  const [listSimilarMovies, setListSimilarMovies] = useState([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movie = await fetchMoviesDetailsById(id!);
      setMovieClicked(movie);
    };

    const fetchRandomTrendMovie = async () => {
      const random = await fetchRandomMovieTvDetails("randomMovieTrending");
      setRandomTrendMovie(random ? random : null);
    };

    const fetchSimilarMovie = async () => {
      let list = await fetchSimilarMovies(id!);
      list = list.filter(
        (item: { poster_path: string | null }) => item.poster_path !== null
      );
      setListSimilarMovies(list ? list : null);
    };

    if (id) {
      fetchMovieDetails();
      fetchSimilarMovie();
    } else {
      fetchRandomTrendMovie();
    }
  }, [id]);

  return (
    <div>
      <Hero detail={movieClicked || randomTrendMovie} id={id ? id : null} />
      {id ? (
        <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14">
          <Carrossel
            query={listSimilarMovies}
            page="filmes"
            title="Similares"
          />
        </div>
      ) : (
        <MovieCarousels />
      )}
      <Footer />
    </div>
  );
};

export default Movie;
