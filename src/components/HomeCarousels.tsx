import Carrossel from "../components/Carrossel";
import { fetchSearchCollection } from "../apiService/apiService";
import { useEffect, useState } from "react";
const HomeCarousels = () => {
  const [listColections, setListColections] = useState([]);
  const [listPopularMovies, setListPopularMovies] = useState([]);

  const fetchColectionsItems = async (query: string) => {
    let list = await fetchSearchCollection(query);
    list = list.filter((item: object) => item.poster_path !== null);
    setListColections(list);
  };
  useEffect(() => {
    fetchColectionsItems("Horror");
  }, []);

  return (
    <div>
      <Carrossel query={listColections} title={"Coleções de Hallowen"} />
    </div>
  );
};

export default HomeCarousels;
