import Button from "../Components/Button";

function About() {
  return (
    <section
      id="about"
      className="ABOUT flex flex-col relative gap-7 pb-12 pt-2"
    >
      <div className=" flex items-center justify-end py-6">
        <h2 className=" text-8xl font-exo  pr-5 w-fit group hover:no-underline">
          <span className=" group-hover:underline underline-offset-8 decoration-wavy">
            About
          </span>{" "}
          <span className=" group-hover:underline underline-offset-8">me</span>
        </h2>
      </div>

      <div className=" flex flex-col lg:flex-row justify-center items-center pt-4">
        <img
          src="/src/assets/cat.jpg"
          placeholder="Profile Img"
          className=" p-10 border-r-2 border-r-gray-500 border-l-2 border-l-gray-500"
        ></img>
        <div className=" flex flex-col gap-8 justify-center items-end py-10 px-2 border-r-2 border-r-gray-500">
          <p className=" font-montserrat text-xl leading-normal text-right ">
            I'm a self-taught web developer with a passion for turning{" "}
            <span className=" font-lobster text-2xl bg-gradient-to-r from-orange-400 via-cyan-600 to-black to-80%  bg-clip-text text-transparent bg-400% animate-bg-animation">
              dreams{" "}
            </span>
            into{" "}
            <span className="  font-aclonica bg-400% bg-gradient-to-r from-black from-20% via-purple-800 to-orange-800 bg-clip-text text-transparent animate-bg-animation">
              reality
            </span>
            . I'm aware of my capabilities and am always eager to learn more. If
            you need assistance in bringing your dream website to life, don't
            hesitate to reach out. I'm here to help – so go ahead, don't be shy!
            😊
          </p>
          <Button Text={"Contact"} />
        </div>
      </div>
    </section>
  );
}

export default About;
