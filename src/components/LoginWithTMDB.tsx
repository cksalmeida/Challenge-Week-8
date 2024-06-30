import axios from "axios";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { ApiResponse } from "../types/Tmdb";

interface Props {
  children: ReactNode;
}

const LoginWithTMDB: FunctionComponent<Props> = ({ children }) => {
  const [requestTk, setRequestTk] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const token: string = import.meta.env.VITE_TMDB_API_KEY;
    axios
      .get("https://api.themoviedb.org/3/authentication/token/new", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRequestTk(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <a
      className="block w-96 h-12 py-3 text-base bg-primary-300 rounded border-white tracking-[0.14rem]"
      href={`https://www.themoviedb.org/authenticate/${requestTk?.request_token}?redirect_to=http://localhost:5173/home`}
    >
      {children}
    </a>
  );
};

export default LoginWithTMDB;
