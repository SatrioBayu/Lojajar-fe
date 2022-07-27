import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Berita.module.css";
import SideMap from "../components/SideMap";
import HorizontalCard from "../components/HorizontalCard";

const Berita = () => {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <h3 className="text-center">Berita Desa</h3>
        <p className="text-center mb-5">Berita terkini seputar kejadian dan kegiatan di Desa Lojajar</p>
        <div className="row my-5">
          <div className="col-lg-8">
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </div>
          <SideMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Berita;
