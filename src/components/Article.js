import styles from "../assets/css/Article.module.css";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";

const Article = (props) => {
  return (
    <section className={`my-5 ${styles.article}`}>
      <h2 className="text-center">Berita Desa</h2>
      <hr className={styles["divider-custom"]} />

      <div className="mt-5 container">
        <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 gx-4">
          {props.data.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
                <img src={item.ArticleImages[0].image} className={styles["card-img"]} alt="..." />
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <p>{item.User.username}</p>
                    </div>
                    <div className="d-flex justify-content-end col-6">
                      <a href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2Flojajar.vercel.app/berita/${item.id}`} target="_blank">
                        <img src={FB} className="me-3" alt="fb" />
                      </a>
                      <a href={`https://api.whatsapp.com/send/?phone&text=${item.judul}%0A%0AKlik+untuk+baca+selengkapnya+:+https%3A%2F%2Flojajar.vercel.app/berita/${item.id}`} target="_blank">
                        <img src={WA} alt="wa" />
                      </a>
                    </div>
                  </div>
                  <hr />
                  <h5 className={`${styles["card-title"]}`}>{item.judul}</h5>
                  <p className={`${styles["card-text"]} mb-3`}>{item.isi.slice(0, 129)}</p>
                  <a className={`${styles["card-link"]}`} href={`/berita/${item.id}`}>
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <a href="/berita" className={`btn ${styles["btn-more"]} mt-5`}>
            Berita Lainnya &nbsp;<span className="fa-solid fa-arrow-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Article;
