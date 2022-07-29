import styles from "../assets/css/ListUmkm.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const ListUmkm = () => {
  const [umkm, setUmkm] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const umkmData = await axios.get("http://localhost:8000/umkm");
        setUmkm(umkmData.data.data);
      } catch (error) {
        setError("Terjadi kesalahan pada server");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>List UMKM</h3>
            <p>Anda dapat mengedit dan menghapus UMKM yang telah di post pada halaman Tambah UMKM</p>
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <div className={`${styles["table-container"]}`}>
                <div className={`${styles.coba}`}>
                  <h6>List Event</h6>
                </div>
                <div className="p-3 table-responsive-md">
                  <table className="table table-sm align-middle table-bordered">
                    <thead>
                      <tr className="text-center">
                        <th scope="col">No</th>
                        <th scope="col">Nama UMKM</th>
                        <th scope="col">Jenis UMKM</th>
                        <th scope="col">Gambar</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Hapus</th>
                        <th scope="col">Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      {umkm.map((item, index) => (
                        <tr key={item.id} className="text-center">
                          <td scope="row">{index + 1}</td>
                          <td>{item.nama}</td>
                          <td>{item.jenis}</td>
                          <td>
                            <img src={item.UmkmImages[0].image} className={`img-fluid`} alt="" />
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

export default ListUmkm;
