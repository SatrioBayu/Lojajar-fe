import AdminNavbar from "../components/AdminNavbar";
import styles from "../assets/css/TambahBerita.module.css";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const TambahBerita = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <AdminNavbar />
      <div className={`${styles.main}`}>
        <Sidebar />
        <div className={`p-4 ${styles.content}`}>
          <div className="container">
            <h3>Tambah Berita</h3>
            <p>Anda dapat menambah berita terkini</p>

            <form onSubmit={handleSubmit} className={`${styles.form}`}>
              <div className="mb-4">
                <h5>Gambar Berita</h5>
                {imagePreview && <img src={imagePreview} className={`img-thumbnail ${styles.preview}`} alt="thumbnail" />}
                <input onChange={handleUploadImage} required className="form-control mt-2" type="file" />
              </div>
              <div className="mb-4">
                <h5>Judul Berita</h5>
                <input required onChange={(e) => setJudul(e.target.value)} className="form-control" type="text" />
              </div>
              <div className="mb-4">
                <h5>Isi Berita</h5>
                <textarea required onChange={(e) => setIsi(e.target.value)} class="form-control p-3" rows="10" placeholder="Tuliskan sesuatu disini" id="floatingTextarea"></textarea>
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
