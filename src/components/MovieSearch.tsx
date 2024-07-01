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
  name: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ query, category }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchAxiosSearch(category, query);
        data = data.results.filter(
          (item: { poster_path: string | null }) => item.poster_path !== null
        );
        setMovies(data);
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
    <div className="container mx-auto h-auto mb-4">
      {query && (
        <div className="search-info text-white">
          <span className="opacity-80">Resultados para sua busca: </span>
          <span className="font-bold">{searchText}</span>
        </div>
      )}
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
      {movies.length === 0 && (
        <div className="no-results text-white opacity-80">Sem resultados</div>
      )}
    </div>
  );
};

export default MovieSearch;
