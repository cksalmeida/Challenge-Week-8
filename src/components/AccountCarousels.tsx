import { useCallback, useEffect, useState } from "react";
import Carrossel from "./Carrossel";
import {
  getFavoriteMovies,
  getFavoriteTVShows,
  getWatchlistMovies,
  getWatchlistTv,
} from "../apiService/apiService";

const AccountCarousels = () => {
  const [listFavoriteMovies, setListFavoriteMovies] = useState([]);
  const [listFavoriteTvs, setListFavoriteTvs] = useState([]);
  const [listWatchlistMovies, setListWatchlistMovies] = useState([]);
  const [listWatchlistTv, setListWatchlistTv] = useState([]);
  const sessionId = localStorage.getItem("session_Id");

  const fetchGetFavoriteMovies = useCallback(async (sessionId: string) => {
    const list = await getFavoriteMovies(sessionId);
    setListFavoriteMovies(list);
  }, []);

  const fetchGetFavoriteTvs = useCallback(async (sessionId: string) => {
    const list = await getFavoriteTVShows(sessionId);
    setListFavoriteTvs(list);
  }, []);

  const fetchGetWatchlistMovies = useCallback(async (sessionId: string) => {
    const list = await getWatchlistMovies(sessionId);
    setListWatchlistMovies(list);
  }, []);

  const fetchGetWatchlistTv = useCallback(async (sessionId: string) => {
    const list = await getWatchlistTv(sessionId);
    setListWatchlistTv(list);
  }, []);

  useEffect(() => {
    if (sessionId) {
      fetchGetFavoriteMovies(sessionId);
      fetchGetFavoriteTvs(sessionId);
      fetchGetWatchlistMovies(sessionId);
      fetchGetWatchlistTv(sessionId);
    }
  }, [
    sessionId,
    fetchGetFavoriteMovies,
    fetchGetFavoriteTvs,
    fetchGetWatchlistMovies,
    fetchGetWatchlistTv,
  ]);

  return (
    <div className="container flex flex-col gap-14">
      <Carrossel
        query={listFavoriteMovies}
        page="filmes"
        title={"Filmes favoritos"}
      />
      <Carrossel
        query={listFavoriteTvs}
        page="series"
        title={"Séries favoritas"}
      />
      <Carrossel
        query={listWatchlistMovies}
        page="filmes"
        title={"Filmes para ver mais tarde"}
      />
      <Carrossel
        query={listWatchlistTv}
        page="series"
        title={"Séries para ver mais tarde"}
      />
    </div>
  );
};

export default AccountCarousels;
