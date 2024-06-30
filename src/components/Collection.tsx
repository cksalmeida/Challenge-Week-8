import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { fetchColletionDetailsById } from "../apiService/apiService";
import { detail } from "../types/Tmdb";

const Collection = () => {
  const [collectionClicked, setCollectionClicked] = useState<detail | null>(
    null
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTvDetails = async () => {
      if (id) {
        const colletion = await fetchColletionDetailsById(id);
        setCollectionClicked(colletion);
      }
    };
    fetchTvDetails();
  }, [id]);

  return (
    <div>
      <Hero detail={collectionClicked} id={id ? id : null} />
      <Footer />
    </div>
  );
};

export default Collection;
