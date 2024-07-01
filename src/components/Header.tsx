import compassLogo from "../assets/logo/compass_uol_negativo_1.svg";
import homeIcon from "../assets/icons/home.svg";
import tvIcon from "../assets/icons/tv.svg";
import movieIcon from "../assets/icons/movie.svg";
import starIcon from "../assets/icons/star.svg";
import searchIcon from "../assets/icons/search.svg";
import plusIcon from "../assets/icons/plus.svg";
import userIcon from "../assets/logged_user.svg";
import closeIcon from "../assets/icons/close.svg";
import { useEffect, useState } from "react";
import DropdownMenuUser from "./DropdownMenuUser";
import { useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/home") {
      setHomePage(true);
    }
  }, [location.pathname]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tudo");
  const navigate = useNavigate();

  const toggleSearchBox = () => {
    setShowSearchBox((prev) => !prev);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query) {
      navigate(`/home/buscar?query=${query}&category=${category}`);
      setShowSearchBox(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  return (
    <header className="relative w-full z-[20] header">
      <div className="flex flex-col md:flex-row gap-4 py-4 px-8 items-center md:justify-between">
        <img src={compassLogo} alt="compassLogo" className="w-[200px]" />
        <div className="flex flex-row md:order-2 justify-center items-center font-workSans text-base text-white gap-4 w-full md:justify-end">
          {showSearchBox ? (
            <form
              onSubmit={handleSearch}
              className="px-3 flex flex-col items-center md:flex-wrap md:flex-row gap-4 bg-neutral-700"
            >
              <input
                className="bg-neutral-700 font-lato md:w-[187px] pt-3 md:py-1 text-base"
                type="text"
                placeholder="Filme, série ou celebridade"
                value={query}
                onChange={handleChange}
              />
              <div className="flex flex-row gap-3">
                <button className="p-3 border-solid">
                  <select
                    className="bg-neutral-700 w-24 h-[43px"
                    name="options"
                    id="options"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value="Tudo">Tudo</option>
                    <option value="Filmes">Filmes</option>
                    <option value="Coleções">Coleções</option>
                    <option value="Séries">Séries</option>
                    <option value="Celebridades">Celebridades</option>
                  </select>
                </button>
                <button type="submit">
                  <img src={searchIcon} alt="searchIcon" />
                </button>
                <button type="button" onClick={toggleSearchBox}>
                  <img src={closeIcon} alt="closeIcon" />
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-row gap-2">
              <button
                onClick={toggleSearchBox}
                className="py-2 px-4 flex flex-row justify-center items-center gap-2"
              >
                <img src={searchIcon} alt="searchIcon" />
                <p>Buscar</p>
              </button>
              <NavLink
                to="/home/conta"
                className={({ isActive }) =>
                  isActive
                    ? "py-2 px-4 flex flex-row justify-center items-center gap-2 text-secondary"
                    : "py-2 px-4 flex flex-row justify-center items-center gap-2"
                }
              >
                <img src={plusIcon} alt="plusIcon" />
                <p>Minha Lista</p>
              </NavLink>
            </div>
          )}

          <button
            onClick={() => setOpenDropdownMenu((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={openDropdownMenu}
            className="relative"
          >
            <img
              src={userIcon}
              alt="userIcon"
              className="w-12 h-12 max-w-none max-h-none"
            />
            {openDropdownMenu && <DropdownMenuUser />}
          </button>
        </div>
        <div className="w-full">
          <nav className="font-workSans text-base text-white md:order-1 flex flex-row flex-wrap justify-center md:justify-start">
            <div className="py-2 px-4">
              <NavLink
                to="/home"
                className={
                  homePage ? "flex gap-2 text-secondary" : "flex gap-2"
                }
              >
                <img src={homeIcon} alt="homeIcon" />
                <p>Início</p>
              </NavLink>
            </div>
            <div className="py-2 px-4">
              <NavLink
                to="/home/series"
                className={({ isActive }) =>
                  isActive ? "flex gap-2 text-secondary" : "flex gap-2"
                }
              >
                <img src={tvIcon} alt="tvIcon" />
                <p>Séries</p>
              </NavLink>
            </div>
            <div className="py-2 px-4">
              <NavLink
                to="/home/filmes"
                className={({ isActive }) =>
                  isActive ? "flex gap-2 text-secondary" : "flex gap-2"
                }
              >
                <img src={movieIcon} alt="movieIcon" />
                <p>Filmes</p>
              </NavLink>
            </div>
            <div className="py-2 px-4">
              <NavLink
                to="/home/celebridades"
                className={({ isActive }) =>
                  isActive ? "flex gap-2 text-secondary" : "flex gap-2"
                }
              >
                <img src={starIcon} alt="starIcon" />
                <p>Celebridades</p>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
