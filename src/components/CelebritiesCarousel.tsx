import { useEffect, useState } from "react";
import Carrossel from "../components/Carrossel";
import { fetchPopularActors, fetchActorMovies } from "../apiService/apiService";
import ActorList from "./CelebritiesCard";

const ActorCarousels = () => {
  const [selectedActors, setSelectedActors] = useState([]);
  const [actorMovies, setActorMovies] = useState({});

  const fetchActorsAndMovies = async () => {
    const actors = await fetchPopularActors();
    const selected = actors.slice(0, 3);
    setSelectedActors(selected);

    const moviesByActor = {};
    for (const actor of selected) {
      const movies = await fetchActorMovies(actor.id);
      moviesByActor[actor.id] = movies.filter((movie) => movie.poster_path !== null);
    }
    setActorMovies(moviesByActor);
  };

  useEffect(() => {
    fetchActorsAndMovies();
  }, []);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14">
      <ActorList actors={selectedActors} />
      {selectedActors.map((actor) => (
        <div key={actor.id}>
          <Carrossel 
            query={actorMovies[actor.id] || []} 
            page="movies" 
            title={`Filmes de ${actor.name}`} />
        </div>
      ))}
      </div>
  );
};

export default ActorCarousels;
