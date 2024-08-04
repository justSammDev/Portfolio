function Home() {
  return (
    <div className=" h-screen min-h-[650px] flex justify-center items-center hero-bg">
      <div className="flex flex-col justify-center items-center gap-2 w-fit ">
        <div className="flex flex-col justify-center items-center bg-clip-text  bg-nav-pattern text-transparent">
          <div className=" text-9xl font-aclonica leading-normal">Sam Dev</div>
          <div className=" text-3xl font-lobster leading-normal mb-2">
            <span>I am Samridda Devkota.</span>
            <br />
            <span> A self-taught web developer based on Kathmandu.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
