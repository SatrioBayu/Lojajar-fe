import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Umkm.module.css";
import SideMap from "../components/SideMap";
import SideCard from "../components/SideCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Umkm = () => {
  const [loading, setLoading] = useState(true);
  const [umkm, setUmkm] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const umkm = await (await axios.get("http://localhost:8000/umkm")).data;
        setUmkm(umkm.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Terjadi kesalahan pada server");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.content}`}>
        <h3 className="text-center">UMKM Desa</h3>
        <p className="text-center mb-5">Usaha Mikro Kecil Menengah yang ada di Desa Lojajar</p>
        <div className="row gx-5 gy-4 my-5">
          {loading ? (
            <div className="col-lg-8 d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {error ? (
                <div className="col-lg-8 d-flex justify-content-center">
                  <h5>{error}</h5>
                </div>
              ) : (
                <div className="col-lg-8">
                  {umkm.length > 0 ? (
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                      {umkm.map((umkm) => (
                        <SideCard key={umkm.id} data={umkm} />
                      ))}
                    </div>
                  ) : (
                    <h5 className="text-center">Tidak Ada UMKM</h5>
                  )}
                </div>
              )}
            </>
          )}
          <SideMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Umkm;
