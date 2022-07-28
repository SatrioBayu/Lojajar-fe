import styles from "../assets/css/ListBerita.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import ArticleImage from "../assets/images/Rectangle 160.png";

const ListBerita = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>List Berita</h3>
            <p>Anda dapat mengedit dan menghapus Berita yang telah di post pada halaman Tambah Berita</p>
            <div className={`${styles["table-container"]}`}>
              <div className={`${styles.coba}`}>
                <h6>List Artikel</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBerita;
