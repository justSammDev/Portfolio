import { useState } from "react";
import HamburgerSVG from "../assets/svg/HamburgerSVG";

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const handleClick = () => setOpenNavigation((prev) => !prev);

  return (
    <section className="NAVBAR_SECTION relative w-full block">
      <div className="GLOBAL_PADDING">
        <div className="lg:hidden flex items-center justify-between px-10 py-6">
          <div className="text-4xl font-lobster italic">
            <a href="#home">Sam Dev</a>
          </div>

          <div
            onClick={handleClick}
            className={`lg:hidden cursor-pointer z-[200] ${
              openNavigation ? "fixed" : ""
            }`}
          >
            <HamburgerSVG openNavigation={openNavigation} />
          </div>
        </div>

        <nav
          className={`MOBILE_NAVBAR ${
            !openNavigation ? "hidden" : "flex"
          } lg:hidden justify-center items-start w-full fixed z-50 inset-0 bg-[#2b2d2f] overflow-hidden`}
          onClick={handleClick}
        >
          <ul className="flex pt-20 flex-col gap-10 items-center justify-between bg-nav-pattern bg-clip-text text-transparent text-xl font-aclonica leading-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li className=" flex flex-row gap-1 items-center justify-center ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <nav className="DESKTOP_NAVBAR  lg:px-32  md:px-20 hidden lg:flex justify-center items-center">
          <ul className=" flex flex-row items-center justify-between bg-nav-pattern bg-clip-text text-transparent w-full text-xl font-aclonica cursor-pointer leading-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className=" text-6xl font-lobster italic">
              <a href="#home">Sam Dev</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li className=" flex flex-row gap-1 items-center justify-center ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
