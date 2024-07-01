import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";

interface Props {
  query: object[];
  title: string;
  page: string;
  seasonNumber?: boolean;
}

interface Item {
  id?: string;
  name?: string;
  poster_path?: string;
  season_number?: string;
}

const Carrossel = ({ query, title, page, seasonNumber }: Props) => {
  const navigate = useNavigate();

  const handleItemClick = (id: string | undefined) => {
    navigate(`/home/${page}/${id}`);
  };

  return (
    <div className="flex flex-col items-start">
      <h4 className="mb-2 font-workSans font-bold text-xl text-white">
        {title}
      </h4>
      <Splide
        options={{
          type: "slide",
          rewind: true,
          rewindByDrag: true,
          perPage: 7,
          gap: "20px",
          autoplay: true,
          pagination: false,
          arrows: false,
          breakpoints: {
            375: { perPage: 1 },
            768: { perPage: 2 },
            1024: { perPage: 3 },
            1280: { perPage: 4 },
            1440: { perPage: 5 },
            1600: { perPage: 6 },
          },
        }}
      >
        {query.map((item: Item) => (
          <SplideSlide
            key={item?.id}
            onClick={() =>
              handleItemClick(seasonNumber ? item.season_number : item.id)
            }
            className={"cursor-pointer"}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt={item?.name}
              className="rounded-lg h-full"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrossel;
