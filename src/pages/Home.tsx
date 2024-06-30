import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import {
  fetchRandomMovieTvDetails,
  getSessionWithToken,
} from "../apiService/apiService";
import { detail } from "../types/Tmdb";
import Loading from "../components/Loading";
import { Route, Routes } from "react-router-dom";
import Movie from "../components/Movie";
import Tv from "../components/Tv";
import Celebrities from "../components/Celebrities";
import HomeCarousels from "../components/HomeCarousels";
import Collection from "../components/Collection";
import Account from "./Account";
import VideoPlayer from "./VideoPlayer";
import Search from "./Search";

const Home = () => {
  const [randomTrend, setRandomTrend] = useState<detail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const requestToken = localStorage.getItem("request_token");

  const fetchRandomTrend = async () => {
    const random = await fetchRandomMovieTvDetails("randomTrending");
    setRandomTrend(random ? random : null);
  };

  const fetchSessionId = async (requestToken: string) => {
    if (localStorage.getItem("session_Id")) {
      return;
    }
    if (localStorage.getItem("guest_session_id")) {
      return;
    }
    const SessionId = await getSessionWithToken(requestToken);
    localStorage.setItem("session_Id", SessionId.session_id);
  };

  useEffect(() => {
    fetchSessionId(requestToken!);
    fetchRandomTrend();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [requestToken]);

  return loading === true ? (
    <Loading />
  ) : (
    <div className="bg-neutral-600">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero detail={randomTrend} />
              <HomeCarousels />
            </>
          }
        />
        <Route path="series/:id?" element={<Tv />} />
        <Route path="filmes/:id?" element={<Movie />} />
        <Route path="celebridades/:id?" element={<Celebrities />} />
        <Route path="colecoes/:id" element={<Collection />} />
        <Route path="conta" element={<Account />} />
        <Route path="player" element={<VideoPlayer />} />
        <Route path="buscar/*" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Home;
