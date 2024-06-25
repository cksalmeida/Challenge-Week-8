import compass from "../assets/compass.uol.svg";
import LoginWithTMDB from "./LoginWithTMDB";

const LoginSection = () => {
  return (
    <section
      className="font-bold flex flex-col gap-6 p-5 md:p-8 rounded-[20px] items-center font-workSans md:w-[783px] md:h-[453.95px] text-center bg-gray-800 backdrop-filter 
backdrop-blur-md
bg-opacity-70"
    >
      <h1 className="text-44px">Compass Video</h1>
      <p className="text-xl font-normal">
        Acesse sua conta para ver <br /> nossos títulos
      </p>
      <LoginWithTMDB>INICIAR SESSÃO COM TMDB</LoginWithTMDB>
      <p className="font-medium text-sm">
        <span className="text-white text-opacity-60 font-normal">
          Não tem conta?{" "}
        </span>
        <a href="">Acesse como convidado</a>
      </p>
      <img src={compass} alt="compass" />
    </section>
  );
};

export default LoginSection;
