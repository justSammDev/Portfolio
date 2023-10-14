import Button from "../Components/Button";
// import { useState } from "react";
import MouseFollower from "../Components/MouseFollower";

function Home() {
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const textTranparent = isHovered ? "text-transparent" : "text-white";

  return (
    <div className=" h-screen min-h-[650px] flex justify-center items-center ">
      <div
        className={`flex flex-col justify-center items-center gap-2 w-fit bg-hero-pattern bg-clip-text `}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className=" text-8xl font-aclonica leading-normal">Sam Dev</div>
        <div className=" text-3xl font-lobster leading-normal mb-2">
          <span>I am Samridda Devkota.</span>
          <br />
          <span> A web developer based on Kathmandu</span>
        </div>
        <Button Text={"Hire Me"} />
        <MouseFollower />
      </div>
    </div>
  );
}

export default Home;
