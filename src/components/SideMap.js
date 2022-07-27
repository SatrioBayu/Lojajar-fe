import styles from "../assets/css/SideMaps.module.css";

const SideMap = () => {
  return (
    <div className="col-md-4">
      <div className={`mb-5 ${styles.peta}`}>
        <h5 className="my-3">Peta Desa</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5327793840092!2d113.85380921210337!3d-7.943764500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6c358e72a28bd%3A0x68de926d025ac4ad!2sBalai%20Desa%20Lojajar!5e0!3m2!1sid!2sid!4v1658771394640!5m2!1sid!2sid"
          width="100%"
          height="300"
          loading="lazy"
          frameBorder="2"
        ></iframe>
      </div>
      <div className={`${styles["contact-us"]}`}>
        <h5 className="my-3">Hubungi Kami</h5>
        <p>Apabila ada pertanyaan lebih lanjut silahkan hubungi kami melalui :</p>
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
  );
};

export default SideMap;
