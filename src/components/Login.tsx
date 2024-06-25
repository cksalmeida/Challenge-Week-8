import compass from "../assets/compass.uol.svg";
import LoginWithTMDB from "./LoginWithTMDB";

const Login = () => {
  return (
    <div className="bg-loginBg bg-cover h-screen flex items-center justify-center text-white">
      <section className="font-bold flex flex-col gap-6 p-8 rounded-20px bg-gray-900 bg-opacity-75 items-center">
        <h1 className="text-44px">Compass Video</h1>
        <p className="text-2xl">Acesse sua conta para ver nossos títulos</p>
        <LoginWithTMDB>INICIAR SESSÃO COM TMDB</LoginWithTMDB>
        <p className="font-medium text-sm">
          <span className="text-white text-opacity-60 font-normal">
            Não tem conta?{" "}
          </span>
          Acesse como convidado
        </p>
        <img src={compass} alt="compass" />
      </section>
    </div>
  );
};

export default Login;
