import React from "react";
import { Episode } from "../types/Tmdb";

interface EpisodeListProps {
  episodes: Episode[];
}

const Episodes: React.FC<EpisodeListProps> = ({ episodes }) => {
  console.log(episodes);
  return (
    <div className="mb-10 items-center">
      <h3 className="text-2xl font-bold mb-4 text-left mx-6 text-white md:mx-0 md:text-left">
        Episódios
      </h3>
      <div className="flex flex-wrap justify-start md:ml-0 md:mr-14 md:justify-start mx-4 md:mx-0">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="w-1/2 sm:w-1/2 p-2 md:mb-0 md:w-1/2"
          >
            <div className="bg-neutral-100 bg-opacity-10 rounded-lg shadow-lg overflow-hidden flex flex-col md:h-[128px] md:flex-row md:items-stretch">
              {episode.still_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
                  alt={episode.name}
                  className="w-full h-auto md:w-1/3 md:h-auto object-cover"
                />
              ) : null}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex flex-col justify-center md:flex-row md:justify-between items-start md:items-center mb-2">
                  <h2 className="text-base text-neutral-100 font-workSans font-bold overflow-hidden overflow-ellipsis whitespace-nowrap" style={{ maxWidth: 'calc(100% - 1.25rem)' }}>
                    {episode.name}
                  </h2>
                  <p className="text-neutral-200 text-xs font-workSans md:ml-2">
                    {episode.runtime} min
                  </p>
                </div>
                <p className="text-neutral-200 text-sm font-workSans flex-grow overflow-hidden overflow-ellipsis" style={{ maxHeight: '4.5rem' }}>
                  {episode.overview}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;




