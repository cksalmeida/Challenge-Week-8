import { fetchSeasonDetails } from "../apiService/apiService";
import { useEffect, useState } from "react";
import Episodes from "../components/Episodes";

interface Props {
  numSec?: string;
  id?: string;
}

const TvSeasons: React.FC<Props> = ({ numSec, id }) => {
  const [listEpisodes, setListEpisodes] = useState([]);

  const fetchSeason = async () => {
    if (numSec && id) {
      const list = await fetchSeasonDetails(id, numSec);
      console.log(list.episodes);
      setListEpisodes(list.episodes);
    }
  };

  useEffect(() => {
    fetchSeason();
  }, []);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14">
      <Episodes episodes={listEpisodes} />
    </div>
  );
};

export default TvSeasons;
