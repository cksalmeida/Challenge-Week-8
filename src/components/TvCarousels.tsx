import Carrossel from "../components/Carrossel";
import {
fetchAiringTodayTVShows,
fetchPopularTVShows,
fetchOnTheAirTVShows,
fetchTopRatedTVShows,
} from "../apiService/apiService";
import { useEffect, useState } from "react";

const TvCarousels = () => {
    const [listAiringToday, setListAiringToday] = useState([]);
    const [listPopularTvs, setListPopularTvs] = useState([]);
    const [listOnTheAir, setListOnTheAir] = useState([]);
    const [listTopRatedTvs, setListTopRatedTvs] = useState([]);

    const fetchAiringTodayItems = async () => {
        let list = await fetchAiringTodayTVShows();
        list = list.filter((item: object) => item.poster_path !== null);
        setListAiringToday(list);
      };

      const fetchPopularTvItems = async () => {
        const list = await fetchPopularTVShows();
        setListPopularTvs(list);
      };

      const fetchOnTheAirItems = async () => {
        let list = await fetchOnTheAirTVShows();
        list = list.filter((item: object) => item.poster_path !== null);
        setListOnTheAir(list);
      };
  
      const fetchTopRatedTvItems = async () => {
        const list = await fetchTopRatedTVShows();
        setListTopRatedTvs(list);
      };
    
      useEffect(() => {
        fetchAiringTodayItems();
        fetchPopularTvItems();
        fetchOnTheAirItems();
        fetchTopRatedTvItems();
      }, []);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14">
      <Carrossel
        query={listAiringToday}
        page="series"
        title={"Lançamentos"}
      />
      <Carrossel
        query={listPopularTvs}
        page="series"
        title={"Populares"}
      />
      <Carrossel 
        query={listOnTheAir} 
        page="series" 
        title={"Estão no ar"}
      />
      <Carrossel 
        query={listTopRatedTvs} 
        page="series" 
        title={"Mais Bem Avaliadas"}
      />
    </div>
  );
};

export default TvCarousels;
