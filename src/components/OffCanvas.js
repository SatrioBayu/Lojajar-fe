import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/OffCanvas.module.css";
import { NavLink } from "react-router-dom";
const OffCanvas = () => {
  return (
    <div className={`offcanvas offcanvas-start ${styles.bg}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <img src={LogoDesa} className={`${styles["img"]}`} alt="logo" />
        <h5>Desa Lojajar</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className={`offcanvas-body ${styles.link}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              <i className="fa-solid fa-table-columns"></i> &nbsp; Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <a className={`nav-link dropdown-toggle ${styles.p}`} data-bs-toggle="collapse" href="#collapseArtikel" type="button">
              <i className="fa-solid fa-newspaper"></i> &nbsp; Artikel
            </a>
            <ul className={`collapse ${styles["collapse-link"]}`} id="collapseArtikel">
              <li>
                <a className="dropdown-item" href="/tambahberita">
                  <i className="fa-solid fa-plus"></i> &nbsp; Tambah Berita
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/listberita">
                  <i className="fa-solid fa-list"></i> &nbsp; List Berita
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className={`nav-link dropdown-toggle ${styles.p}`} data-bs-toggle="collapse" href="#collapseUMKM" type="button">
              <i className="fa-solid fa-store"></i> &nbsp; UMKM
            </a>
            <ul className={`collapse ${styles["collapse-link"]}`} id="collapseUMKM">
              <li>
                <a className="dropdown-item" href="/tambahumkm">
                  <i className="fa-solid fa-plus"></i> &nbsp; Tambah UMKM
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/listumkm">
                  <i className="fa-solid fa-list"></i> &nbsp; List UMKM
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/listsurat">
              <i className="fa-solid fa-envelope"></i> &nbsp; Surat Permohonan
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              <i className="fa-solid fa-right-from-bracket"></i> &nbsp; Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
