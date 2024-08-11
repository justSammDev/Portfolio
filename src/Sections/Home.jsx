import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const container = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [hoverImage, setHoverImage] = useState({ src: "", visible: false });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = Math.round((e.clientX * 100) / window.innerWidth);
      const imgX = e.clientX;
      const y = Math.round((e.clientY * 100) / window.innerHeight);
      const imgY = e.clientY;

      setMousePosition({ x: x, y: y });
      setImagePosition({ x: imgX, y: imgY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleHoverStart = (e) => {
    const imageSrc = e.target.getAttribute("data-image");
    setHoverImage({ src: imageSrc, visible: true });
  };

  const handleHoverEnd = () => {
    setHoverImage({ ...hoverImage, visible: false });
  };

  // useGSAP(
  //   () => {
  //     gsap.from(".EYELID", { height: 0 });
  //   },
  //   { scope: container }
  // );
  return (
    <section id="home" className="HOME w-full block">
      <div className="lg:w-10/12 mx-auto hero-bg py-14  lg:min-h-auto">
        <div className="flex flex-col items-center gap-10 justify-center bg-clip-text bg-nav-pattern text-transparent ">
          <h2 className="font-lobster text-7xl md:text-8xl lg:text-[10rem] leading-none">
            Hell<span className="lg:hidden">o</span>
            <div
              className={`EYE hidden relative w-48 h-28 mr-7 border border-gray-500 lg:inline-block rounded-full`}
            >
              <div
                className={`aspect-square h-5/6 top-1/2 -translate-y-1/2 absolute rounded-full`}
                style={{
                  left: `${50 - mousePosition.x / 2}%`,
                }}
              >
                <img
                  src="/src/assets/eyeImage.jpg"
                  alt="Eye"
                  className="w-full h-full object-cover rounded-full grayscale"
                />
              </div>
            </div>
            ,I am <br />
            Samridda <br />
            Devk<span className="lg:hidden">o</span>
            <div
              className={`EYE w-48 hidden relative h-28 border border-gray-500 lg:inline-block rounded-full`}
            >
              <div
                className={`aspect-square h-5/6 top-1/2 -translate-y-1/2 absolute rounded-full`}
                style={{
                  left: `${mousePosition.y / 2}%`,
                }}
              >
                <img
                  src="/src/assets/eyeImage.jpg"
                  alt="Eye"
                  className="w-full h-full object-cover rounded-full grayscale"
                />
              </div>
            </div>
            ta.
          </h2>
          <h3 className="font-exo text-2xl text-center lg:text-4xl pt-10">
            A web developer based on{" "}
            <div
              className="inline-block relative"
              data-image="/src/assets/kathmanduMap.jpg"
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
            >
              {hoverImage.visible && (
                <img
                  src={hoverImage.src}
                  className="fixed pointer-events-none z-10 rounded-3xl border object-cover border-gray-700 h-72 aspect-video grayscale object-left"
                  alt="Hover image"
                  loading="lazy"
                  style={{
                    top: `${imagePosition.y - 170}px`,
                    left: `${imagePosition.x}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              )}
              Kathmandu.
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
