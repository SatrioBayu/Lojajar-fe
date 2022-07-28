import styles from "../assets/css/TambahUmkm.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";

const TambahUmkm = () => {
  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>Tambah UMKM</h3>
            <p>Anda dapat menambahkan UMKM yang ada di desa</p>

            <form className={`${styles.form}`}>
              <div className="mb-3">
                <h5>Gambar UMKM</h5>
                <input required className="form-control" type="file" />
              </div>
              <div className="mb-3">
                <h5>Nama UMKM</h5>
                <input required className="form-control" type="text" />
              </div>
              <div className="mb-3">
                <h5>Alamat</h5>
                <input required className="form-control" type="text" />
              </div>
              <div className="mb-3">
                <h5>Deskripsi UMKM</h5>
                <textarea required class="form-control p-3" rows="10" placeholder="Tuliskan sesuatu disini" id="floatingTextarea"></textarea>
              </div>
              <div class="d-flex">
                <button type="submit" className="me-3 btn btn-primary">
                  Post UMKM
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

export default TambahUmkm;
