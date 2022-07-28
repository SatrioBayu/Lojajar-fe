import styles from "../assets/css/DetailUmkm.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import SideMap from "../components/SideMap";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";
import ArticleImage from "../assets/images/Rectangle 160.png";
import { useState } from "react";

const DetailUmkm = () => {
  const { id } = useParams();
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <div className="row g-3 my-4">
          <div class="col-lg-8">
            {/* Images */}
            <div class="row g-2 align-items-center">
              <div class="col-md-8">
                <img className="img-fluid" src={ArticleImage} alt="" />
              </div>
              <div class="col-sm-4">
                <img className={`mb-2 ${styles.img}`} src={ArticleImage} alt="" />
                <img className={`${styles.img}`} src={ArticleImage} alt="" />
              </div>
            </div>
            {/* Tag */}
            <div class="my-4 g-2 d-flex align-items-center flex-wrap">
              <p className={`badge me-auto ${styles["card-tag"]}`}>Makanan</p>
              <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fsecondhand-seven.vercel.app/" target="_blank">
                <img src={FB} className={`me-3 ${styles.share}`} alt="fb" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone&text=Coba sajo hehe" target="_blank">
                <img src={WA} className={`me-3 ${styles.share}`} alt="wa" />
              </a>
              <a onClick={copyLink} className={`badge ${styles["copy-link"]}`}>
                {isCopied ? "Link Tersalin" : "Salin Link"}
              </a>
            </div>
            {/* Body */}
            <div class="umkm-body">
              <h3>Pengrajin Rotan</h3>
              <p>Lokasi : Ds. Krajan RT. 05 RW 01</p>
              <h4>Buka : 07.00 - 16.00 WIB</h4>
              <hr />
              <h6 className="mt-3">Deskripsi</h6>
              <div className={styles.deskripsi}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, eos dolorum magnam impedit repellendus reiciendis perspiciatis nam dicta tempora assumenda facilis culpa veritatis
                  excepturi nemo sunt maiores? Quis, dolor cum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, soluta quae. Aut, consectetur, explicabo ipsam ratione a laborum vitae quibusdam minus distinctio repellat cumque
                  recusandae officia fugit facilis. Dolorem, id.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus molestiae, praesentium minus possimus corrupti illum sequi, vitae vel facere doloribus exercitationem velit cumque
                  autem, id similique perspiciatis quam veritatis?
                </p>
              </div>
            </div>
          </div>
          <SideMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailUmkm;
