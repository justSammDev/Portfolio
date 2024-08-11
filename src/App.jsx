import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import MouseFollower from "./Components/MouseFollower";
import {
  Home,
  Skills,
  Services,
  About,
  Contact,
  Portfolio,
} from "./Sections/index";
import Preloader from "./Components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
    document.body.style.overflow = "visible";
  };
  return (
    <main className="relative">
      <Preloader onFinish={handlePreloaderFinish} />
      {/* <Nav /> */}
      <Home />
      <About />
      <div className="SEPARATOR border-b-2 border-b-gray-600 w-8/12 "></div>
      <Portfolio />
      <div className="SEPARATOR border-b-2 border-b-gray-600 w-8/12 "></div>
      <Services />
      <div className="SEPARATOR border-b-2 border-b-gray-600 w-8/12 "></div>
      <Skills />
      <Contact />
      <Footer />
      <MouseFollower />
    </main>
  );
}

export default App;
