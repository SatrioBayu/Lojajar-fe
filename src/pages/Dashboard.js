import AdminNavbar from "../components/AdminNavbar";
import styles from "../assets/css/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import Layer from "../assets/images/Rectangle 27.png";
import Layer2 from "../assets/images/Rectangle 27-1.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [berita, setBerita] = useState(0);
  const [umkm, setUmkm] = useState(0);
  const [surat, setSurat] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleData = await axios.get("http://localhost:8000/article");
        setBerita(articleData.data.data.length);
        const umkmData = await axios.get("http://localhost:8000/umkm");
        setUmkm(umkmData.data.data.length);
        const suratData = await axios.get("http://localhost:8000/surat");
        setSurat(suratData.data.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`py-4 ${styles.content}`}>
          <div className="container">
            <h3>Dashboard</h3>
            <div className="row g-3">
              <div className="col-sm-3">
                <div className="card h-100 mb-3 p-3">
                  <div className="row align-items-center g-0">
                    <div className="col-lg-4 d-flex justify-content-center">
                      <img src={Layer} className="img-fluid rounded-start" alt="image" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h4 className="fw-bold card-title">3.409</h4>
                        <p className="card-text">Pengunjung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card h-100 mb-3 p-3">
                  <div className="row align-items-center g-0">
                    <div className="col-lg-4 d-flex justify-content-center">
                      <img src={Layer2} className="img-fluid rounded-start" alt="image" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h4 className="card-title fw-bold">{berita}</h4>
                        <p className="card-text">Berita</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card h-100 mb-3 p-3">
                  <div className="row align-items-center g-0">
                    <div className="col-lg-4 d-flex justify-content-center">
                      <img src={Layer} className="img-fluid rounded-start" alt="image" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h4 className="card-title fw-bold">{umkm}</h4>
                        <p className="card-text">UMKM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card h-100 mb-3 p-3">
                  <div className="row align-items-center g-0">
                    <div className="col-lg-4 d-flex justify-content-center">
                      <img src={Layer} className="img-fluid rounded-start" alt="image" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h4 className="card-title fw-bold">{surat}</h4>
                        <p className="card-text">Pengajuan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
