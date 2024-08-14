import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { portfolioProjects } from "../constants";

const Portfolio = () => {
  const portfolioContainer = useRef();
  const { contextSafe } = useGSAP({ scope: portfolioContainer });
  const [portfolioPopup, setPortfolioPopup] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tlPortfolio = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioContainer.current,
        start: "top bottom",
        end: "top 70%",
        scrub: true,
        once: true,
        // markers: true,
      },
    });
    mm.add("(min-width:1024px)", () => {
      tlPortfolio.to(".PORTFOLIO_HEADING", { x: "20rem" }, "<");
    });
    mm.add("(max-width:767px)", () => {
      tlPortfolio.to(".PORTFOLIO_HEADING", { x: "5rem" }, "<");
    });
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      tlPortfolio.to(".PORTFOLIO_HEADING", { x: "14rem" }, "<");
    });
  });

  const handleRevealClickPortfolio = contextSafe(() => {
    setPortfolioPopup((prevState) => {
      const newState = !prevState;
      const tlPortfolio = gsap.timeline();

      if (newState) {
        // Opening animation
        tlPortfolio
          .fromTo(
            ".CONTENT_PORTFOLIO",
            { height: 0 },
            {
              display: "flex",
              height: "auto",
              duration: 0.2,
              ease: "bounce",
            }
          )
          .to(
            ".PROJECT_CARD",
            { scale: 1, duration: 0.3, ease: "power4" },
            "<0.03"
          );
      } else {
        // Closing animation

        tlPortfolio
          .to(".PROJECT_CARD", { scale: 0, duration: 0.3, ease: "power4" })
          .to(
            ".CONTENT_PORTFOLIO",
            {
              height: 0,
              duration: 0.3,
              ease: "power3.in",
            },
            "<0.03"
          )
          .set(".CONTENT_PORTFOLIO", { display: "none" });
      }

      return newState;
    });
  });

  return (
    <section
      id="portfolio"
      className="PORTFOLIO w-full block bg-[#09090a] transition-colors duration-200 hover:bg-[#151516] rounded-lg"
    >
      <div
        className="w-11/12 mx-auto flex flex-col items-center relative gap-7 transition-colors duration-200  bg-[#151516] hover:bg-[#09090a] lg:my-12 my-4 py-2 lg:py-4 rounded-3xl"
        ref={portfolioContainer}
        onClick={handleRevealClickPortfolio}
      >
        <div className="HEADING w-full flex items-center justify-center pr-2 py-3">
          <h2 className="PORTFOLIO_HEADING text-3xl md:text-5xl lg:text-8xl font-exo">
            Portfolio
          </h2>
        </div>

        <div className="CONTENT_PORTFOLIO hidden w-full px-4">
          <div className="PROJECT_HOLDER flex items-center gap-4 px-2 md:px-5 lg:px-8 py-4 justify-center w-full flex-wrap">
            {portfolioProjects.map((project) => (
              <div
                key={project.name}
                className={`PROJECT_CARD border-2 rounded-3xl scale-0 bg-[#2d3032] lg:w-[20vw] h-[20vh] lg:h-[40vh] w-[30vw] md:w-[30vw] relative px-2 md:px-3 lg:px-6 flex-none max-w-[250px] hover:bg-[#989898]`}
              >
                <a
                  className="w-full link h-full flex flex-col gap-2 lg:gap-10 items-center justify-center"
                  href={project.link}
                  target="_blank"
                >
                  <div className="w-10 aspect-square">
                    <img
                      src={project.iconUrl}
                      alt="Project icon"
                      className="w-full h-full object-contain link grayscale"
                    />
                  </div>
                  <p className="font-aclonica text-wrap text-center link">
                    {project.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
