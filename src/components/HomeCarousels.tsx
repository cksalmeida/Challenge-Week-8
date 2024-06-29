import Carrossel from "../components/Carrossel";
import {
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchSearchCollection,
} from "../apiService/apiService";
import { useEffect, useState } from "react";
const HomeCarousels = () => {
  const [listColections, setListColections] = useState([]);
  const [listPopularMovies, setListPopularMovies] = useState([]);
  const [listPopularTvs, setListPopularTvs] = useState([]);

  const fetchColectionsItems = async (query: string) => {
    let list = await fetchSearchCollection(query);
    list = list.filter((item: object) => item.poster_path !== null);
    setListColections(list);
  };

  const fetchTvItems = async () => {
    const list = await fetchPopularTVShows();
    setListPopularTvs(list);
  };

  const fetchMoviesItems = async () => {
    const list = await fetchPopularMovies();
    setListPopularMovies(list);
  };

  useEffect(() => {
    fetchColectionsItems("Horror");
    fetchTvItems();
    fetchMoviesItems();
  }, []);

  return (
    <div>
      <Carrossel query={listColections} title={"Coleções de Hallowen"} />
      <Carrossel query={listPopularTvs} title={"Séries em alta"} />
      <Carrossel query={listPopularMovies} title={"Filmes em alta"} />
    </div>
  );
};

export default HomeCarousels;
