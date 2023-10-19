import Button from "../Components/Button";

function About() {
  return (
    <div className="flex flex-col relative gap-7">
      <div className=" border-b-2 border-b-gray-600 w-10/12"></div>
      <div className=" flex items-center justify-end ">
        <h2 className=" text-6xl font-exo  pr-5 w-fit group hover:no-underline">
          <span className=" group-hover:underline underline-offset-8 decoration-wavy">
            About
          </span>{" "}
          <span className=" group-hover:underline underline-offset-8">me</span>
        </h2>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <img
          src="/src/assets/cat.jpg"
          placeholder="Profile Img"
          className=" p-10 border-r-2 border-r-gray-500"
        ></img>
        <div className=" flex flex-col gap-8 justify-center items-end">
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
    </div>
  );
}

export default About;
