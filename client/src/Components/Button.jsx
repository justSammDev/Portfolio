import { MoveRight } from "lucide-react";
import { useState } from "react";

const Button = ({ Text }) => {
  const [arrowDisplay, setArrowDisplay] = useState(false);
  const handleArrowDisplay = () => {
    setArrowDisplay(true);
  };
  const handleArrowHidden = () => {
    setArrowDisplay(false);
  };
  const opacity = arrowDisplay ? "opacity-100" : "opacity-0";
  const width = arrowDisplay ? "w-7" : "w-0";
  return (
    <div
      className=" cursor-pointer font-exo text-xl border-2 px-3 py-2 rounded-3xl flex flex-row items-center justify-center gap-2 w-[140px] leading-normal"
      onMouseEnter={handleArrowDisplay}
      onMouseLeave={handleArrowHidden}
    >
      {Text}
      <MoveRight
        className={` ${width}  ${opacity} transition-all duration-200 ease-in-out`}
      />
    </div>
  );
};

export default Button;
