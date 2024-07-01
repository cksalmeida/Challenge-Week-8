export interface detail {
  adult?: boolean;
  backdrop_path: string;
  parts?: collectionParts[];
  budget?: number;
  created_by?: {
    credit_id?: string;
    gender?: number;
    id?: number;
    name?: string;
    original_name?: string;
    profile_path?: string;
  }[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: {
    id?: number;
    name?: string;
  }[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: {
    air_date?: string;
    episode_number?: number;
    episode_type?: string;
    id?: number;
    name?: string;
    overview?: string;
    production_code?: string;
    runtime?: number | null;
    season_number?: number;
    show_id?: number;
    still_path?: string | null;
    vote_average?: number;
    vote_count?: number;
  } | null;
  name?: string;
  networks?: {
    id?: number;
    logo_path?: string | null;
    name?: string;
    origin_country?: string;
  }[];
  next_episode_to_air?: {
    air_date?: string;
    episode_number?: number;
    episode_type?: string;
    id?: number;
    name?: string;
    overview?: string;
    production_code?: string;
    runtime?: number | null;
    season_number?: number;
    show_id?: number;
    still_path?: string | null;
    vote_average?: number;
    vote_count?: number;
  } | null;
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id?: number;
    logo_path?: string | null;
    name?: string;
    origin_country?: string;
  }[];
  production_countries?: {
    iso_3166_1?: string;
    name?: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  seasons?: season[];
  spoken_languages?: {
    english_name?: string;
    iso_639_1?: string;
    name?: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  type?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface genre {
  id: number;
  name: string;
}

export interface season {
  air_date?: string;
  episode_count?: number;
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string | null;
  season_number?: number;
}

export interface collection {
  id?: number;
  name?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string;
  parts?: collectionParts[];
}

export interface collectionParts {
  backdrop_path?: string | null;
  id?: number;
  title?: string;
  original_title?: string;
  overview?: string;
  poster_path?: string | null;
  media_type?: string;
  adult?: boolean;
  original_language?: string;
  genre_ids?: number[];
  popularity?: number;
  release_date?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: [];
  guest_stars: GuestStar[];
}

interface GuestStar {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Actor {
  id: string;
  name: string;
  profile_path: string | null;
}
