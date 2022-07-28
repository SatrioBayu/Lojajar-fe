import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/OffCanvas.module.css";
import { NavLink } from "react-router-dom";

const OffCanvas = () => {
  return (
    <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <img src={LogoDesa} className={`${styles["img"]}`} alt="logo" />
        <h5>Desa Lojajar</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="nav flex-column">
          <li class="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li class="nav-item">
            <a class={`nav-link dropdown-toggle ${styles.p}`} data-bs-toggle="collapse" href="#collapseArtikel" type="button">
              Artikel
            </a>
            <ul class="collapse" id="collapseArtikel">
              <li>
                <a className="dropdown-item" href="/tambahberita">
                  Tambah Berita
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/listberita">
                  List Berita
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class={`nav-link dropdown-toggle ${styles.p}`} data-bs-toggle="collapse" href="#collapseUMKM" type="button">
              UMKM
            </a>
            <ul class="collapse" id="collapseUMKM">
              <li>
                <a className="dropdown-item" href="/tambahumkm">
                  Tambah UMKM
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/listumkm">
                  List UMKM
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvas;
