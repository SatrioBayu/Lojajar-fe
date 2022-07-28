import styles from "../assets/css/Contact.module.css";
import bgstyles from "../assets/css/Background.module.css";

const Gmaps = () => {
  return (
    <section className={`page-section ${bgstyles["bg-primary"]}`} id="peta">
      <h2 className="dataDesa">Peta Desa</h2>
      <hr className={styles["divider-custom"]} />
      <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5327793840092!2d113.85380921210337!3d-7.943764500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6c358e72a28bd%3A0x68de926d025ac4ad!2sBalai%20Desa%20Lojajar!5e0!3m2!1sid!2sid!4v1658771394640!5m2!1sid!2sid"
          width="100%"
          height="450"
          loading="lazy"
          frameBorder="2"
        ></iframe>
      </div>
    </section>
  );
};

export default Gmaps;
