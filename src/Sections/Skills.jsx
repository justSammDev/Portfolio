import { skillFrontEnd } from "../constants";
import { skillBackEnd } from "../constants";

const Skills = () => {
  return (
    <div className=" py-12  ">
      <div className="   border-4 border-transparent rounded-lg bg-gradient-to-tr from-red-600 via-green-700 to-purple-950 bg-400% animate-bg-animation bg-clip-border">
        <div className=" font-lobster text-3xl">Tech</div>
        <div className="flex flex-row bg-black rounded-lg items-stretch justify-around p-2">
          <ul className=" grid grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className=" col-span-full font-exo text-xl">Front End Skills</p>
            {skillFrontEnd.map((skillfront) => (
              <a href={skillfront.link} target="_blank">
                <li className=" flex flex-row items-center h-full justify-center border-2 border-orange-300 bg-orange-200 rounded-lg aspect-video p-3 gap-2 cursor-pointer ">
                  <img
                    src={skillfront.logo}
                    key={skillfront.placeholder}
                    placeholder={skillfront.placeholder}
                    className=" w-8 aspect-square"
                  ></img>
                  <p className=" font-exo text-black text-lg">
                    {skillfront.name}
                  </p>
                </li>
              </a>
            ))}
          </ul>
          <div className="border-r-2 border-r-gray-500"></div>
          <ul className="grid grid-cols-3 p-4 gap-2 items-center justify-center ">
            <p className=" col-span-full font-exo text-xl">Back End Skills</p>
            {skillBackEnd.map((skillback) => {
              if (skillback.name === "") {
                return (
                  <a href={skillback.link} target="_blank">
                    <li className=" flex flex-row items-center h-full justify-center border-2 border-orange-300 bg-orange-200 rounded-lg aspect-video p-3 gap-2 cursor-pointer ">
                      <img
                        src={skillback.logo}
                        key={skillback.placeholder}
                        placeholder={skillback.placeholder}
                        className="w-24 h-8 "
                      ></img>
                    </li>
                  </a>
                );
              } else {
                return (
                  <a href={skillback.link} target="_blank">
                    <li className="flex flex-row items-center h-full justify-center border-2 border-orange-300 bg-orange-200 rounded-lg aspect-video p-3 gap-2 cursor-pointer ">
                      <img
                        src={skillback.logo}
                        key={skillback.name}
                        placeholder={skillback.placeholder}
                        className="w-8 aspect-square"
                      ></img>
                      <p className=" font-exo text-black text-lg">
                        {skillback.name}
                      </p>
                    </li>
                  </a>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
