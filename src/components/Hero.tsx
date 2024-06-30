import { detail } from "../types/Tmdb";
import Header from "./Header";
import HeroInformation from "./HeroInformation";

interface Props {
  detail: detail | null;
  id?: string | null;
}

const Hero = ({ detail, id }: Props) => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-between">
      <Header />
      <div
        className="bg-cover bg-no-repeat bg-center absolute top-0 left-0 right-0 bottom-0"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.backdrop_path})`,
        }}
      />
      <div className="relative z-10 flex flex-col justify-end md:justify-end">
        <HeroInformation detail={detail} id={id ? id : null} />
      </div>
    </section>
  );
};

export default Hero;
