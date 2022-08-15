import styles from "../assets/css/HorizontalCard.module.css";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";

const HorizontalCard = (props) => {
  return (
    <>
      <hr />
      <div className={`card mb-3 ${styles["card-horizontal"]}`}>
        <div className="row mt-4 justify-content-center align-items-center g-2">
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
                <div className="col-10 col-sm-5">
                  <p className={styles.date}>{`${props.tanggal} ${props.bulan} ${props.tahun}`}</p>
                </div>
                <div className="col-sm-3">
                  <p className={styles.date}>Bagikan:</p>
                </div>
                <div className="col-sm-3">
                  <a href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdesalojajarbondowoso.com/berita/${props.data.id}`} target="_blank">
                    <img src={FB} className={`me-3 ${styles.share}`} alt="fb" />
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send/?phone&text=${props.data.judul}%0A%0AKlik+untuk+baca+selengkapnya+:+https%3A%2F%2Fdesalojajarbondowoso.com/berita/${props.data.id}`}
                    target="_blank"
                  >
                    <img src={WA} className={`me-3 ${styles.share}`} alt="wa" />
                  </a>
                </div>
              </div>
              <p className="card-text">{props.data.isi.slice(0, 129)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
