import { Parallax } from "react-parallax";
import Button from "../Components/Button";

function About() {
  return (
    <section id="about" className="ABOUT block w-full">
      <div className="lg:w-11/12 mx-auto flex flex-col relative gap-7 pb-12 pt-2">
        <div className=" flex items-center justify-end py-6">
          <h2 className="text- lg:text-8xl font-exo  pr-5 w-fit group hover:no-underline">
            <span className=" group-hover:underline underline-offset-8 decoration-wavy">
              About
            </span>{" "}
            <span className=" group-hover:underline underline-offset-8">
              me
            </span>
          </h2>
        </div>

        <div className=" flex w-full flex-col lg:flex-row justify-center items-center pt-4">
          <div className="w-1/2">
            <Parallax
              blur={0}
              bgImage="/src/assets/cat.jpg"
              bgImageAlt="the cat"
              bgImageSizes={500}
              className="h-full w-full"
              strength={400}
            ></Parallax>
          </div>
          <div className=" flex w-1/2 flex-col gap-8 justify-center items-end py-10 px-2 border-r-2 border-r-gray-500">
            <p className=" font-montserrat text-xl leading-normal text-right ">
              I'm a web developer with a passion for turning{" "}
              <span className=" font-lobster text-2xl bg-gradient-to-r from-gray-400 via-gray-600 to-white to-80%  bg-clip-text text-transparent bg-400% animate-bgAnimation">
                dreams{" "}
              </span>
              into{" "}
              <span className="  font-aclonica bg-400% bg-gradient-to-r from-gray-400 via-gray-600 to-white bg-clip-text text-transparent animate-bgAnimation">
                reality
              </span>
              . I'm aware of my capabilities and am always eager to learn more.
              If you need assistance in bringing your dream website to life,
              don't hesitate to reach out. I'm here to help – so go ahead, don't
              be shy! 😊
            </p>
            <Button Text={"Contact"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
