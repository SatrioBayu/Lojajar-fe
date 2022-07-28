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

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <div className="row g-3 my-4">
          <div class="col-lg-8">
            <div class="row g-2 align-items-center">
              <div class="col-md-8">
                <img className="img-fluid" src={ArticleImage} alt="" />
              </div>
              <div class="col-sm-4">
                <img className={`mb-2 ${styles.img}`} src={ArticleImage} alt="" />
                <img className={`${styles.img}`} src={ArticleImage} alt="" />
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
