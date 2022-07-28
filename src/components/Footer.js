import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`py-5 ${styles.bg}`}>
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-sm-6">
            <img src={LogoDesa} className={`mb-3 ${styles.desa}`} alt="Logo" />
            <p>Desa Duren, Kasar, Ganyuwangi Jawa Selatan, Indonesia</p>
            <p>&copy; 2022 Desa Duren. All Rights Reserved</p>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <h5>Media Sosial Kami</h5>
            <div className="row">
              <div className="col-sm-1 d-flex align-items-center">
                <a href="#" className={`my-2 ${styles["footer-link"]}`}>
                  <span className="fa-brands fa-facebook fa-lg"></span>
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
                  <span className="fa-brands fa-youtube fa-lg"></span>
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
                  <span className="fa-brands fa-instagram fa-lg"></span>
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
