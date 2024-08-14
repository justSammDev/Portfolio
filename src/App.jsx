import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import MouseFollower from "./Components/MouseFollower";
import { Home, Skills, About, Contact, Portfolio } from "./Sections/index";
import Preloader from "./Components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
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
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      {!isLoading && <MouseFollower />}
    </main>
  );
}

export default App;
