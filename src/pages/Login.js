import Lojajar from "../assets/images/Rectangle 2756.png";
import LogoDesa from "../assets/images/Lambang_Bondowoso.png";
import styles from "../assets/css/Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    localStorage.removeItem("token");
    const data = { username, password };
    try {
      const res = await axios.post("https://lojajar-be.herokuapp.com/login", data);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response.status === 422) {
        setError(error.response.data.errors[0].message);
      } else if (error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        setError("Terjadi kesalahan pada server");
      }
    }
    setLoading(false);
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
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className={`mb-3`}>
              <h6 className={`fw-bold ${styles.poppin}`}>Login</h6>
              <input required onChange={(e) => setUsername(e.target.value)} type="text" className={`form-control px-3 py-2 ${styles.poppin} ${styles.placeholder}`} placeholder="Username" />
            </div>
            <h6 className={`fw-bold ${styles.poppin}`}>Password</h6>
            <div className={`mb-3 input-group`}>
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type={isOpen ? "text" : "password"}
                className={`form-control px-3 py-2 ${styles.poppin} ${styles.placeholder}`}
                placeholder="Enter password"
              />
              <span onClick={toggle} className={`input-group-text ${styles.toggle}`} id="basic-addon2">
                {isOpen ? <i className="fa-solid fa-eye-low-vision"></i> : <i className="fa-solid fa-eye"></i>}
              </span>
            </div>
            <div className="d-flex">
              {loading ? (
                <button disabled type="submit" className={`btn flex-fill ${styles["btn-more"]}`}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Signing In ...
                </button>
              ) : (
                <button type="submit" className={`btn flex-fill ${styles["btn-more"]}`}>
                  Sign In
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
