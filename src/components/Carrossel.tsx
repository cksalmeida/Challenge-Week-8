import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface Props {
  query: object[];
  title: string;
}

const Carrossel = ({ query, title }: Props) => {
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
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {query.map((item: object) => (
          <SplideSlide key={item?.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt={item?.name}
              className="rounded-lg h-[361px] w-60"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrossel;
