import Lojajar from "../assets/images/Rectangle 2756.png";
import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    navigate("/dashboard");
  };

  return (
    <div className={`container-fluid ${styles["container-custom"]}`}>
      <div className="row align-items-center">
        <div className={`col-md-7 ${styles["no-padding"]}`}>
          <img src={Lojajar} alt="image" className={styles.images} />
        </div>
        <div className="col-md-5 p-5">
          <div className="d-flex align-items-center">
            <img src={LogoDesa} alt="gambar" className={`me-4 ${styles.icon}`} />
            <h5 className={`${styles.desa} fw-bold`}>E-LOJAJAR</h5>
          </div>
          <h5 className={`my-4 fw-bold ${styles.poppin}`}>Selamat Datang</h5>
          <form onSubmit={handleSubmit}>
            <div className={`mb-3`}>
              <h6 className={`fw-bold ${styles.poppin}`}>Login</h6>
              <input required type="text" className={`form-control px-3 py-2 ${styles.poppin} ${styles.placeholder}`} placeholder="Email or phone number" />
            </div>
            <h6 className={`fw-bold ${styles.poppin}`}>Password</h6>
            <div className={`mb-3 input-group`}>
              <input required type={isOpen ? "text" : "password"} className={`form-control px-3 py-2 ${styles.poppin} ${styles.placeholder}`} placeholder="Enter password" />
              <span onClick={toggle} className={`input-group-text ${styles.toggle}`} id="basic-addon2">
                {isOpen ? <i className="fa-solid fa-eye-low-vision"></i> : <i className="fa-solid fa-eye"></i>}
              </span>
            </div>
            <div className="d-flex">
              <button type="submit" className="flex-fill btn btn-primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
