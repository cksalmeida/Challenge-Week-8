import React, { useState, useEffect } from 'react';
import Carrossel from '../components/Carrossel';
import { fetchColletionDetailsById } from '../apiService/apiService';

type CollectionCarouselProps = {
  collectionId: string;
};

const CollectionCarousel: React.FC<CollectionCarouselProps> = ({ collectionId }) => {
  const [collection, setCollection] = useState<any[]>([]);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const data = await fetchColletionDetailsById(collectionId);
        if (data && data.parts) {
          const filteredMovies = data.parts.filter((movie: any) => movie.poster_path !== null);
          setCollection(filteredMovies);
        }
      } catch (error) {
        console.error('Error fetching collection details:', error);
      }
    };

    if (collectionId) {
      fetchCollection();
    }
  }, [collectionId]);

  return (
    <div>
      {collection.length > 0 ? (
        <Carrossel query={collection} page="movies" title="Filmes da Coleção" />
      ) : (
        <p>Carregando coleção...</p>
      )}
    </div>
  );
};

export default CollectionCarousel;
