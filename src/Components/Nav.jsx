import { useState } from "react";
import HamburgerSVG from "../assets/svg/HamburgerSVG";

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleClick = () => {
    setOpenNavigation((prev) => !prev);
    document.body.style.overflow = openNavigation ? "auto" : "hidden";
    console.log(document.querySelector("#mobile-navigation"));
  };

  return (
    <div className="NAVBAR_SECTION w-full block">
      <div className="GLOBAL_PADDING lg:w-10/12 w-full mx-auto relative">
        <nav className="DESKTOP_NAVBAR lg:px-4 md:px-2 hidden lg:flex justify-center items-center z-50 static">
          <ul className="flex flex-row items-center justify-between bg-nav-pattern bg-clip-text text-transparent w-full text-xl font-aclonica">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className=" text-6xl font-lobster italic cursor-default">
              <h1>Sam Dev</h1>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <nav className="MOBILE_NAVBAR lg:hidden relative h-20 w-full">
          <div className="flex w-full fixed top-0 bg-black z-50 justify-between px-8 py-4 items-center">
            <div className="text-4xl font-lobster italic">
              <a href="/">Sam Dev</a>
            </div>
            <div
              onClick={handleClick}
              className={`lg:hidden cursor-pointer z-[200]`}
              aria-expanded={openNavigation}
              aria-controls="mobile-navigation"
            >
              <HamburgerSVG openNavigation={openNavigation} />
            </div>
          </div>

          <ul
            id="mobile-navigation"
            aria-hidden={!openNavigation}
            className={`${
              openNavigation
                ? "top-[4.5rem] transition-all duration-500"
                : "-top-[100rem] transition-all duration-300"
            } w-full h-[calc(100vh-4.4rem)] fixed bg-[#242628] z-[100]`}
            tabIndex={0}
          >
            <div className="flex-col w-full h-full flex items-center justify-between bg-nav-pattern bg-clip-text text-transparent text-xl font-aclonica">
              <li className="w-11/12 flex justify-center item-center pt-8 pb-12 h-8 min-[620px]:p-0 border-b-2 border-gray-600">
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li className="w-11/12 flex justify-center item-center pt-8 pb-12 h-8 min-[620px]:p-0 border-b-2 border-gray-600">
                <a href="#about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li className="w-11/12 flex justify-center item-center pt-8 pb-12 h-8 min-[620px]:p-0 border-b-2 border-gray-600">
                <a href="#portfolio" onClick={handleClick}>
                  Portfolio
                </a>
              </li>
              <li className="w-11/12 flex justify-center item-center pt-8 pb-12 h-8 min-[620px]:p-0 border-b-2 border-gray-600">
                <a href="#services" onClick={handleClick}>
                  Services
                </a>
              </li>
              <li className="w-11/12 flex justify-center item-center pt-8 pb-12 h-8 min-[620px]:p-0 border-b-2 border-gray-600">
                <a href="#skills" onClick={handleClick}>
                  Skills
                </a>
              </li>
              <li className="w-11/12 flex justify-center item-center pt-8 pb-12 h-8 min-[620px]:p-0 border-b-2 border-gray-600">
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
