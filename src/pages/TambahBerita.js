import AdminNavbar from "../components/AdminNavbar";
import styles from "../assets/css/TambahBerita.module.css";
import Sidebar from "../components/Sidebar";

const TambahBerita = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>Tambah Berita</h3>
            <p>Anda dapat menambah berita terkini</p>

            <form className={`${styles.form}`}>
              <div className="mb-3">
                <h5>Gambar Berita</h5>
                <input required className="form-control" type="file" />
              </div>
              <div className="mb-3">
                <h5>Judul Berita</h5>
                <input required className="form-control" type="text" />
              </div>
              <div className="mb-3">
                <h5>Isi Berita</h5>
                <textarea required class="form-control p-3" rows="10" placeholder="Tuliskan sesuatu disini" id="floatingTextarea"></textarea>
              </div>
              <div class="d-flex">
                <button type="submit" className="me-3 btn btn-primary">
                  Post Artikel
                </button>
                <button type="button" className="btn btn-danger">
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahBerita;
