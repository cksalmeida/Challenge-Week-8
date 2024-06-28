import playVector from "../assets/playVector.svg";
import infoVector from "../assets/infoVector.svg";
import addVector from "../assets/addVector.svg";
import addHoverVector from "../assets/addHoverVector.svg";
import starVector from "../assets/starVector.svg";
import starHoverVector from "../assets/starHoverVector.svg";
import ButtonDefault from "./ButtonDefault";
import ButtonRounded from "./ButtonRounded";
import { season, trending } from "../types/Tmdb";

interface Props {
  trending: trending | null;
}
const HeroInformation = ({ trending }: Props) => {
  const getYear = (dateString: string | undefined) => {
    return dateString ? new Date(dateString).getFullYear() : null;
  };

  const getLastSeason = (seasons: season[] | undefined) => {
    if (seasons && seasons.length > 0) {
      return seasons[seasons.length - 1];
    }
    return null;
  };

  const getLastSeasonYear = (seasons: season[] | undefined) => {
    const lastSeason = getLastSeason(seasons);
    return lastSeason ? getYear(lastSeason.air_date) : null;
  };

  const releaseYear = trending
    ? getYear(trending.release_date) ||
      getYear(trending.first_air_date) ||
      getLastSeasonYear(trending.seasons)
    : null;

  const renderGenres = () => {
    if (trending && trending.genres) {
      return trending.genres.map((genre) => genre.name).join(", ");
    }
    return null;
  };

  const convertMinutesToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} h ${mins} min`;
  };

  return (
    <div className="font-workSans text-white flex flex-col items-start mx-4 md:mx-0 md:max-w-3xl md:ml-20 mb-6 md:mb-0 gap-8 z-20 mt-[59.4px] md:mt-0">
      <div className="text-neutral-100 flex flex-col gap-5">
        <h1 className="text-44px font-bold">
          {trending ? (trending.title ? trending.title : trending.name) : null}
        </h1>
        <p className="text-base font-normal">
          {releaseYear} •{" "}
          {trending
            ? trending.runtime
              ? convertMinutesToHours(trending.runtime)
              : trending.number_of_seasons
              ? trending.number_of_seasons > 1
                ? `${trending.number_of_seasons} Temporadas`
                : `${trending.number_of_seasons} Temporada`
              : null
            : null}
        </p>
        <p className="text-xs font-normal">{renderGenres()}</p>
        <p className="font-normal text-xl">
          {trending ? trending.overview : null}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <ButtonDefault
          img={playVector}
          alt="Play"
          className="bg-white text-neutral-600 hover:bg-neutral-200"
        >
          VER AGORA
        </ButtonDefault>
        <ButtonDefault
          img={infoVector}
          alt="Info"
          className="bg-none text-white border border-white hover:bg-neutral-200 hover:text-neutral-600 hover:border-none"
        >
          MAIS INFORMAÇÕES
        </ButtonDefault>
        {false! ? (
          <ButtonDefault className="bg-none text-white border border-white">
            TRAILER
          </ButtonDefault>
        ) : (
          ""
        )}
        <div className="flex gap-6">
          <ButtonRounded img={addVector} hoverImg={addHoverVector} alt="Add" />
          <ButtonRounded
            img={starVector}
            hoverImg={starHoverVector}
            alt="Favorite"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroInformation;
