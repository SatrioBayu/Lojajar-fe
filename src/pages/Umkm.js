import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Umkm.module.css";
import SideMap from "../components/SideMap";
import SideCard from "../components/SideCard";

const Umkm = () => {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <h3 className="text-center">UMKM Desa</h3>
        <p className="text-center mb-5">Usaha Mikro Kecil Menengah yang ada di Desa Lojajar</p>
        <div className="row my-5">
          <div className="col-md-8">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              <SideCard />
              <SideCard />
              <SideCard />
              <SideCard />
              <SideCard />
              <SideCard />
            </div>
          </div>
          <SideMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Umkm;
