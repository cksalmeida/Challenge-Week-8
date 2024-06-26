import heroBg from "../assets/HeroBg.png";
import HeroInformation from "./HeroInformation";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden flex items-end md:items-center">
      <div className="bg-top-gradient absolute top-0 left-0 right-0 height-15px z-10"></div>
      <div className="bg-top-gradient absolute top-0 left-0 right-0 height-15px z-10"></div>
      <div className="bg-botton-gradient absolute top-0 left-0 right-0 bottom-0 z-10"></div>
      <div
        className="bg-cover bg-no-repeat bg-center absolute top-0 left-0 right-0 bottom-0"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <HeroInformation />
    </section>
  );
};

export default Hero;
