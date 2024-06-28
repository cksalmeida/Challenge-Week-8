import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { Movie } from "../types/Tmdb";
import { fetchSearchMovies } from "../apiService/apiService";

const Carousel = ({ query }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesQuery: Movie[] = await fetchSearchMovies(query);
      setMovies(moviesQuery);
    };
    getMovies();
  }, [query]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 5;
  const numPages = Math.ceil(movies.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numPages) % numPages);
  };

  return (
    <div className="bg-neutral-600">
      <h2 className="text-xl ml-8 text-white font-bold pt-5">Séries Dramáticas</h2>
      <div className="flex justify-end pb-4">
        {Array.from({ length: numPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-cyan-500" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
      <div className="relative overflow-hidden m-auto w-11/12">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-x-4" // Adiciona espaçamento horizontal
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((image, index) => (
            <div
              key={index}
              className="flex min-w-[20%]"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${image.poster_path}`}
                className="h-full md:w-60 md:h-[361px] rounded-2xl"
                alt={image.title}
              />
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white font-black px-2 py-1"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white font-black px-2 py-1"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
