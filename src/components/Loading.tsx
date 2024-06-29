import { useEffect, useState } from "react";
import Loading1 from "../assets/loading1.svg";
import Loading2 from "../assets/loading2.svg";
import Loading3 from "../assets/loading3.svg";
import Loading4 from "../assets/loading4.svg";

const Loading = () => {
  const [stage, setStage] = useState(0);
  const loadings = [Loading1, Loading2, Loading3, Loading4];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) => (prevStage + 1) % loadings.length);
    }, 190);

    return () => clearInterval(interval);
  }, [loadings.length]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <img src={loadings[stage]} alt="Loading" />
    </div>
  );
};

export default Loading;
