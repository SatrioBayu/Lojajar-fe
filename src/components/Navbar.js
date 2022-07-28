import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
      <div className="container px-4 px-lg-5">
        <img src={LogoDesa} className={`${styles.desa} me-3`} alt="logo" />
        <NavLink className="navbar-brand" to="/">
          E-LOJAJAR
        </NavLink>
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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/berita">
                Berita
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/umkm">
                UMKM
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/permohonansurat">
                Surat Online
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
