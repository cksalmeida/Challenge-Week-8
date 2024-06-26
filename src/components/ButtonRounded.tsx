import { buttonDefaultProps } from "../types/Button";

const ButtonRounded = ({ img, alt }: buttonDefaultProps) => {
  return (
    <button className="border border-white rounded-full h-[48px] w-[48px] flex justify-center items-center">
      <img src={img} alt={alt} />
    </button>
  );
};

export default ButtonRounded;
