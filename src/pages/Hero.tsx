import playVector from "../assets/playVector.svg";
import infoVector from "../assets/infoVector.svg";
import addVector from "../assets/addVector.svg";
import starVector from "../assets/starVector.svg";
import ButtonDefault from "./ButtonDefault";
import ButtonRounded from "./ButtonRounded";

const Hero = () => {
  return (
    <section className="bg-heroBg bg-cover bg-no-repeat bg-center h-screen flex items-end md:items-center">
      <div className="font-workSans flex flex-col items-start mx-4 md:mx-0 md:max-w-3xl md:ml-20 mb-6 md:mb-0 gap-8">
        <div className="text-neutral-100 flex flex-col gap-5">
          <h1 className="text-44px font-bold">Luca</h1>
          <p className="text-base font-normal">2021 • 1 h 41 min</p>
          <p className="text-xs font-normal">Drama, Sci-Fi & Fantasy</p>
          <p className="font-normal text-xl">
            La película de Disney y Pixar “Luca” está ambientada en un pueblo de
            la costa italiana y cuenta la historia de un adolescente que pasa un
            verano inolvidable lleno de aventuras junto con su nuevo amigo
            Alberto.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <ButtonDefault
            img={playVector}
            alt="Play"
            className={"bg-white text-neutral-600"}
          >
            VER AGORA
          </ButtonDefault>
          <ButtonDefault
            img={infoVector}
            alt="Info"
            className={"bg-none text-white border border-white "}
          >
            MAIS INFORMAÇÕES
          </ButtonDefault>
          {false! ? (
            <ButtonDefault
              className={"bg-none text-white border border-white "}
            >
              TRAILER
            </ButtonDefault>
          ) : (
            ""
          )}
          <div className="flex gap-6">
            <ButtonRounded img={addVector} alt="Add" />
            <ButtonRounded img={starVector} alt="Favorite" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
