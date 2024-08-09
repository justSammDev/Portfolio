import { Parallax } from "react-parallax";

const Services = () => {
  return (
    <section id="services" className="SERVICES block w-full">
      <Parallax
        blur={10}
        bgImage="/src/assets/cati.jpg"
        bgImageAlt="the cat"
        strength={400}
      >
        <p className="text-9xl ">
          Content goes here. Parallax height grows with content height.
        </p>
      </Parallax>
    </section>
  );
};

export default Services;
