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
    list = list.filter((item) => item.poster_path !== null);
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
    <div className="flex flex-col gap-14">
    <Carrossel 
      query={listNowPlaying} 
      page="filmes" 
      title="Lançamentos" 
      />
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
    <Carrossel 
      query={listUpcomingMovies} 
      page="filmes" 
      title="Em Breve"
      />
  </div>
  );
};

export default MovieCarousels;
