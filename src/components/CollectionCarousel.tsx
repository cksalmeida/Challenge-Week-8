import React, { useState, useEffect } from "react";
import Carrossel from "../components/Carrossel";
import { fetchColletionDetailsById } from "../apiService/apiService";
import { Movie } from "../types/Tmdb";

type CollectionCarouselProps = {
  collectionId: string | null;
};

const CollectionCarousel: React.FC<CollectionCarouselProps> = ({
  collectionId,
}) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        if (!collectionId) return;
        const data = await fetchColletionDetailsById(collectionId);
        if (data && data.parts) {
          const filteredMovies = data.parts.filter(
            (movie: Movie) => movie.poster_path !== null
          );
          setCollection(filteredMovies);
        }
      } catch (error) {
        console.error("Error fetching collection details:", error);
      }
    };

    if (collectionId) {
      fetchCollection();
    }
  }, [collectionId]);

  return (
    <div className="pb-14 pl-4 md:pl-20 flex flex-col gap-14 overflow-hidden">
      {collection.length > 0 ? (
        <Carrossel query={collection} page="filmes" title="Filmes da Coleção" />
      ) : (
        <p>Carregando coleção...</p>
      )}
    </div>
  );
};

export default CollectionCarousel;
