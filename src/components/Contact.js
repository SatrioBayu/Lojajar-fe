import styles from "../assets/css/Contact.module.css";

const Contact = () => {
  return (
    <section className={`container my-5 ${styles.contact}`} id="contact">
      <h2 className="text-center">Permohonan Surat Online</h2>
      <hr className={styles["divider-custom"]} />

      <div className={`${styles["container-surat"]}`}>
        <div className="row">
          <div className="col-md-6">
            <h3>Butuh Surat Administrasi?</h3>
            <p>Lakukan pengajuan surat administrasi secara online tanpa perlu datang ke Kantor Desa</p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 py-3">
            <a href="/permohonansurat" className={`btn ${styles["btn-more"]}`}>
              Ajukan Surat Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
