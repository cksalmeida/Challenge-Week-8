import { useState, useEffect } from "react";
import axios from "axios";
import { fetchAxiosSearchMovies } from "../apiService/apiService";
import "./movieSearch.css";

interface MovieSearchProps {
  query: string;
}

interface Movie {
  id: number;
  poster_path: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ query }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [hasResults, setHasResults] = useState<boolean>(true); // Estado para verificar se há resultados

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          ...fetchAxiosSearchMovies,
          params: { ...fetchAxiosSearchMovies.params, query },
        });
        const results = response.data.results;
        setMovies(results);
        setHasResults(results.length > 0); // Atualiza o estado baseado nos resultados da busca
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="movies-search-results">
      {query && (
        <div className="search-info">
          {hasResults ? (
            <p className="search-info-text">
              Resultados para sua busca: <strong>{query}</strong>
            </p>
          ) : (
            <p className="search-info-text no-results">Sem resultados</p>
          )}
        </div>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
