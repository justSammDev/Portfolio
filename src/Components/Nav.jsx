function Nav() {
  return (
    <nav className="relative flex justify-center items-center bg-nav-pattern bg-clip-text text-transparent">
      <ul className=" flex flex-row items-center justify-evenly w-full text-xl font-aclonica cursor-pointer leading-3">
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
  );
}

export default Nav;
