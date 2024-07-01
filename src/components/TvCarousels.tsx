import Carrossel from "../components/Carrossel";
import {
  fetchAiringTodayTVShows,
  fetchPopularTVShows,
  fetchOnTheAirTVShows,
  fetchTopRatedTVShows,
  fetchTvDetailsById,
  fetchSimilarTvShows,
} from "../apiService/apiService";
import { useCallback, useEffect, useState } from "react";

interface Props {
  id?: string;
}

const TvCarousels = ({ id }: Props) => {
  const [listAiringToday, setListAiringToday] = useState([]);
  const [listPopularTvs, setListPopularTvs] = useState([]);
  const [listOnTheAir, setListOnTheAir] = useState([]);
  const [listTopRatedTvs, setListTopRatedTvs] = useState([]);
  const [tvDetails, setTvDetails] = useState([]);
  const [similarTvShows, setSimilarTvShows] = useState([]);

  const fetchAiringTodayItems = async () => {
    let list = await fetchAiringTodayTVShows();
    list = list.filter(
      (item: { poster_path: string | null }) => item.poster_path !== null
    );
    setListAiringToday(list);
  };

  const fetchPopularTvItems = async () => {
    const list = await fetchPopularTVShows();
    setListPopularTvs(list);
  };

  const fetchOnTheAirItems = async () => {
    let list = await fetchOnTheAirTVShows();
    list = list.filter(
      (item: { poster_path: string | null }) => item.poster_path !== null
    );
    setListOnTheAir(list);
  };

  const fetchTopRatedTvItems = async () => {
    const list = await fetchTopRatedTVShows();
    setListTopRatedTvs(list);
  };

  const fetchTvDetails = useCallback(async () => {
    if (id) {
      let list = await fetchTvDetailsById(id);
      list = list.seasons.filter(
        (item: { poster_path: string | null }) => item.poster_path !== null
      );
      setTvDetails(list);
    }
  }, [id]);

  const fetchSimilarTvShowsCallback = useCallback(async () => {
    if (id) {
      let list = await fetchSimilarTvShows(id);
      list = list.filter(
        (item: { poster_path: string | null }) => item.poster_path !== null
      );
      setSimilarTvShows(list);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchTvDetails();
      fetchSimilarTvShowsCallback();
    } else {
      fetchAiringTodayItems();
      fetchPopularTvItems();
      fetchOnTheAirItems();
      fetchTopRatedTvItems();
    }
  }, [id, fetchSimilarTvShowsCallback, fetchTvDetails]);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14 overflow-hidden">
      {id ? (
        <>
          <Carrossel
            query={tvDetails}
            page={`series/${id}`}
            title={"Temporadas"}
            seasonNumber={true}
          />
          <Carrossel query={similarTvShows} page="series" title={"Similares"} />
        </>
      ) : (
        <>
          <Carrossel
            query={listAiringToday}
            page={"series"}
            title={"Lançamentos"}
          />
          <Carrossel query={listPopularTvs} page="series" title={"Populares"} />
          <Carrossel query={listOnTheAir} page="series" title={"Estão no ar"} />
          <Carrossel
            query={listTopRatedTvs}
            page="series"
            title={"Mais Bem Avaliadas"}
          />
        </>
      )}
    </div>
  );
};

export default TvCarousels;
