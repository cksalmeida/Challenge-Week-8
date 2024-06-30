import { detail } from "../types/Tmdb";
import Header from "./Header";
import HeroInformation from "./HeroInformation";
import "./heroInformation.css";

interface Props {
  detail: detail | null;
  id?: string | null;
}

const Hero = ({ detail, id }: Props) => {
  return (
    <section>
      <div
        className="relative overflow-hidden flex flex-col justify-between h-screen bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.backdrop_path})`,
        }}
      >
        <div className="heroInformation h-screen">
          <div className="flex flex-col justify-between min-h-[70%]">
            <Header />
            <div className="relative z-10 flex flex-col md:max-w-[50%]">
              <HeroInformation detail={detail} id={id ? id : null} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
