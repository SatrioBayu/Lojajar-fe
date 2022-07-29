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
              <div className="p-3 table-responsive-md">
                <table class="table table-sm table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Judul Berita</th>
                      <th scope="col">Tanggal</th>
                      <th scope="col">Gambar</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Hapus</th>
                      <th scope="col">Lihat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>Mahasiswa Magang Membuat Website Desa</td>
                      <td>27 Mei 2022</td>
                      <td>
                        <img src={ArticleImage} className={`img-fluid`} alt="" />
                      </td>
                      <td>
                        <a href="/editberita/1" className="btn btn-primary">
                          Edit
                        </a>
                      </td>
                      <td>
                        <a className="btn btn-danger">Hapus</a>
                      </td>
                      <td>
                        <a className="btn btn-success">Lihat</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBerita;
