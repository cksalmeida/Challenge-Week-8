import { useState } from "react";
import { buttonDefaultProps } from "../types/Button";
import checkVector from "../assets/checkVector.svg";

const ButtonRounded = ({ img, hoverImg, alt }: buttonDefaultProps) => {
  const [currentImg, setCurrentImg] = useState(img);
  const [favorite, setFavorite] = useState(false);

  const handleMouseEnter = () => {
    setCurrentImg(hoverImg);
  };

  const handleMouseLeave = () => {
    setCurrentImg(img);
  };

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <button
      className={`border border-white rounded-full h-[48px] w-[48px] flex justify-center items-center transition-all ${
        favorite
          ? "hover:bg-black hover:opacity-60 duration-[150ms] ease-linear"
          : "hover:bg-white duration-[100ms] ease-linear"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={favorite !== true ? currentImg : checkVector} alt={alt} />
    </button>
  );
};

export default ButtonRounded;
