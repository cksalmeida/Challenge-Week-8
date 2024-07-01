import axios from "axios";
import { detail } from "../types/Tmdb";

const token: string = import.meta.env.VITE_TMDB_API_KEY;
const accountId: string = import.meta.env.VITE_TMDB_ACCOUNT_ID;

const fetchRandomMovieTvDetails = async (
  detail: string
): Promise<detail | undefined> => {
  try {
    let detailResults;
    let movie = false;
    let tv = false;
    if (detail === "randomTrending") {
      detailResults = await fetchTrending();
    } else if (detail === "randomMovieTrending") {
      detailResults = await fetchPopularMovies();
      movie = true;
    } else if (detail === "randomTvTrending") {
      detailResults = await fetchPopularTVShows();
      tv = true;
    }
    const randomIndex = Math.floor(Math.random() * detailResults.length);
    const randomItem = detailResults[randomIndex];

    if (randomItem.media_type === "movie" || movie) {
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
    } else if (randomItem.media_type === "tv" || tv) {
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

const getSessionWithToken = async (requestToken: string) => {
  console.log(requestToken);
  try {
    const url = "https://api.themoviedb.org/3/authentication/session/new";

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const data = {
      request_token: requestToken,
    };

    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching session with token:", requestToken, error);
    throw error;
  }
};

const addToFavorites = async (
  sessionId: string,
  mediaType: string,
  mediaId: number
) => {
  const url = `https://api.themoviedb.org/3/account/${accountId}/favorite?session_id=${sessionId}`;

  const body = {
    media_type: mediaType,
    media_id: mediaId,
    favorite: true,
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};

const removeFavorites = async (
  sessionId: string,
  mediaType: string,
  mediaId: number
) => {
  const url = `https://api.themoviedb.org/3/account/${accountId}/favorite?session_id=${sessionId}`;

  const body = {
    media_type: mediaType,
    media_id: mediaId,
    favorite: false,
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to favorites:", error);
  }
};

const addToWatchlist = async (
  sessionId: string,
  mediaType: string,
  mediaId: number
) => {
  const url = `https://api.themoviedb.org/3/account/21347247/watchlist?session_id=${sessionId}`;

  const body = {
    media_type: mediaType,
    media_id: mediaId,
    watchlist: true,
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to watchlist:", error);
  }
};

const removeWatchlist = async (
  sessionId: string,
  mediaType: string,
  mediaId: number
) => {
  const url = `https://api.themoviedb.org/3/account/21347247/watchlist?session_id=${sessionId}`;

  const body = {
    media_type: mediaType,
    media_id: mediaId,
    watchlist: false,
  };

  try {
    const response = await axios.post(url, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to watchlist:", error);
  }
};

const getGuestSession = async () => {
  try {
    const url = "https://api.themoviedb.org/3/authentication/guest_session/new";

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(url, { headers });
    return response.data.guest_session_id;
  } catch (error) {
    console.error("Error fetching guest session:", error);
    throw error;
  }
};

const getFavoriteMovies = async (sessionId: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`,
    params: {
      language: "pt-BR",
      page: "1",
      session_id: sessionId,
      sort_by: "created_at.asc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
  }
};

const getFavoriteTVShows = async (sessionId: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/account/${accountId}/favorite/tv`,
    params: {
      language: "pt-BR",
      page: "1",
      session_id: sessionId,
      sort_by: "created_at.asc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching favorite TV shows:", error);
    throw error;
  }
};

const getWatchlistMovies = async (sessionId: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies`,
    params: {
      language: "pt-BR",
      page: "1",
      sort_by: "created_at.asc",
      session_id: sessionId,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching watchlist movies:", error);
    throw error;
  }
};

const getWatchlistTv = async (sessionId: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv`,
    params: {
      language: "pt-BR",
      page: "1",
      sort_by: "created_at.asc",
      session_id: sessionId,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching watchlist TV shows:", error);
    throw error;
  }
};

const getAxiosSearchConfig = (category: string, query: string) => {
  const baseParams = {
    query,
    include_adult: "false",
    language: "pt-BR",
    page: "1",
  };

  let url = "";
  switch (category) {
    case "Filmes":
      url = "https://api.themoviedb.org/3/search/movie";
      break;
    case "Séries":
      url = "https://api.themoviedb.org/3/search/tv";
      break;
    case "Coleções":
      url = "https://api.themoviedb.org/3/search/collection";
      break;
    case "Celebridades":
      url = "https://api.themoviedb.org/3/search/person";
      break;
    default:
      url = "https://api.themoviedb.org/3/search/multi";
      break;
  }

  return {
    method: "GET",
    url,
    params: baseParams,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

const fetchAxiosSearch = async (category: string, query: string) => {
  const config = getAxiosSearchConfig(category, query);
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export {
  fetchAxiosSearch,
  fetchRandomMovieTvDetails,
  fetchSearchMovies,
  fetchSearchCollection,
  fetchPopularMovies,
  fetchPopularTVShows,
  fetchMoviesDetailsById,
  fetchTvDetailsById,
  fetchColletionDetailsById,
  getSessionWithToken,
  addToFavorites,
  removeFavorites,
  addToWatchlist,
  removeWatchlist,
  getGuestSession,
  getFavoriteMovies,
  getFavoriteTVShows,
  getWatchlistMovies,
  getWatchlistTv,
  fetchAiringTodayTVShows,
  fetchOnTheAirTVShows,
  fetchTopRatedTVShows,
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
};
