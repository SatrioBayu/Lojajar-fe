import styles from "../assets/css/Contact.module.css";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">Data Desa</h2>
        <hr className={styles["divider-custom"]} />
        <div className="row mt-5 gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="fa-solid fa-city fa-3x"></i>
              </div>
              <h3 className="h4 mb-2">DUSUN</h3>
              <p className="text-muted mb-0">5</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="fa-solid fa-house fa-3x"></i>
              </div>
              <h3 className="h4 mb-2">RW</h3>
              <p className="text-muted mb-0">17</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="fa-solid fa-house fa-3x"></i>
              </div>
              <h3 className="h4 mb-2">RT</h3>
              <p className="text-muted mb-0">53</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="fa-solid fa-person fa-3x"></i>
              </div>
              <h3 className="h4 mb-2">Penduduk</h3>
              <p className="text-muted mb-0">53</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
