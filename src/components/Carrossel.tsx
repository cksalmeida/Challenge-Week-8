import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img from "../assets/large.png";

const Carrossel = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          autoplay: true,
        }}
      >
        <SplideSlide className="flex justify-center items-center">
          <img src={img} alt="Description" className="mx-auto" />
        </SplideSlide>
        <SplideSlide className="flex justify-center items-center">
          <img src={img} alt="Description" className="mx-auto" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carrossel;
