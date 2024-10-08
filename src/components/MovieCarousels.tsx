import Carrossel from "../components/Carrossel";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "../apiService/apiService";
import { useEffect, useState } from "react";

const MovieCarousels = () => {
  const [listNowPlaying, setListNowPlaying] = useState([]);
  const [listPopularMovies, setListPopularMovies] = useState([]);
  const [listTopRatedMovies, setListTopRatedMovies] = useState([]);
  const [listUpcomingMovies, setListUpcomingMovies] = useState([]);

  const fetchNowPlayingItems = async () => {
    let list = await fetchNowPlayingMovies();
    list = list.filter(
      (item: { poster_path: string | null }) => item.poster_path !== null
    );
    setListNowPlaying(list);
  };

  const fetchPopularItems = async () => {
    const list = await fetchPopularMovies();
    setListPopularMovies(list);
  };

  const fetchTopRatedItems = async () => {
    const list = await fetchTopRatedMovies();
    setListTopRatedMovies(list);
  };

  const fetchUpcomingItems = async () => {
    const list = await fetchUpcomingMovies();
    setListUpcomingMovies(list);
  };

  useEffect(() => {
    fetchNowPlayingItems();
    fetchPopularItems();
    fetchTopRatedItems();
    fetchUpcomingItems();
  }, []);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14 overflow-hidden">
      <Carrossel query={listNowPlaying} page="filmes" title="Lançamentos" />
      <Carrossel
        query={listPopularMovies}
        page="filmes"
        title="Filmes Populares"
      />
      <Carrossel
        query={listTopRatedMovies}
        page="filmes"
        title="Mais Bem Avaliados"
      />
      <Carrossel query={listUpcomingMovies} page="filmes" title="Em Breve" />
    </div>
  );
};

export default MovieCarousels;
