import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../assets/css/Berita.module.css";
import SideMap from "../components/SideMap";
import HorizontalCard from "../components/HorizontalCard";
import { useState, useEffect } from "react";
import axios from "axios";

const month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const Berita = () => {
  const [loading, setLoading] = useState(true);
  const [berita, setBerita] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const berita = await (await axios.get("http://localhost:8000/article")).data;
        setBerita(berita.data);
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
        <h3 className="text-center">Berita Desa</h3>
        <p className="text-center mb-5">Berita terkini seputar kejadian dan kegiatan di Desa Lojajar</p>
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
                <>
                  {berita.length > 0 ? (
                    <div className="col-lg-8">
                      {berita.map((item) => (
                        <HorizontalCard
                          key={item.id}
                          tanggal={new Date(item.updatedAt).getDate()}
                          bulan={month[new Date(item.updatedAt).getMonth()]}
                          tahun={new Date(item.updatedAt).getFullYear()}
                          data={item}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="col-lg-8 d-flex justify-content-center">
                      <h5>Tidak ada berita</h5>
                    </div>
                  )}
                </>
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

export default Berita;
