import axios from "axios";

const token: string = import.meta.env.VITE_TMDB_API_KEY;

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

const fetchRandomMovieTvDetails = async (detail: string) => {
  try {
    let detailResults;
    if (detail === "randomTrending") {
      detailResults = await fetchTrending();
    } else if (detail === "randomMovieTrending") {
      detailResults = await fetchTrendingMovies();
    } else if (detail === "randomTvTrending") {
      detailResults = await fetchTrendingTVShows();
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
    }
  } catch (error) {
    console.error("Error fetching random movie or TV details:", error);
  }
};

const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending Movies:", error);
  }
};

const fetchTrendingTVShows = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day",
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
    console.error("Error fetching trending TV shows:", error);
  }
};

export { fetchRandomMovieTvDetails };
