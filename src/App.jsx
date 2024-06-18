import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ServiceCarousel from "./components/ServiceCarousel";
import Work from "./components/Work";
import Reference from "./components/Reference";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <ServiceCarousel />
      <Work />
      <Reference />
      <Contact />
      <Info />
      <Footer />
    </>
  );
}

export default App;
