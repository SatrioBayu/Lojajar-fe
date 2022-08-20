import styles from "../assets/css/ListBerita.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ListSurat = () => {
  const [loading, setLoading] = useState(false);
  const [surat, setSurat] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://lojajar-be.herokuapp.com/surat");
        setSurat(res.data.data);
      } catch (error) {
        setError("Terjadi kesalahan pada server");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    try {
      const id = e.target.value;
      const data = { status: "Selesai Diproses" };
      await axios.put(`https://lojajar-be.herokuapp.com/surat/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Surat berhasil diubah",
        confirmButtonColor: "#198754",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan, silahkan coba lagi",
      });
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>List Permohonan Surat</h3>
            <p>Anda dapat mengedit status surat</p>
            {error ? (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            ) : (
              <div className={`${styles["table-container"]}`}>
                <div className={`${styles.coba}`}>
                  <h6>List Surat Permohonan</h6>
                </div>
                <div className="p-3 table-responsive-xxl">
                  <table className="table table-sm align-middle table-bordered">
                    <thead>
                      <tr className="text-center">
                        <th scope="col">No</th>
                        <th scope="col">Nama Pemohon</th>
                        <th scope="col">NIK Pemohon</th>
                        <th scope="col">Nama</th>
                        <th scope="col">NIK</th>
                        <th scope="col">No Wa</th>
                        <th scope="col">Jenis</th>
                        <th scope="col">Keterangan</th>
                        <th scope="col">Status</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="10" className="text-center p-3">
                            <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <>
                          {surat.length > 0 ? (
                            <>
                              {surat.map((item, index) => (
                                <tr key={item.id} className="text-center">
                                  <td scope="row">{index + 1}</td>
                                  <td>{item.nama}</td>
                                  <td>{item.nik}</td>
                                  <td>{item.namaPemohon}</td>
                                  <td>{item.nikPemohon}</td>
                                  <td>{item.noWa}</td>
                                  <td>{item.jenis}</td>
                                  <td>{item.keterangan}</td>
                                  <td>{item.status}</td>
                                  <td>
                                    {item.status === "Diproses" ? (
                                      <button value={item.id} onClick={handleUpdate} className="btn btn-success flex-fill">
                                        Update
                                      </button>
                                    ) : (
                                      <button disabled className="btn btn-success flex-fill">
                                        Selesai
                                      </button>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </>
                          ) : (
                            <tr>
                              <td colSpan="8" className="p-3 fw-bold text-center">
                                Tidak ada surat permohonan
                              </td>
                            </tr>
                          )}
                        </>
                      )}
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

export default ListSurat;
