import Carrossel from "../components/Carrossel";
import {
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchSearchCollection,
} from "../apiService/apiService";
import { useEffect, useState, useCallback } from "react";

const HomeCarousels = () => {
  const [listColections, setListColections] = useState([]);
  const [listPopularMovies, setListPopularMovies] = useState([]);
  const [listPopularTvs, setListPopularTvs] = useState([]);

  const fetchColectionsItems = useCallback(async (query: string) => {
    let list = await fetchSearchCollection(query);
    list = list.filter(
      (item: { poster_path: string | null }) => item.poster_path !== null
    );
    setListColections(list);
  }, []);

  const fetchTvItems = useCallback(async () => {
    const list = await fetchPopularTVShows();
    setListPopularTvs(list);
  }, []);

  const fetchMoviesItems = useCallback(async () => {
    const list = await fetchPopularMovies();
    setListPopularMovies(list);
  }, []);

  useEffect(() => {
    fetchColectionsItems("Horror");
    fetchTvItems();
    fetchMoviesItems();
  }, [fetchColectionsItems, fetchTvItems, fetchMoviesItems]);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14 overflow-hidden">
      <Carrossel
        query={listColections}
        page="colecoes"
        title={"Coleções de Hallowen"}
      />
      <Carrossel
        query={listPopularTvs}
        page="series"
        title={"Séries em alta"}
      />
      <Carrossel
        query={listPopularMovies}
        page="filmes"
        title={"Filmes em alta"}
      />
    </div>
  );
};

export default HomeCarousels;
