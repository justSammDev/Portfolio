import React, { useRef } from "react";

const Portfolio = () => {
  const container = useRef();
  return (
    <section
      id="portfolio"
      className="PORTFOLIO w-full block bg-[#09090a] transition-colors duration-200 hover:bg-[#151516] rounded-lg"
    >
      <div
        className="w-11/12 mx-auto flex flex-col items-center relative gap-7 transition-colors duration-200  bg-[#151516] hover:bg-[#09090a] lg:my-12 my-4 py-2 lg:py-4 rounded-3xl"
        ref={container}
      >
        <div className="HEADING w-full flex items-center justify-center pr-2 py-6">
          <h2 className="ABOUT_ME_HEADING text-3xl md:text-5xl lg:text-8xl font-exo">
            Portfolio
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
