import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import styles from "../assets/css/DetailBerita.module.css";
import SideMap from "../components/SideMap";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailBerita = () => {
  const { id } = useParams();
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
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className={`container ${styles.content}`}>
            <div className="row g-5 my-5">
              <div className="col-lg-8">
                <h4>{article.judul}</h4>
                <div className="row g-2 align-items-center">
                  <div className="col-sm-6">
                    <p className={`${styles.secondary}`}>27 Juli 2022</p>
                    <p className={`mt-1 mb-3`}>Penulis : {article.User.username}</p>
                  </div>
                  <div className="col-sm-6 d-flex justify-content-end">
                    <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fsecondhand-seven.vercel.app/" target="_blank">
                      <img src={FB} className={`me-3 ${styles.share}`} alt="fb" />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone&text=Coba sajo hehe" target="_blank">
                      <img src={WA} className={`me-3 ${styles.share}`} alt="wa" />
                    </a>
                    <a onClick={copyLink} className={`badge ${styles["card-tag"]}`}>
                      {isCopied ? "Link Tersalin" : "Salin Link"}
                    </a>
                  </div>
                </div>
                <img src={article.ArticleImages[0].image} className={`${styles.image}`} alt="article" />
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corporis ullam nihil voluptatibus voluptates, suscipit optio odit maxime ut molestiae ipsam? Vero adipisci rerum
                  asperiores! Exercitationem illo reiciendis at nesciunt?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore accusantium provident similique cupiditate, corrupti ullam ipsam, sed non tempora autem deserunt
                  reprehenderit! Quisquam voluptatum ut sequi delectus dignissimos porro?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi aliquam laboriosam quia commodi! Dolorum, dolores architecto consequuntur in, ullam quia deserunt expedita modi
                  adipisci similique reiciendis dicta quam! Consequatur.
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corporis ullam nihil voluptatibus voluptates, suscipit optio odit maxime ut molestiae ipsam? Vero adipisci rerum
                  asperiores! Exercitationem illo reiciendis at nesciunt?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore accusantium provident similique cupiditate, corrupti ullam ipsam, sed non tempora autem deserunt
                  reprehenderit! Quisquam voluptatum ut sequi delectus dignissimos porro?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi aliquam laboriosam quia commodi! Dolorum, dolores architecto consequuntur in, ullam quia deserunt expedita modi
                  adipisci similique reiciendis dicta quam! Consequatur.
                </p>
              </div>
              <SideMap />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default DetailBerita;
