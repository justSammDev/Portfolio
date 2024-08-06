function Home() {
  return (
    <div className="flex justify-center items-center hero-bg">
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <div className="border relative w-5/12 -rotate-[40deg] mx-auto rounded-tr-full rounded-bl-full h-96 z-0 overflow-hidden">
          <div className="border absolute left-[28%] top-[7%] z-10 flex bg-eye-background items-center justify-center aspect-square rotate-[40deg] rounded-full bg-300% bg-center w-7/12">
            <div className="text-7xl whitespace-nowrap relative z-20 font-aclonica bg-clip-text bg-nav-pattern text-transparent leading-normal">
              Sam Dev
            </div>
          </div>
        </div>
        <div className="bg-clip-text text-3xl bg-nav-pattern text-transparent font-lobster">
          <h3>I am Samridda Devkota.</h3>
          <h3> A self-taught web developer based on Kathmandu.</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
