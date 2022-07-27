import styles from "../assets/css/Contact.module.css";

const Contact = () => {
  return (
    <section className={`container my-5 ${styles.contact}`} id="contact">
      <h1 className="text-center">Permohonan Surat Online</h1>
      <hr className={styles["divider-custom"]} />

      <div className={`${styles["container-surat"]}`}>
        <div className="row">
          <div className="col-md-6">
            <h3>Butuh Surat Administrasi?</h3>
            <p>Lakukan pengajuan surat administrasi secara online tanpa perlu datang ke Kantor Desa</p>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 py-3">
            <button className={`btn ${styles["btn-more"]}`}>Ajukan Surat Online</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
