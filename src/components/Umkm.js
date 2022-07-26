import styles from "../assets/css/Umkm.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import SideCard from "./SideCard";
import { NavLink } from "react-router-dom";

const Umkm = (props) => {
  return (
    <section className={`py-5 ${styles.bg}`}>
      <h2 className="text-center">UMKM Desa</h2>
      <hr className={styles["divider-custom"]} />
      <div className="container mt-5">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {props.data.map((item) => (
            <SwiperSlide key={item.id}>
              <SideCard data={item} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <SideCard />
          </SwiperSlide>
          <SwiperSlide>
            <SideCard />
          </SwiperSlide>
          <SwiperSlide>
            <SideCard />
          </SwiperSlide>
          <SwiperSlide>
            <SideCard />
          </SwiperSlide>
          <SwiperSlide>
            <SideCard />
          </SwiperSlide> */}
        </Swiper>
        <div className="d-flex justify-content-center">
          <NavLink to="/umkm" className={`btn ${styles["btn-more"]} mt-5`}>
            UMKM Lainnya &nbsp;<span className="fa-solid fa-arrow-right"></span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Umkm;
