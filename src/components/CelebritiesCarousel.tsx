import { useEffect, useState } from "react";
import { fetchPopularActors, fetchActorMovies } from "../apiService/apiService";
import ActorList from "./CelebritiesCard";
import { Actor, Movie } from "../types/Tmdb";

const ActorCarousels = () => {
  const [selectedActors, setSelectedActors] = useState<Actor[]>([]);
  const [actorMovies, setActorMovies] = useState<{ [key: string]: Movie[] }>(
    {}
  );

  const fetchActorsAndMovies = async () => {
    const actors = await fetchPopularActors();
    const selected = actors.slice(0, 3);
    setSelectedActors(selected);

    const moviesByActor: { [key: string]: Movie[] } = {};
    for (const actor of selected) {
      const movies: Movie[] = await fetchActorMovies(actor.id);
      moviesByActor[actor.id] = movies.filter(
        (movie) => movie.poster_path !== null
      );
    }
    setActorMovies(moviesByActor);
  };

  useEffect(() => {
    fetchActorsAndMovies();
  }, []);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14 overflow-hidden">
      <ActorList actors={selectedActors} actorMovies={actorMovies} />
    </div>
  );
};
export default ActorCarousels;
