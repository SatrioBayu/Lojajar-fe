import styles from "../assets/css/Article.module.css";
import ArticleImage from "../assets/images/Rectangle 160.png";
import FB from "../assets/images/fb.png";
import WA from "../assets/images/wa.png";

const Article = () => {
  return (
    <section className={`page-section ${styles.article}`}>
      <h1 className="text-center">Berita Desa</h1>
      <hr className={styles["divider-custom"]} />

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={ArticleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p>Dwiky J.</p>
                  </div>
                  <div className="d-flex justify-content-end col-6">
                    <img src={FB} className="me-3" alt="fb" />
                    <img src={WA} alt="wa" />
                  </div>
                </div>
                <hr />
                <h5 className={`${styles["card-title"]}`}>Card title</h5>
                <p className={`${styles["card-text"]} mb-3`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a className={`${styles["card-link"]}`} href="">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ArticleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p>Dwiky J.</p>
                  </div>
                  <div className="d-flex justify-content-end col-6">
                    <img src={FB} className="me-3" alt="fb" />
                    <img src={WA} alt="wa" />
                  </div>
                </div>
                <hr />
                <h5 className={`${styles["card-title"]}`}>Card title</h5>
                <p className={`${styles["card-text"]} mb-3`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a className={`${styles["card-link"]}`} href="">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ArticleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p>Dwiky J.</p>
                  </div>
                  <div className="d-flex justify-content-end col-6">
                    <img src={FB} className="me-3" alt="fb" />
                    <img src={WA} alt="wa" />
                  </div>
                </div>
                <hr />
                <h5 className={`${styles["card-title"]}`}>Card title</h5>
                <p className={`${styles["card-text"]} mb-3`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a className={`${styles["card-link"]}`} href="">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ArticleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p>Dwiky J.</p>
                  </div>
                  <div className="d-flex justify-content-end col-6">
                    <img src={FB} className="me-3" alt="fb" />
                    <img src={WA} alt="wa" />
                  </div>
                </div>
                <hr />
                <h5 className={`${styles["card-title"]}`}>Card title</h5>
                <p className={`${styles["card-text"]} mb-3`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a className={`${styles["card-link"]}`} href="">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ArticleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p>Dwiky J.</p>
                  </div>
                  <div className="d-flex justify-content-end col-6">
                    <img src={FB} className="me-3" alt="fb" />
                    <img src={WA} alt="wa" />
                  </div>
                </div>
                <hr />
                <h5 className={`${styles["card-title"]}`}>Card title</h5>
                <p className={`${styles["card-text"]} mb-3`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a className={`${styles["card-link"]}`} href="">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ArticleImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <p>Dwiky J.</p>
                  </div>
                  <div className="d-flex justify-content-end col-6">
                    <img src={FB} className="me-3" alt="fb" />
                    <img src={WA} alt="wa" />
                  </div>
                </div>
                <hr />
                <h5 className={`${styles["card-title"]}`}>Card title</h5>
                <p className={`${styles["card-text"]} mb-3`}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a className={`${styles["card-link"]}`} href="">
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button className={`btn ${styles["btn-more"]} mt-5`}>
            Berita Lainnya &nbsp;<span className="fa-solid fa-arrow-right"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Article;
