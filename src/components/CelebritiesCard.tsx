import Carrossel from "./Carrossel";
import { Actor, Movie } from "../types/Tmdb";

interface Props {
  actors: Actor[];
  actorMovies: { [key: string]: Movie[] };
}

const ActorList = ({ actors, actorMovies }: Props) => {
  return (
    <>
      {actors.map((actor) => (
        <div key={actor.id} className="flex flex-row gap-4 ">
          <div className="flex items-center gap-4">
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className="md:min-w-60 md:h-[326px] object-cover rounded-lg"
            />
          </div>
          <Carrossel
            query={actorMovies[actor.id] || []}
            page="filmes"
            title={`Filmes de ${actor.name}`}
          />
        </div>
      ))}
    </>
  );
};
export default ActorList;
