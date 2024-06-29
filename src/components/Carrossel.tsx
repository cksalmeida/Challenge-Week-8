import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";

interface Props {
  query: object[];
  title: string;
  page: string;
}

const Carrossel = ({ query, title, page }: Props) => {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/home/${page}/${id}`);
  };

  return (
    <div className="flex flex-col items-start pb-14 pl-4 md:pl-20">
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
        {query.map((item: object) => (
          <SplideSlide
            key={item?.id}
            onClick={() => handleItemClick(item.id)}
            className={"cursor-pointer"}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt={item?.name}
              className="rounded-lg h-[361px] w-full max-w-xs"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrossel;
