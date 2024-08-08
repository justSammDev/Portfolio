import { useEffect, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX - 27, y: e.clientY - 27 });
    };

    const homeElement = document.querySelector("#home");
    if (homeElement) {
      window.addEventListener("mousemove", handleMouseMove);
      console.log("In home");
    } else {
      console.log("not in home");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section id="home" className="HOME w-full block">
      <div className="lg:w-10/12 mx-auto hero-bg">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <div className="EYELID border relative w-5/12 -rotate-[40deg] mx-auto rounded-tr-full rounded-bl-full h-96 z-0 overflow-hidden">
            <div className="EYEBALL border absolute left-[28%] top-[7%] z-10 flex bg-eye-background items-center justify-center aspect-square rotate-[40deg] rounded-full bg-300% bg-center w-7/12">
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
