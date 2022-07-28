import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Surat.module.css";
import SideMap from "../components/SideMap";

const Surat = () => {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <h3 className="text-center">Permohonan Surat Online</h3>
        <p className={`text-center mb-5 ${styles.subtitle}`}>Ajukan pembuatan surat administrasi secara online disini</p>
        <div className="row g-4 my-4">
          <div className="col-lg-8">
            <div className={`${styles["surat-container"]}`}>
              <form className="p-4">
                <h5 className="mb-3">Nama</h5>
                <input required type="text" placeholder="Jawaban Anda" className={`mb-4 ${styles["input-jawaban"]}`} />
                <h5 className="mb-3">NIK</h5>
                <input required type="text" placeholder="Jawaban Anda" className={`mb-4 ${styles["input-jawaban"]}`} />
                <h5 className="mb-3">Email</h5>
                <input required type="text" placeholder="Jawaban Anda" className={`mb-4 ${styles["input-jawaban"]}`} />
                <h5 className="mb-3">Pilih Jenis Surat</h5>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="jenis-surat" />
                  <label className={`form-check-label ${styles["input-radio"]}`} for="flexRadioDefault1">
                    Surat Keterangan Usaha
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="jenis-surat" />
                  <label className={`form-check-label ${styles["input-radio"]}`} for="flexRadioDefault2">
                    Surat Keterangan Menikah
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input className="form-check-input" type="radio" name="jenis-surat" />
                  <label className={`form-check-label ${styles["input-radio"]}`} for="flexRadioDefault2">
                    Surat Keterangan Tidak Mampu
                  </label>
                </div>
                <h5>Keterangan</h5>
                <textarea class="form-control my-4 p-3" rows="4" placeholder="Ingin membuat surat keterangan untuk menikah pada bulan september 2022" id="floatingTextarea"></textarea>
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
