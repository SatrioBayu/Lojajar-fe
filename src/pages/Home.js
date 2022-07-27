import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Gmaps from "../components/Gmaps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Article from "../components/Article";
import Umkm from "../components/Umkm";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/scripts.js";
    script.defer = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="page-top">
      <Navbar />
      <Jumbotron />
      <About />
      <Services />
      <Portfolio />
      <Gmaps />
      <Article />
      <Umkm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
