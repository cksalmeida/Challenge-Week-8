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

const fetchRandomMovieTvDetails = async () => {
  try {
    const trendingResults = await fetchTrending();
    const randomIndex = Math.floor(Math.random() * trendingResults.length);
    const randomItem = trendingResults[randomIndex];

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
    } else {
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
    console.error(error);
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
    console.error("Error fetching random movie or TV details:", error);
  }
};

export { fetchRandomMovieTvDetails, fetchSearchMovies, fetchSearchCollection };
