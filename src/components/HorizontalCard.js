import styles from "../assets/css/HorizontalCard.module.css";

const HorizontalCard = (props) => {
  return (
    <div className={`card mb-3 ${styles["card-horizontal"]}`}>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-lg-4 d-flex justify-content-center">
          <img src={props.data.ArticleImages[0].image} className={`rounded img-fluid`} alt="..." />
        </div>
        <div className="col-lg-8">
          <div className="card-body">
            <a className={styles["link-article"]} href={`/berita/${props.data.id}`}>
              <h6 className={styles["card-title"]}>{props.data.judul}</h6>
            </a>
            <div className="row g-2 mb-2">
              <div className="col-1">
                <span className="fa-solid fa-calendar"></span>
              </div>
              <div className="col-10 col-sm-3">
                <p className={styles.date}>27 Juli 2022</p>
              </div>
              <div className="col-sm-3">
                <p className={styles.date}>Bagikan:</p>
              </div>
              <div className="col-sm-5">
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
