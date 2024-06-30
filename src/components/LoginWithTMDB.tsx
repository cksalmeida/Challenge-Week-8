import axios from "axios";
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const LoginWithTMDB: FunctionComponent<Props> = ({ children }) => {
  const handleOnClickApi = () => {
    const token: string = import.meta.env.VITE_TMDB_API_KEY;
    axios
      .get("https://api.themoviedb.org/3/authentication/token/new", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem("request_token", response.data.request_token);
        window.location.href = `https://www.themoviedb.org/authenticate/${response.data?.request_token}?redirect_to=http://localhost:5173/home`;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button
      className="block w-96 h-12 py-3 text-base bg-primary-300 rounded border-white tracking-[0.14rem]"
      onClick={handleOnClickApi}
    >
      {children}
    </button>
  );
};

export default LoginWithTMDB;
