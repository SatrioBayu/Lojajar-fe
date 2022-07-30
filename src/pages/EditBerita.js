import AdminNavbar from "../components/AdminNavbar";
import styles from "../assets/css/TambahBerita.module.css";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditBerita = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleCancel = (e) => {
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("images", image);
    }
    formData.append("judul", judul);
    formData.append("isi", isi);
    try {
      await axios.put(`http://localhost:8000/article/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Berita berhasil diubah",
        confirmButtonColor: "#198754",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/listberita");
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan saat mengubah berita",
      });
      if (error.response.status == 422) {
        setError(error.response.data.errors[0].message);
      } else if (error.response.status === 400) {
        setError(error.response.data.message);
      } else if (error.response.status === 500) {
        setError("Isi berita terlalu panjang. Maximum 1000 karakter");
      } else {
        setError("Terjadi kesalahan pada server");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const beritaData = await axios.get(`http://localhost:8000/article/${id}`);
        setJudul(beritaData.data.data.judul);
        setIsi(beritaData.data.data.isi);
        setImagePreview(beritaData.data.data.ArticleImages[0].image);
      } catch (error) {
        console.log(error);
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
            <h3>Edit Berita</h3>
            <p>Anda dapat menambah berita terkini</p>

            <form onSubmit={handleSubmit} className={`${styles.form}`}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <div className="mb-4">
                <h5>Gambar Berita</h5>
                {imagePreview && <img src={imagePreview} className={`img-thumbnail ${styles.preview}`} alt="thumbnail" />}
                <input onChange={handleUploadImage} className="form-control mt-2" type="file" />
              </div>
              <div className="mb-4">
                <h5>Judul Berita</h5>
                <input required value={judul} onChange={(e) => setJudul(e.target.value)} className="form-control" type="text" />
              </div>
              <div className="mb-4">
                <h5>Isi Berita</h5>
                <textarea required value={isi} onChange={(e) => setIsi(e.target.value)} className="form-control p-3" rows="10" placeholder="Tuliskan sesuatu disini" id="floatingTextarea"></textarea>
              </div>
              <div className="d-flex">
                {loading ? (
                  <button disabled type="submit" className="me-3 btn btn-primary">
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Updating ...
                  </button>
                ) : (
                  <button type="submit" className="me-3 btn btn-primary">
                    Update Artikel
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

export default EditBerita;
