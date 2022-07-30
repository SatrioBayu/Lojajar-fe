import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import styles from "../assets/css/DetailBerita.module.css";
import SideMap from "../components/SideMap";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DetailBerita = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  const fetchData = async () => {
    try {
      const article = await (await axios.get(`http://localhost:8000/article/${id}`)).data;
      setArticle(article.data);
      console.log(article);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <div className="row gx-5 my-5">
          {loading ? (
            <div className="col-lg-8 d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className={`col-lg-8 ${styles.font}`}>
              <h4 className="fw-bold">{article.judul}</h4>
              <div className="row g-2 align-items-center">
                <div className="col-sm-6">
                  <p className={`${styles.secondary}`}>27 Juli 2022</p>
                  <p className={`mt-1 mb-3`}>Penulis : {article.User.username}</p>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  <a href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Flojajar.vercel.app/berita/${article.id}`} target="_blank">
                    <img src={FB} className={`me-3 ${styles.share}`} alt="fb" />
                  </a>
                  <a href={`https://api.whatsapp.com/send/?phone&text=${article.judul}%0A%0AKlik+untuk+baca+selengkapnya+:+https%3A%2F%2Flojajar.vercel.app/berita/${article.id}`} target="_blank">
                    <img src={WA} className={`me-3 ${styles.share}`} alt="wa" />
                  </a>
                  <a onClick={copyLink} className={`badge ${styles["card-tag"]}`}>
                    {isCopied ? "Link Tersalin" : "Salin Link"}
                  </a>
                </div>
              </div>
              <img src={article.ArticleImages[0].image} className={`${styles.image}`} alt="article" />
              <p className={`mt-4 ${styles.secondary}`}>{article.isi}</p>
              <br />
            </div>
          )}
          <SideMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DetailBerita;
