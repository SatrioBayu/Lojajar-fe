import { useState } from "react";
import styles from "../assets/css/TambahUmkm.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TambahUmkm = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [noHp, setNoHp] = useState("");
  const [choice, setChoice] = useState("Makanan");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUploadImage = (e) => {
    let images = [];
    setImages(e.target.files);
    for (const file of e.target.files) {
      images.push(URL.createObjectURL(file));
    }
    setImagePreview(images);
  };

  const handleCancel = () => {
    setImages([]);
    setImagePreview([]);
    setNama("");
    setAlamat("");
    setDeskripsi("");
    setNoHp("");
    document.getElementById("image").value = "";
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    if (images.length > 0) {
      for (const file of images) {
        formData.append("images", file);
      }
    }
    if (images.length > 3) {
      setError("Maximal 3 gambar");
      setLoading(false);
      return;
    }
    formData.append("nama", nama);
    formData.append("alamat", alamat);
    formData.append("deskripsi", deskripsi);
    formData.append("noHp", noHp);
    formData.append("jenis", choice);
    try {
      await axios.post("http://localhost:8000/umkm", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Berita berhasil ditambahkan",
        confirmButtonColor: "#198754",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/listumkm");
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi Kesalahan pada server",
      });
      if (error.response.status === 422) {
        setError(error.response.data.errors[0].message);
      } else if (error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        setError("Terjadi kesalahan pada server");
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>Tambah UMKM</h3>
            <p>Anda dapat menambahkan UMKM yang ada di desa</p>
            <form onSubmit={handleSubmit} className={`${styles.form}`}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="mb-4">
                <h5>Gambar UMKM</h5>
                <div className="row">
                  {imagePreview.map((image, index) => (
                    <div key={index} className="col-sm-4 d-flex justify-content-center">
                      <img src={image} className={`img-thumbnail ${styles.preview}`} alt="preview" />
                    </div>
                  ))}
                </div>
                <input id="image" multiple required onChange={handleUploadImage} className="mt-2 form-control" type="file" />
              </div>
              <div className="mb-4">
                <h5>Nama UMKM</h5>
                <input value={nama} required onChange={(e) => setNama(e.target.value)} className="form-control" type="text" />
              </div>
              <div className="mb-4">
                <h5>Jenis UMKM</h5>
                <select required value={choice} onChange={(e) => setChoice(e.target.value)} className="form-select" aria-label="Default select example">
                  <option value="Makanan">Makanan</option>
                  <option value="Barang">Barang</option>
                  <option value="Jasa">Jasa</option>
                </select>
              </div>
              <div className="mb-4">
                <h5>Alamat</h5>
                <input value={alamat} required onChange={(e) => setAlamat(e.target.value)} className="form-control" type="text" />
              </div>
              <div className="mb-4">
                <h5>No Hp</h5>
                <input value={noHp} required onChange={(e) => setNoHp(e.target.value)} placeholder="No Hp" className="form-control" type="text" />
              </div>
              <div className="mb-4">
                <h5>Deskripsi UMKM</h5>
                <textarea
                  value={deskripsi}
                  required
                  onChange={(e) => setDeskripsi(e.target.value)}
                  className="form-control p-3"
                  rows="10"
                  placeholder="Tuliskan sesuatu disini"
                  id="floatingTextarea"
                ></textarea>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {loading ? (
                  <button disabled type="submit" className="me-3 btn btn-primary">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Posting UMKM ...
                  </button>
                ) : (
                  <button type="submit" className="me-3 btn btn-primary">
                    Post UMKM
                  </button>
                )}
                <button onClick={handleCancel} type="button" className="btn btn-danger">
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
