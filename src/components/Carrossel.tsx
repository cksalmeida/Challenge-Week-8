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

  // const images = [
  //   {
  //     src: "https://via.placeholder.com/300x150/00ff00/000000?text=Rainha+Charlotte",
  //   },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Dexter" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=House" },
  //   {
  //     src: "https://via.placeholder.com/300x150/00ffff/000000?text=Peaky+Blinders",
  //   },
  //   {
  //     src: "https://via.placeholder.com/300x150/00ffff/000000?text=Breaking+Bad",
  //   },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  //   { src: "https://via.placeholder.com/300x150/00ffff/000000?text=Voce" },
  // ];

  const itemsPerPage = 4;
  const numPages = Math.ceil(movies.length / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numPages) % numPages);
  };

  return (
    <>
      <h2>Séries Dramáticas</h2>
      <div className="flex justify-end mt-4">
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
      <div className="relative overflow-hidden content-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((image, index) => (
            <div
              key={index}
              className="flex justify-center min-w-[25%] md:px-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${image.poster_path}`}
                className="h-full md:w-60 md:h-[361px]"
                alt={image.title}
              />
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black font-black px-2 py-1"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black font-black px-2 py-1"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Carousel;
