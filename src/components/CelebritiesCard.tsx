const ActorList = ({ actors }) => {
  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14">
      {actors.map((actor) => (
        <div key={actor.id} className="flex items-center gap-4">
          <img 
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
            alt={actor.name} 
            className=""
          />
          <span className="text-lg">{actor.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ActorList;
