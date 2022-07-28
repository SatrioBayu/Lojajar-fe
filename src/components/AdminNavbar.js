import { NavLink } from "react-router-dom";
import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import Logo from "../assets/images/Logo.png";
import styles from "../assets/css/Navbar.module.css";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
      <div className="container-fluid px-4 px-lg-5">
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
              <div className="d-flex align-items-center">
                <img src={LogoDesa} className={`${styles.profile} rounded-circle`} alt="profile" />
                <NavLink className={`nav-link ${styles.admin}`} to="/">
                  Admin
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
