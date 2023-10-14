import Button from "../Components/Button";

function Home() {
  return (
    <div className=" h-screen flex flex-col min-h-[650px] justify-center items-center gap-2">
      <div className=" text-8xl font-aclonica leading-normal">Sam Dev</div>
      <div className=" text-3xl font-lobster leading-normal mb-2">
        <span>I am Samridda Devkota.</span>
        <br />
        <span> A web developer based on Kathmandu</span>
      </div>
      <Button Text={"Hire Me"} />
    </div>
  );
}

export default Home;
