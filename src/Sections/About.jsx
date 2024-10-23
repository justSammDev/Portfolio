import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cat, sam2 } from "../assets/images";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const [mouseHover, setMouseHover] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top 60%",
        scrub: true,
        once: true,
        // markers: true,
      },
    });
    mm.add("(min-width:1024px)", () => {
      tl.to(".ABOUT_ME_HEADING", { x: "20rem" }, "<");
    });
    mm.add("(max-width:767px)", () => {
      tl.to(".ABOUT_ME_HEADING", { x: "5rem" }, "<");
    });
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      tl.to(".ABOUT_ME_HEADING", { x: "14rem" }, "<");
    });
  });

  const handleRevealClick = contextSafe(() => {
    setAboutPopup((prevState) => {
      const newState = !prevState;
      const tl = gsap.timeline();

      if (newState) {
        // Opening animation
        tl.fromTo(
          ".CONTENT",
          { height: 0 },
          {
            display: "flex",
            height: "auto",
            duration: 0.2,
            ease: "bounce",
          }
        )
          .to(".IMG_DIV", { scale: 1, duration: 0.3, ease: "power4" }, "<0.03")
          .to(
            ".ABOUT_ME_TEXT",
            {
              scale: 1,
              duration: 0.3,
              ease: "power4",
            },
            "<0.03"
          );
      } else {
        // Closing animation

        tl.to(".IMG_DIV", { scale: 0, duration: 0.3, ease: "power4" })
          .to(
            ".ABOUT_ME_TEXT",
            {
              scale: 0,
              duration: 0.3,
              ease: "power4",
            },
            "<"
          )
          .to(
            ".CONTENT",
            {
              height: 0,
              duration: 0.3,
              ease: "power3.in",
            },
            "<0.03"
          )
          .set(".CONTENT", { display: "none" });
      }

      return newState;
    });
  });

  return (
    <section
      id="about"
      className="ABOUT block w-full bg-[#09090a] transition-colors duration-200 hover:bg-[#151516] rounded-lg"
    >
      <div
        className="w-11/12 mx-auto flex flex-col items-center relative gap-7 transition-colors duration-200  bg-[#151516] hover:bg-[#09090a] lg:my-12 my-4 py-2 lg:py-4 rounded-3xl"
        ref={container}
        onClick={handleRevealClick}
      >
        <div className="HEADING w-full flex items-center justify-center pr-2 py-3">
          <h2 className="ABOUT_ME_HEADING text-3xl md:text-5xl lg:text-8xl font-exo">
            About me
          </h2>
        </div>

        <div className="CONTENT hidden w-full flex-col lg:flex-row gap-10 justify-center items-center px-4">
          <div className="IMG_DIV scale-0 border-2 lg:w-1/2 bg-black rounded-lg">
            <img
              src={sam2}
              alt="the sam"
              className="-z-10 h-full w-full rounded-lg"
            />
          </div>

          <div className="ABOUT_ME_TEXT scale-0 border-2 lg:w-1/2 text-center bg-black rounded-lg">
            <div className="font-montserrat text-xl w-10/12 mx-auto py-8 md:py-14 lg:py-20 leading-normal text-right relative">
              I'm a{" "}
              <span
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
                className="text-gray-500"
              >
                web developer
              </span>
              <span
                className={`absolute top-14 left-24 ${
                  mouseHover ? "flex" : "hidden"
                }`}
              >
                Not a cat
              </span>{" "}
              with a passion for{" "}
              <span className="text-blue-700">front-end</span> development. I am
              primarily a <span className="text-blue-700">front-end</span>{" "}
              developer but have worked on{" "}
              <span className="text-red-600">back-end</span> as well as
              full-stack. I work most with{" "}
              <span className="text-[#5ed4f5]">react</span> and{" "}
              <span className="text-[#e2441c]">HTML5</span> but can also work
              with <span className="text-[#4e4e4e]">nextJS</span>. So if you are
              in need of my skillset, shoot me an email.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
