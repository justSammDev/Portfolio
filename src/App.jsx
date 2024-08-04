import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import {
  Home,
  Skills,
  Services,
  About,
  Contact,
  Portfolio,
} from "./Sections/index";

function App() {
  return (
    <main className=" relative px-32 text-center">
      <Nav />
      <section id="home">
        <Home />
      </section>
      <div className=" border-b-2 border-b-gray-600 w-5/12"></div>
      <section id="about" className="">
        <About />
      </section>
      <div className=" border-b-2 border-b-gray-600 w-7/12 "></div>
      <section id="portfolio">
        <Portfolio />
      </section>
      <div className=" border-b-2 border-b-gray-600 w-8/12 "></div>
      <section id="services">
        <Services />
      </section>
      <div className=" border-b-2 border-b-gray-600 w-8/12 "></div>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default App;
