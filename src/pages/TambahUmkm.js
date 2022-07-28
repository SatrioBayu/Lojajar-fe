import { useState } from "react";
import styles from "../assets/css/TambahUmkm.module.css";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";

const TambahUmkm = () => {
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jamBuka, setJamBuka] = useState("");
  const [jamTutup, setJamTutup] = useState("");
  const [choice, setChoice] = useState(1);

  const handleUploadImage = (e) => {
    let images = [];
    setImages(e.target.files);
    for (const file of e.target.files) {
      images.push(URL.createObjectURL(file));
    }
    setImagePreview(images);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nama);
    console.log(alamat);
    console.log(deskripsi);
    console.log(jamBuka);
    console.log(jamTutup);
    console.log(choice);
    console.log(images);
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
              <div className="mb-4">
                <h5>Gambar UMKM</h5>
                <div class="row">
                  {imagePreview.map((image, index) => (
                    <div key={index} class="col-sm-4">
                      <img src={image} className={`img-thumbnail ${styles.preview}`} alt="preview" />
                    </div>
                  ))}
                </div>
                <input multiple required onChange={handleUploadImage} className="mt-2 form-control" type="file" />
              </div>
              <div className="mb-4">
                <h5>Nama UMKM</h5>
                <input required onChange={(e) => setNama(e.target.value)} className="form-control" type="text" />
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
                <input required onChange={(e) => setAlamat(e.target.value)} className="form-control" type="text" />
              </div>
              <div className="mb-4">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <h5>Jam Buka</h5>
                    <input required onChange={(e) => setJamBuka(e.target.value)} placeholder="07.00" className="form-control" type="text" />
                  </div>
                  <div class="col-sm-6">
                    <h5>Jam Tutup</h5>
                    <input required onChange={(e) => setJamTutup(e.target.value)} placeholder="17.00" className="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h5>Deskripsi UMKM</h5>
                <textarea required onChange={(e) => setDeskripsi(e.target.value)} class="form-control p-3" rows="10" placeholder="Tuliskan sesuatu disini" id="floatingTextarea"></textarea>
              </div>
              <div class="d-flex flex-wrap gap-2">
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
