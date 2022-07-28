import AdminNavbar from "../components/AdminNavbar";
import styles from "../assets/css/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import Layer from "../assets/images/Rectangle 27.png";
import Layer2 from "../assets/images/Rectangle 27-1.png";

const Dashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`py-4 ${styles.content}`}>
          <div class="container">
            <h3>Dashboard</h3>
            <div class="row">
              <div class="col-sm-4">
                <div class="card mb-3 p-3">
                  <div class="row align-items-center g-0">
                    <div class="col-lg-4 d-flex justify-content-center">
                      <img src={Layer} class="img-fluid rounded-start" alt="image" />
                    </div>
                    <div class="col-lg-8">
                      <div class="card-body">
                        <h4 class="fw-bold card-title">3.409</h4>
                        <p class="card-text">Pengunjung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card mb-3 p-3">
                  <div class="row align-items-center g-0">
                    <div class="col-lg-4 d-flex justify-content-center">
                      <img src={Layer2} class="img-fluid rounded-start" alt="image" />
                    </div>
                    <div class="col-lg-8">
                      <div class="card-body">
                        <h4 class="card-title fw-bold">100</h4>
                        <p class="card-text">Berita</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card mb-3 p-3">
                  <div class="row align-items-center g-0">
                    <div class="col-lg-4 d-flex justify-content-center">
                      <img src={Layer} class="img-fluid rounded-start" alt="image" />
                    </div>
                    <div class="col-lg-8">
                      <div class="card-body">
                        <h4 class="card-title fw-bold">9</h4>
                        <p class="card-text">UMKM</p>
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
