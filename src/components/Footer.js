import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/Footer.module.css";
import IG from "../assets/images/IG.webp";
import YT from "../assets/images/yt.png";
import FB from "../assets/images/facebook.png";

const Footer = () => {
  return (
    <footer className={`py-5 ${styles.bg}`}>
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-sm-8">
            <img src={LogoDesa} className={`mb-3 ${styles.desa}`} alt="Logo" />
            <p>Desa Duren, Kasar, Ganyuwangi Jawa Selatan, Indonesia</p>
            <div className="d-flex flex-wrap">
              <p className="me-5">&copy; 2022 Desa Duren. All Rights Reserved</p>
              <ul>
                <li>
                  <a className={`${styles["admin"]}`} href="/dashboard">
                    Admin Panel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <h5>Media Sosial Kami</h5>
            <div className="row">
              <div className="col-sm-1 d-flex align-items-center">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  <img src={FB} alt="youtube" />
                </a>
              </div>
              <div className="col-sm-11">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  Facebook
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1 d-flex align-items-center">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  <img src={YT} alt="youtube" />
                </a>
              </div>
              <div className="col-sm-11">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  Youtube
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1 d-flex align-items-center">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  <img src={IG} alt="instagram" />
                </a>
              </div>
              <div className="col-sm-11">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
