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
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [umkm, setUmkm] = useState([]);

  const fetchData = async () => {
    try {
      const article = await (await axios.get("https://lojajar-be.herokuapp.com/article")).data;
      const umkm = await (await axios.get("https://lojajar-be.herokuapp.com/umkm")).data;
      setArticles(article.data.slice(0, 6));
      setUmkm(umkm.data.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
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
      <Services />
      <Portfolio />
      <Gmaps />
      <Article data={articles} />
      <Umkm data={umkm} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
