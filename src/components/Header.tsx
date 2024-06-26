import compassLogo from "../assets/logo/compass_uol_negativo_1.svg";
import homeIcon from "../assets/icons/home.svg";
import tvIcon from "../assets/icons/tv.svg";
import movieIcon from "../assets/icons/movie.svg";
import starIcon from "../assets/icons/star.svg";
import searchIcon from "../assets/icons/search.svg";
import plusIcon from "../assets/icons/plus.svg";
import userIcon from "../assets/logged_user.svg";
import { useState } from "react";
import DropdownMenuUser from "./DropdownMenuUser";

const Header = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-4 py-4 px-8 items-center md:justify-between bg-black">
        <img src={compassLogo} alt="compassLogo" className="w-[200px]" />
        <div className="flex flex-row md:order-2 justify-center items-center font-workSans text-base text-white gap-4 w-full md:justify-end">
          <div className="flex flex-row gap-2">
            <button className="py-2 px-4 flex flex-row justify-center items-center gap-2">
              <img src={searchIcon} alt="searchIcon" />
              <p>Buscar</p>
            </button>
            <a
              href="#"
              className="py-2 px-4 flex flex-row justify-center items-center gap-2"
            >
              <img src={plusIcon} alt="plusIcon" />
              <p>Minha Lista</p>
            </a>
          </div>
          <button
            onClick={() => setOpenDropdownMenu((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={openDropdownMenu}
            className="relative"
          >
            <img src={userIcon} alt="userIcon" />
            {openDropdownMenu && <DropdownMenuUser />}
          </button>
        </div>
        <div className="w-full">
          <nav className="font-workSans text-base text-white md:order-1 flex flex-row flex-wrap justify-center md:justify-start">
            <div className="py-2 px-4">
              <a href="#" className="flex gap-2">
                <img src={homeIcon} alt="homeIcon" />
                <p>Início</p>
              </a>
            </div>
            <div className="py-2 px-4">
              <a href="#" className="flex gap-2">
                <img src={tvIcon} alt="tvIcon" />
                <p>Séries</p>
              </a>
            </div>
            <div className="py-2 px-4">
              <a href="#" className="flex gap-2">
                <img src={movieIcon} alt="movieIcon" />
                <p>Filmes</p>
              </a>
            </div>
            <div className="py-2 px-4">
              <a href="#" className="flex gap-2">
                <img src={starIcon} alt="starIcon" />
                <p>Celebridades</p>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
