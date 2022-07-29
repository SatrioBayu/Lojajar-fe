import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Surat.module.css";
import SideMap from "../components/SideMap";
import { useState } from "react";

const Surat = () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [jenisSurat, setJenisSurat] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nama);
    console.log(nik);
    console.log(email);
    console.log(jenisSurat);
    console.log(keterangan);
  };

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <h3 className="text-center">Permohonan Surat Online</h3>
        <p className={`text-center mb-5 ${styles.subtitle}`}>Ajukan pembuatan surat administrasi secara online disini</p>
        <div className="row g-5 my-4">
          <div className="col-lg-8">
            <div className={`${styles["surat-container"]}`}>
              <form onSubmit={handleSubmit} className="p-4">
                {/* Nama */}
                <h5 className="mb-3">Nama</h5>
                <input required onChange={(e) => setNama(e.target.value)} type="text" placeholder="Jawaban Anda" className={`mb-4 ${styles["input-jawaban"]}`} />

                {/* NIK */}
                <h5 className="mb-3">NIK</h5>
                <input required onChange={(e) => setNik(e.target.value)} type="text" placeholder="Jawaban Anda" className={`mb-4 ${styles["input-jawaban"]}`} />

                {/* Email */}
                <h5 className="mb-3">Email</h5>
                <input required onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Jawaban Anda" className={`mb-4 ${styles["input-jawaban"]}`} />

                {/* Jenis Surat */}
                <h5 className="mb-3">Pilih Jenis Surat</h5>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} value="Surat Keterangan Usaha" className="form-check-input" type="radio" name="jenis-surat" />
                  <label className={`form-check-label ${styles["input-radio"]}`} htmlFor="flexRadioDefault1">
                    Surat Keterangan Usaha
                  </label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Menikah" />
                  <label className={`form-check-label ${styles["input-radio"]}`} htmlFor="flexRadioDefault2">
                    Surat Keterangan Menikah
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Tidak Mampu" />
                  <label className={`form-check-label ${styles["input-radio"]}`} htmlFor="flexRadioDefault2">
                    Surat Keterangan Tidak Mampu
                  </label>
                </div>

                {/* Keterangan */}
                <h5>Keterangan</h5>
                <textarea
                  onChange={(e) => setKeterangan(e.target.value)}
                  class="form-control my-4 p-3"
                  rows="4"
                  placeholder="Ingin membuat surat keterangan untuk menikah pada bulan september 2022"
                  id="floatingTextarea"
                ></textarea>
                <button className="btn btn-primary px-3">Kirim</button>
              </form>
            </div>
          </div>
          <SideMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Surat;
