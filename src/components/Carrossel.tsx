import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

interface Props {
  query: object[];
  title: string;
}

const Carrossel = ({ query, title }: Props) => {
  return (
    <div className="flex flex-col items-start pb-14">
      <h4 className="ml-1 md:ml-24 lg:ml-16 mb-2 font-workSans font-bold text-xl text-white">
        {title}
      </h4>
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          autoplay: true,
          breakpoints: {
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        {query.map((item: object) => (
          <SplideSlide
            className="flex justify-center items-center h-[361px] w-60"
            key={item?.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt={item?.name}
              className="mx-auto h-full rounded-lg"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrossel;
