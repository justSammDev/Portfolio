import Button from "../Components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const [mouseHover, setMouseHover] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);
  const profileImg = useRef();
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
    });
    tl.fromTo(
      profileImg.current,
      {
        y: 200,
      },
      {
        y: -10,
      }
    )
      .to(".ABOUT_ME_HEADING", { x: 400 }, "<")
      .fromTo(".ABOUT_ME_TEXT", { y: 200 }, { y: -10 }, "<");
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
            duration: 1,
            ease: "power3.in",
          }
        );
      } else {
        // Closing animation

        tl.to(".CONTENT", {
          height: 0,
          duration: 0.5,
          ease: "power3.in",
        }).set(".CONTENT", { display: "none" });
      }

      return newState;
    });
  });

  return (
    <section id="about" className="ABOUT block w-full bg-[#09090a] rounded-lg">
      <div
        className="lg:w-11/12 mx-auto flex flex-col items-center relative gap-7 bg-[#151516] my-12 py-4 rounded-3xl"
        ref={container}
        onClick={handleRevealClick}
      >
        <div className="HEADING w-full flex items-center justify-center py-6">
          <h2 className="ABOUT_ME_HEADING text- lg:text-8xl font-exo group hover:no-underline">
            <span className="group-hover:underline underline-offset-8 decoration-wavy">
              About
            </span>{" "}
            <span className="group-hover:underline underline-offset-8">me</span>
          </h2>
        </div>

        <div className="CONTENT hidden h-0 w-full flex-col lg:flex-row gap-10 justify-center items-center px-4">
          <div className="IMG_DIV w-1/2 bg-black rounded-lg">
            <img
              src="/src/assets/cat.jpg"
              alt="the cat"
              className="-z-10 h-full w-full rounded-lg"
              ref={profileImg}
            />
          </div>
          <div className="ABOUT_ME_TEXT flex w-1/2 items-center flex-col gap-8 justify-center text-center py-10 px-2 bg-black rounded-lg">
            <div className="font-montserrat relative text-xl w-10/12 leading-normal text-right">
              I'm a{" "}
              <span
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
              >
                web developer
              </span>
              <span
                className={`absolute -top-4 left-32 ${
                  mouseHover ? "flex" : "hidden"
                }`}
              >
                Not a cat
              </span>{" "}
              with a passion for turning{" "}
              <span className=" font-lobster text-2xl bg-gradient-to-r from-gray-400 via-gray-600 to-white to-80%  bg-clip-text text-transparent bg-400% animate-bgAnimation">
                dreams{" "}
              </span>
              into{" "}
              <span className="  font-aclonica bg-400% bg-gradient-to-r from-gray-400 via-gray-600 to-white bg-clip-text text-transparent animate-bgAnimation">
                reality
              </span>
              . If you need assistance in bringing your dream website to life,
              I'm here to help – so go ahead, don't be shy! 😊
            </div>
            <Button Text={"Contact"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
