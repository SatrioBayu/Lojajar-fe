import ArticleImage from "../assets/images/Rectangle 160.png";
import styles from "../assets/css/HorizontalCard.module.css";

const HorizontalCard = (props) => {
  return (
    <div className={`card mb-3 ${styles["card-horizontal"]}`}>
      <div className="row justify-content-center align-items-center g-0">
        <div className="p-3 col-lg-4 d-flex justify-content-center">
          <img src={ArticleImage} className={`rounded ${styles["card-img"]}`} alt="..." />
        </div>
        <div className="col-lg-8">
          <div className="card-body">
            <a className={styles["link-article"]} href={`/berita/${props.id}`}>
              <h6 className={styles["card-title"]}>UPTD Puskesmas Sambirejo Adakan Test Kebugaran Karyawan Puskesmas Sambirejo</h6>
            </a>
            <div class="row g-2 mb-2">
              <div class="col-1">
                <span className="fa-solid fa-calendar"></span>
              </div>
              <div class="col-10 col-sm-3">
                <p className={styles.date}>27 Juli 2022</p>
              </div>
              <div class="col-sm-3">
                <p className={styles.date}>Bagikan:</p>
              </div>
              <div class="col-sm-5">
                <span className="fa-brands fa-facebook me-4"></span>
                <span className="fa-brands fa-whatsapp"></span>
              </div>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maeet, quis adipiscing tellus neque turpis. Vestibulum sed ut amet, pharetra tellus augue sed ut quisque. Sed condimentum sit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
