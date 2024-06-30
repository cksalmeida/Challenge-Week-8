import { detail } from "../types/Tmdb";
import HeroInformation from "./HeroInformation";

interface Props {
  detail: detail | null;
  id?: string | null;
}

const Hero = ({ detail, id }: Props) => {
  return (
    <section className="relative h-screen overflow-hidden flex items-end md:items-center">
      <div className="bg-top-gradient absolute top-0 left-0 right-0 height-15px z-10"></div>
      <div className="bg-top-gradient absolute top-0 left-0 right-0 height-15px z-10"></div>
      <div className="bg-botton-gradient absolute top-0 left-0 right-0 bottom-0 z-10"></div>
      <div
        className="bg-cover bg-no-repeat bg-center absolute top-0 left-0 right-0 bottom-0"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.backdrop_path})`,
        }}
      />
      <HeroInformation detail={detail} id={id ? id : null} />
    </section>
  );
};

export default Hero;
