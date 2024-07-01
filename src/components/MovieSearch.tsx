import { useState, useEffect } from "react";
import { fetchAxiosSearch } from "../apiService/apiService";
import "./movieSearch.css";

interface MovieSearchProps {
  query: string;
  category: string;
}

interface Movie {
  id: number;
  poster_path: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ query, category }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAxiosSearch(category, query);
        setMovies(data.results);
        setSearchText(query);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query, category]);

  return (
    <div>
      {query && (
        <div className="search-info">
          Resultados para sua busca: <strong>{searchText}</strong>
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
      {movies.length === 0 && <div className="no-results">Sem resultados</div>}
    </div>
  );
};

export default MovieSearch;
