import styles from "../assets/css/SideCard.module.css";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";

const SideCard = (props) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.data.UmkmImages[0].image} className={`card-img-top ${styles["card-img"]}`} alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              {props.data.jenis == "Makanan" && <p className={`badge ${styles["card-tag--makanan"]}`}>{props.data.jenis}</p>}
              {props.data.jenis == "Barang" && <p className={`badge ${styles["card-tag--barang"]}`}>{props.data.jenis}</p>}
              {props.data.jenis == "Jasa" && <p className={`badge ${styles["card-tag--jasa"]}`}>{props.data.jenis}</p>}
            </div>
            <div className="d-flex justify-content-end col-6">
              <img src={FB} className={`me-3 ${styles["card-icon"]}`} alt="fb" />
              <img src={WA} className={`${styles["card-icon"]}`} alt="wa" />
            </div>
          </div>
          <h5 className={`fw-bold ${styles["card-title"]}`}>{props.data.nama}</h5>
          <p className={`${styles["card-text"]} mb-3`}>{props.data.alamat}</p>
          <h5 className={`fw-bold ${styles["card-title"]}`}>
            <span className="fs-6 fw-normal">No Hp: </span> {props.data.noHp}
          </h5>
          <a className={`${styles["card-link"]}`} href={`/umkm/${props.data.id}`}>
            Lihat Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
