import { skillFrontEnd } from "../constants";
import { skillBackEnd } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="SKILLS w-full block">
      <div className="   border-4 border-transparent rounded-lg bg-gradient-to-tr from-red-600 via-green-700 to-purple-950 bg-400% animate-bgAnimation bg-clip-border">
        <div className=" font-lobster text-3xl">Tech</div>
        <div className="flex flex-row bg-black rounded-lg items-stretch justify-around p-2">
          <ul className=" grid grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className=" col-span-full font-exo text-xl">Front End Skills</p>
            {skillFrontEnd.map((skillfront) => (
              <li key={skillfront.name}>
                <a
                  href={skillfront.link}
                  target="_blank"
                  className=" flex flex-row items-center h-full justify-center border-2 border-orange-300 bg-orange-200 rounded-lg aspect-video p-3 gap-2"
                >
                  <img
                    src={skillfront.logo}
                    key={skillfront.placeholder}
                    placeholder={skillfront.placeholder}
                    className=" w-8 aspect-square link"
                  ></img>
                  <p className=" font-exo text-black text-lg link">
                    {skillfront.name}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <div className="border-r-2 border-r-gray-500"></div>
          <ul className="grid grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className=" col-span-full font-exo text-xl">Back End Skills</p>
            {skillBackEnd.map((skillback) => {
              if (skillback.name === "") {
                return (
                  <li key={skillback.placeholder}>
                    <a
                      href={skillback.link}
                      target="_blank"
                      className="flex flex-row items-center h-full justify-center border-2 border-orange-300 bg-orange-200 rounded-lg aspect-video p-3 gap-2"
                    >
                      <img
                        src={skillback.logo}
                        key={skillback.placeholder}
                        placeholder={skillback.placeholder}
                        className="w-24 h-8 link"
                      ></img>
                    </a>
                  </li>
                );
              } else {
                return (
                  <li key={skillback.placeholder}>
                    <a
                      href={skillback.link}
                      target="_blank"
                      className="flex flex-row items-center h-full justify-center border-2 border-orange-300 bg-orange-200 rounded-lg aspect-video p-3 gap-2"
                    >
                      <img
                        src={skillback.logo}
                        key={skillback.name}
                        placeholder={skillback.placeholder}
                        className="w-8 aspect-square link"
                      ></img>
                      <p className=" font-exo text-black text-lg link">
                        {skillback.name}
                      </p>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
