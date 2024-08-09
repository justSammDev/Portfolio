import { useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  return (
    <section id="home" className="HOME w-full block">
      <div className="lg:w-10/12 mx-auto hero-bg py-14">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <div
            className={`EYELID border relative w-7/12  mx-auto rounded-[100%/100%] h-72 z-0 overflow-hidden ${
              clicked ? "animate-eyeClick" : ""
            }`}
            onClick={handleClick}
          >
            <div className="EYEBALL border absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 z-10 flex bg-eye-background filter grayscale-[100%] items-center justify-center aspect-square  rounded-full bg-300% bg-center w-5/12">
              <div className="text-7xl whitespace-nowrap relative z-20 font-aclonica bg-clip-text bg-nav-pattern text-transparent leading-normal">
                Sam Dev
              </div>
            </div>
          </div>
          <div className="bg-clip-text text-3xl bg-nav-pattern text-transparent font-lobster">
            <h3>I am Samridda Devkota.</h3>
            <h3> A self-taught web developer based on Kathmandu.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
