import styles from "../assets/css/DetailUmkm.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import SideMap from "../components/SideMap";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailUmkm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [umkm, setUmkm] = useState(null);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const umkm = await (await axios.get(`http://localhost:8000/umkm/${id}`)).data;
        setUmkm(umkm.data);
        console.log(umkm);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
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
            <div className="row gx-5 my-4">
              <div className={`col-lg-8 ${styles.font}`}>
                {/* Images */}
                <div className="row g-2 align-items-center">
                  {umkm.UmkmImages.length > 1 ? (
                    <>
                      <div className="col-md-8">
                        <img className="img-fluid" src={umkm.UmkmImages[0].image} alt="" />
                      </div>
                      <div className="col-md-4">
                        {umkm.UmkmImages.map((image, index) => (
                          <>{index !== 0 && <img className={`${index === 1 ? "mb-1" : ""} ${styles.img}`} src={image.image} alt="" />}</>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="col-md-12 d-flex justify-content-center">
                      <img className="img-fluid" src={umkm.UmkmImages[0].image} alt="" />
                    </div>
                  )}
                </div>
                {/* Tag */}
                <div className="my-4 g-2 d-flex align-items-center flex-wrap">
                  {umkm.jenis == "Makanan" && <p className={`badge ${styles["card-tag--makanan"]}`}>{umkm.jenis}</p>}
                  {umkm.jenis == "Barang" && <p className={`badge ${styles["card-tag--barang"]}`}>{umkm.jenis}</p>}
                  {umkm.jenis == "Jasa" && <p className={`badge ${styles["card-tag--jasa"]}`}>{umkm.jenis}</p>}
                  <p className={`badge me-auto ${styles["card-tag"]}`}>{umkm.jenis}</p>
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
                <div className="umkm-body">
                  <h3 className="fw-bold">{umkm.nama}</h3>
                  <p>Lokasi : {umkm.alamat}</p>
                  <h5 className="fw-bold">No Hp : {umkm.noHp}</h5>
                  <hr />
                  <h6 className="mt-3 fw-bold">Deskripsi</h6>
                  <div className={styles.deskripsi}>
                    <p>{umkm.deskripsi}</p>
                  </div>
                </div>
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

export default DetailUmkm;
