import styles from "../assets/css/Contact.module.css";

const Jumbotron = () => {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1 className="text-white font-weight-bold">DESA LOJAJAR</h1>
            <h1 className="text-white font-weight-bold">KECAMATAN TENGGARANG</h1>
            <h1 className="text-white font-weight-bold">KABUPATEN BONDOWOSO</h1>
            <hr className={styles["divider-custom"]} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron;
