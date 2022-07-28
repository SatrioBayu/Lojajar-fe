import styles from "../assets/css/ListUmkm.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";

const ListUmkm = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>List UMKM</h3>
            <p>Anda dapat mengedit dan menghapus UMKM yang telah di post pada halaman Tambah UMKM</p>
            <div className={`${styles["table-container"]}`}>
              <div className={`${styles.coba}`}>
                <h6>List Event</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUmkm;
