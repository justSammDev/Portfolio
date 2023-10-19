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
      <section id="about" className="">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default App;
