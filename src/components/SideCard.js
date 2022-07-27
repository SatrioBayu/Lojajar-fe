import ArticleImage from "../assets/images/Rectangle 160.png";
import styles from "../assets/css/SideCard.module.css";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";

const SideCard = () => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={ArticleImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p className={`badge ${styles["card-tag"]}`}>Makanan</p>
            </div>
            <div className="d-flex justify-content-end col-6">
              <img src={FB} className={`me-3 ${styles["card-icon"]}`} alt="fb" />
              <img src={WA} className={`${styles["card-icon"]}`} alt="wa" />
            </div>
          </div>
          <h5 className={`fw-bold ${styles["card-title"]}`}>Warung Sawah Desa</h5>
          <p className={`${styles["card-text"]} mb-3`}>Ds. Krajan RT. 05 RW 01</p>
          <h5 className={`fw-bold ${styles["card-title"]}`}>Rp.10.000 - 25.000</h5>
          <a className={`${styles["card-link"]}`} href="">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
