import axios from "axios";
import { detail } from "../types/Tmdb";

const token: string = import.meta.env.VITE_TMDB_API_KEY;

const fetchRandomMovieTvDetails = async (
  detail: string
): Promise<detail | undefined> => {
  try {
    let detailResults;
    if (detail === "randomTrending") {
      detailResults = await fetchTrending();
    } else if (detail === "randomMovieTrending") {
      detailResults = await fetchPopularMovies();
    } else if (detail === "randomTvTrending") {
      detailResults = await fetchPopularTVShows();
    }
    const randomIndex = Math.floor(Math.random() * detailResults.length);
    const randomItem = detailResults[randomIndex];

    if (randomItem.media_type === "movie") {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomItem.id}`,
        {
          params: {
            language: "pt-BR",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return movieResponse.data;
    } else if (randomItem.media_type === "tv") {
      const tvResponse = await axios.get(
        `https://api.themoviedb.org/3/tv/${randomItem.id}`,
        {
          params: {
            language: "pt-BR",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return tvResponse.data;
    } else {
      return await fetchRandomMovieTvDetails("randomTrending");
    }
  } catch (error) {
    console.error("Error fetching random movie or TV details:", error);
  }
};

const fetchMoviesDetailsById = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          language: "pt-BR",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Movies Details By Id:", error);
  }
};

const fetchTvDetailsById = async (id: string) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
      params: {
        language: "pt-BR",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Tv Details By Id:", error);
  }
};

const fetchColletionDetailsById = async (id: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/collection/${id}`,
      {
        params: {
          language: "pt-BR",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Colletion Details By Id:", error);
  }
};

const fetchTrending = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day",
      {
        params: {
          language: "pt-BR",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending:", error);
  }
};

const fetchPopularMovies = async () => {
  try {
    const movieResponse = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          language: "pt-BR",
          page: 1,
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return movieResponse.data.results;
  } catch (error) {
    console.error("Error fetching Popular Movies:", error);
  }
};

const fetchPopularTVShows = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular",
      {
        params: {
          language: "pt-BR",
          page: 1,
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Popular TV shows:", error);
  }
};

const fetchSearchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          query: query,
          include_adult: true,
          language: "pt-BR",
          primary_release_year: 2023,
          page: 1,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search movie:", error);
  }
};

const fetchSearchCollection = async (query: string) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/collection",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        params: {
          query: query,
          include_adult: false,
          language: "pt-BR",
          page: 1,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching collection:", error);
  }
};

const fetchAiringTodayTVShows = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/airing_today",
      {
        params: {
          language: "pt-BR",
          page: 1,
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Airing Today TV shows:", error);
  }
};

const fetchOnTheAirTVShows = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/tv/on_the_air", {
      params: {
        language: "pt-BR",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching On The Air TV shows:", error);
  }
};

// Função para buscar séries mais bem avaliadas
const fetchTopRatedTVShows = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/tv/top_rated", {
      params: {
        language: "pt-BR",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Top Rated TV shows:", error);
  }
};

const fetchNowPlayingMovies = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
      params: {
        language: "pt-BR",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Now Playing Movies:", error);
  }
};

const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
      params: {
        language: "pt-BR",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Top Rated Movies:", error);
  }
};

const fetchUpcomingMovies = async () => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming", {
      params: {
        language: "pt-BR",
        page: 1,
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Upcoming Movies:", error);
  }
};

export {
  fetchRandomMovieTvDetails,
  fetchSearchMovies,
  fetchSearchCollection,
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchMoviesDetailsById,
  fetchTvDetailsById,
  fetchColletionDetailsById,
  fetchAiringTodayTVShows,
  fetchOnTheAirTVShows,
  fetchTopRatedTVShows,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
};
