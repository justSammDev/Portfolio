import { useRef, useState } from "react";
import { skillFrontEnd, skillBackEnd, skillOther } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Skills = () => {
  const skillContainer = useRef();
  const { contextSafe } = useGSAP({ scope: skillContainer });
  const [skillsPopup, setSkillsPopup] = useState(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const tlSkills = gsap.timeline({
      scrollTrigger: {
        trigger: skillContainer.current,
        start: "top bottom",
        end: "top 80%",
        scrub: true,
        once: true,
        // markers: true,
      },
    });
    mm.add("(min-width:1024px)", () => {
      tlSkills.to(".SKILLS_HEADING", { x: "25rem" }, "<");
    });
    mm.add("(max-width:767px)", () => {
      tlSkills.to(".SKILLS_HEADING", { x: "7rem" }, "<");
    });
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      tlSkills.to(".SKILLS_HEADING", { x: "16rem" }, "<");
    });
  });

  const handleRevealClickSkills = contextSafe(() => {
    setSkillsPopup((prevState) => {
      const newState = !prevState;
      const tlSkills = gsap.timeline();

      if (newState) {
        // Opening animation
        tlSkills
          .fromTo(
            ".CONTENT_SKILLS",
            { height: 0 },
            {
              display: "flex",
              height: "auto",
              duration: 0.2,
              ease: "bounce",
            }
          )
          .to(
            ".SKILL_LIST",
            { scale: 1, duration: 0.3, ease: "power4" },
            "<0.03"
          );
      } else {
        // Closing animation

        tlSkills
          .to(".SKILL_LIST", { scale: 0, duration: 0.3, ease: "power4" })
          .to(
            ".CONTENT_SKILLS",
            {
              height: 0,
              duration: 0.3,
              ease: "power3.in",
            },
            "<0.03"
          )
          .set(".CONTENT_SKILLS", { display: "none" });
      }

      return newState;
    });
  });

  return (
    <section
      id="skills"
      className="SKILLS w-full block bg-[#09090a] transition-colors duration-200 hover:bg-[#151516] rounded-lg"
    >
      <div
        className="w-11/12 mx-auto flex flex-col items-center relative gap-7 transition-colors duration-200  bg-[#151516] hover:bg-[#09090a] lg:my-12 my-4 py-2 lg:py-4 rounded-3xl"
        ref={skillContainer}
        onClick={handleRevealClickSkills}
      >
        <div className="HEADING w-full flex items-center justify-center pr-2 py-3">
          <h2 className="SKILLS_HEADING text-3xl md:text-5xl lg:text-8xl font-exo">
            Skills
          </h2>
        </div>

        <div className="CONTENT_SKILLS hidden w-full flex-col lg:flex-row justify-center items-center px-4">
          <ul className="SKILL_LIST lg:w-1/3 grid md:grid-cols-4 grid-cols-3 lg:grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className="col-span-full font-exo text-xl">Front End Skills</p>
            {skillFrontEnd.map((skillfront) => (
              <li key={skillfront.name}>
                <a
                  href={skillfront.link}
                  target="_blank"
                  className=" flex flex-col link items-center h-full justify-center border-2 bg-[#2d3032] hover:bg-[#989898] rounded-lg aspect-video p-3 gap-2"
                >
                  <img
                    src={skillfront.logo}
                    key={skillfront.placeholder}
                    placeholder={skillfront.name}
                    className=" w-8 aspect-square link grayscale"
                  />
                  <p className=" font-exo text-white text-lg link">
                    {skillfront.name}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          <ul className="SKILL_LIST lg:w-1/3 grid md:grid-cols-4 grid-cols-3 lg:grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className=" col-span-full font-exo text-xl">Back End Skills</p>
            {skillBackEnd.map((skillback) => (
              <li key={skillback.placeholder}>
                <a
                  href={skillback.link}
                  target="_blank"
                  className="link flex flex-col items-center h-full justify-center border-2 bg-[#2d3032] hover:bg-[#989898] rounded-lg aspect-video p-3 gap-2"
                >
                  <img
                    src={skillback.logo}
                    key={skillback.name}
                    placeholder={skillback.name}
                    className="w-8 aspect-square link grayscale"
                  ></img>
                  <p className=" font-exo text-white text-lg link">
                    {skillback.name}
                  </p>
                </a>
              </li>
            ))}
          </ul>

          <ul className="SKILL_LIST lg:w-1/3 grid md:grid-cols-4 grid-cols-3 lg:grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className="col-span-full font-exo text-xl">Other Skills</p>
            {skillOther.map((skill) => (
              <li key={skill.name}>
                <a
                  href={skill.link}
                  target="_blank"
                  className="link flex flex-col items-center h-full justify-center border-2 bg-[#2d3032] hover:bg-[#989898] rounded-lg aspect-video p-3 gap-2"
                >
                  <img
                    src={skill.logo}
                    key={skill.placeholder}
                    placeholder={skill.name}
                    className=" w-8 aspect-square link grayscale"
                  />
                  <p className=" font-exo text-white text-lg link">
                    {skill.name}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
