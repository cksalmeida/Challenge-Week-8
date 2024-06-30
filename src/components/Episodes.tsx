import React from 'react';

interface Episode {
  cover: string;
  title: string;
  duration: string;
  description: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

const Episodes: React.FC<EpisodeListProps> = ({ episodes }) => {
  return (
    <div className='mb-10'>
      <h3 className="text-2xl font-bold mb-4 text-left mx-6 text-white md:mx-16 md:text-left">Episódios</h3>
      <div className="flex flex-wrap justify-center md:justify-start mx-4 md:mx-14">
        {episodes.map((episode, index) => (
          <div key={index} className="w-1/2 sm:w-1/2 p-2 sm:p-4 md:mb-0 md:w-1/2 md:p-4">
            <div className="bg-neutral-100 bg-opacity-10 rounded-lg shadow-lg overflow-hidden flex flex-col md:bottom-1 md:flex-row md:w-630px md:h-128px">
              <img src={episode.cover} alt={episode.title} className="w-full h-auto sm:w-193px md:w-auto md:h-full" />
              <div className="p-4 flex-1 flex flex-col justify-between md:justify-start">
                <div className="flex flex-col justify-center md:flex-row md:justify-between items-start md:items-center mb-2">
                  <h2 className="text-base text-neutral-100 font-workSans font-bold">{episode.title}</h2>
                  <p className="text-neutral-200 text-xs font-workSans md:ml-2">{episode.duration}</p>
                </div>
                <p className="text-neutral-200 text-sm font-workSans">{episode.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
