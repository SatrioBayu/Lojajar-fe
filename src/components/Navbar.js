import LogoDesa from "../assets/images/image_14.png";
import styles from "../assets/css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <img src={LogoDesa} className={`${styles.desa} me-3`} alt="logo" />
        <a className="navbar-brand" href="/">
          E-LOJAJAR
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#article">
                Berita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/umkm">
                UMKM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Surat Online
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
