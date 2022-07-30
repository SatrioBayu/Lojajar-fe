import styles from "../assets/css/TambahBerita.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UpdateSurat = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    console.log(file);
  };

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>Kirim Surat yang Dibutuhkan Pemohon</h3>
            <p>Anda dapat menambah berita terkini</p>
            <form onSubmit={handleSubmit} className={`${styles.form}`}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="mb-4">
                <h5>Upload File</h5>
                <input id="pdf" accept="application/msword, application/pdf" onChange={handleUpload} required className="form-control mt-2" type="file" />
              </div>
              <div className="d-flex">
                {loading ? (
                  <button disabled type="submit" className="me-3 btn btn-primary">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Mengirim ...
                  </button>
                ) : (
                  <button type="submit" className="me-3 btn btn-primary">
                    Kirim Surat
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSurat;
