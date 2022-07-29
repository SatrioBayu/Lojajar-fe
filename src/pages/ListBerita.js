import styles from "../assets/css/ListBerita.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

const ListBerita = () => {
  const [berita, setBerita] = useState([]);
  const [error, setError] = useState("");
  const [errorDelete, setErrorDelete] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/article");
        setBerita(res.data.data);
      } catch (error) {
        setError("Terjadi kesalahan pada server");
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (e) => {
    try {
      const id = e.target.value;
      await axios.delete(`http://localhost:8000/article/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload();
    } catch (error) {
      setErrorDelete("Terjadi kesalahan pada server");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>List Berita</h3>
            <p>Anda dapat mengedit dan menghapus Berita yang telah di post pada halaman Tambah Berita</p>
            {errorDelete && (
              <div className="alert alert-danger" role="alert">
                {errorDelete}
              </div>
            )}
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <div className={`${styles["table-container"]}`}>
                <div className={`${styles.coba}`}>
                  <h6>List Artikel</h6>
                </div>
                <div className="p-3 table-responsive-md">
                  <table className="table table-sm align-middle table-bordered">
                    <thead>
                      <tr className="text-center">
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
                      {berita.map((item, index) => (
                        <tr key={item.id} className="text-center">
                          <td scope="row">{index + 1}</td>
                          <td>{item.judul}</td>
                          <td>27 Mei 2022</td>
                          <td>
                            <img src={item.ArticleImages[0].image} className={`img-fluid`} alt="" />
                          </td>
                          <td>
                            <a href={`/editberita/${item.id}`} className="btn btn-primary">
                              Edit
                            </a>
                          </td>
                          <td>
                            <button value={item.id} onClick={handleDelete} className="btn btn-danger">
                              Hapus
                            </button>
                          </td>
                          <td>
                            <a href={`/berita/${item.id}`} className="btn btn-success">
                              Lihat
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBerita;
