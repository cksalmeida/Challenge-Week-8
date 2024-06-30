import { useState } from "react";
import { buttonDefaultProps } from "../types/Button";
import checkVector from "../assets/checkVector.svg";
import {
  addToFavorites,
  addToWatchlist,
  removeFavorites,
  removeWatchlist,
} from "../apiService/apiService";

const ButtonRounded = ({
  img,
  hoverImg,
  alt,
  detail,
  sessionId,
}: buttonDefaultProps) => {
  const [currentImg, setCurrentImg] = useState(img);
  const [checked, setChecked] = useState(false);

  const addFavorite = async () => {
    if (!detail?.id || !sessionId) return null;
    const mediaType = detail?.runtime ? "movie" : "tv";
    await addToFavorites(sessionId, mediaType, detail.id);
  };

  const rmFavorite = async () => {
    if (!detail?.id || !sessionId) return null;
    const mediaType = detail?.runtime ? "movie" : "tv";
    await removeFavorites(sessionId, mediaType, detail.id);
  };

  const addWatchlist = async () => {
    if (!detail?.id || !sessionId) return null;
    const mediaType = detail?.runtime ? "movie" : "tv";
    console.log("first");
    await addToWatchlist(sessionId, mediaType, detail.id);
  };
  const rmWatchlist = async () => {
    if (!detail?.id || !sessionId) return null;
    const mediaType = detail?.runtime ? "movie" : "tv";
    await removeWatchlist(sessionId, mediaType, detail.id);
  };

  const handleMouseEnter = () => {
    setCurrentImg(hoverImg);
  };

  const handleMouseLeave = () => {
    setCurrentImg(img);
  };

  const handleClick = () => {
    if (alt === "Favorite") {
      checked ? rmFavorite() : addFavorite();
    } else {
      checked ? rmWatchlist() : addWatchlist();
    }
    setChecked(!checked);
  };

  return (
    <button
      className={`border border-white rounded-full h-[48px] w-[48px] flex justify-center items-center transition-all ${
        checked
          ? "hover:bg-black hover:opacity-60 duration-[150ms] ease-linear"
          : "hover:bg-white duration-[100ms] ease-linear"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={checked !== true ? currentImg : checkVector} alt={alt} />
    </button>
  );
};

export default ButtonRounded;
