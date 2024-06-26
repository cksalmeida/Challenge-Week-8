import { buttonDefaultProps } from "../types/Button";

const ButtonDefault = ({
  img,
  alt,
  children,
  className,
}: buttonDefaultProps) => {
  return (
    <button
      className={`px-6 rounded gap-3 flex items-center h-[48px] ${className}`}
    >
      <img src={img} alt={alt} />
      <span className="font-bold text-base tracking-[0.14rem]">{children}</span>
    </button>
  );
};

export default ButtonDefault;
