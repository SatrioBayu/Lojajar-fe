import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Surat.module.css";
import SideMap from "../components/SideMap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Surat = () => {
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [namaPemohon, setNamaPemohon] = useState("");
  const [nikPemohon, setNikPemohon] = useState("");
  const [noWa, setNoWa] = useState("");
  const [jenisSurat, setJenisSurat] = useState("");
  const [keterangan, setKeterangan] = useState(null);
  const navigate = useNavigate();
  const swalButton = Swal.mixin({
    customClass: {
      confirmButton: `btn ${styles["btn-more"]}`,
    },
    buttonsStyling: false,
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      nama,
      nik,
      namaPemohon,
      nikPemohon,
      noWa,
      jenis: jenisSurat,
      keterangan,
    };
    console.log(data);
    try {
      await axios.post("https://lojajar-be.herokuapp.com/surat", data);
      swalButton
        .fire({
          title: "Permohonan Surat Berhasil Terkirim!",
          text: "Silahkan menunggu konfirmasi persetujuan surat yang akan dikirim ke email anda",
          icon: "success",
          confirmButtonText: "Ok, Mengerti",
          allowOutsideClick: false,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan, silahkan coba lagi",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <h3 className="text-center">Permohonan Surat Online</h3>
        <p className={`text-center mb-5 ${styles.subtitle}`}>Ajukan pembuatan surat administrasi secara online disini</p>
        <div className="row gx-5 gy-4 my-4">
          <div className="col-lg-8">
            <div className={`${styles["surat-container"]}`}>
              <form id="form" onSubmit={handleSubmit} className="p-4">
                {/* Nama */}
                <div className="row">
                  <h5 className="mb-3">Nama</h5>
                  <div className="col-md-6 d-flex">
                    <input required onChange={(e) => setNama(e.target.value)} type="text" placeholder="Jawaban Anda" className={`flex-fill pb-2 mb-4 ${styles["input-jawaban"]}`} />
                  </div>
                </div>

                {/* NIK */}
                <div className="row">
                  <h5 className="mb-3">NIK</h5>
                  <div className="col-md-6 d-flex">
                    <input required onChange={(e) => setNik(e.target.value)} type="text" placeholder="Jawaban Anda" className={`flex-fill pb-2 mb-4 ${styles["input-jawaban"]}`} />
                  </div>
                </div>

                {/* Nama */}
                <div className="row">
                  <h5 className="mb-3">Nama Pemohon</h5>
                  <div className="col-md-6 d-flex">
                    <input required onChange={(e) => setNamaPemohon(e.target.value)} type="text" placeholder="Jawaban Anda" className={`flex-fill pb-2 mb-4 ${styles["input-jawaban"]}`} />
                  </div>
                </div>

                {/* NIK */}
                <div className="row">
                  <h5 className="mb-3">NIK Pemohon</h5>
                  <div className="col-md-6 d-flex">
                    <input required onChange={(e) => setNikPemohon(e.target.value)} type="text" placeholder="Jawaban Anda" className={`flex-fill pb-2 mb-4 ${styles["input-jawaban"]}`} />
                  </div>
                </div>

                {/* Email */}
                <div className="row">
                  <h5 className="mb-3">No Whatsapp</h5>
                  <div className="col-md-6 d-flex">
                    <input required onChange={(e) => setNoWa(e.target.value)} type="text" placeholder="Jawaban Anda" className={`flex-fill pb-2 mb-4 ${styles["input-jawaban"]}`} />
                  </div>
                </div>

                {/* Jenis Surat */}
                <h5 className="mb-3">Pilih Jenis Surat</h5>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} value="Surat Keterangan Usaha" className="form-check-input" type="radio" name="jenis-surat" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Keterangan Usaha</label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Umum" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Keterangan Umum</label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Satu Nama" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Keterangan Satu Nama</label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Domisili" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Keterangan Domisili</label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Kematian" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Kematian</label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Ahli Waris" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Keterangan Ahli Waris</label>
                </div>
                <div className="form-check">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Pengantar SKCK" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Pengantar SKCK</label>
                </div>
                <div className="form-check mb-4">
                  <input required onChange={(e) => setJenisSurat(e.target.value)} className="form-check-input" type="radio" name="jenis-surat" value="Surat Keterangan Tidak Mampu" />
                  <label className={`form-check-label ${styles["input-radio"]}`}>Surat Keterangan Tidak Mampu</label>
                </div>

                {/* Keterangan */}
                <h5>Keterangan</h5>
                <textarea onChange={(e) => setKeterangan(e.target.value)} className="form-control my-4 p-3" rows="4" placeholder="Jawaban Anda" id="floatingTextarea"></textarea>
                {loading ? (
                  <button disabled className={`btn px-3 ${styles["btn-more"]}`}>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Mengirim ...
                  </button>
                ) : (
                  <button type="submit" className={`btn px-3 ${styles["btn-more"]}`}>
                    Kirim
                  </button>
                )}
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
