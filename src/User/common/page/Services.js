import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Cards from "../Cards/CardsService";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
SwiperCore.use([Navigation, Pagination]);

const Services = () => {
  return (
    <div className="h-full py-5">
      <div className="flex items-center gap-2 mt-5 mb-8">
        <span className="uppercase text-nowrap text-[var(--text-light-color)] font-Orbitron tracking-wider">
          Key Highlights
        </span>
        <div className="w-full h-[1px] border-b border-dashed border-[var(--border-dark-color)]"></div>
      </div>
      <Swiper
        slidesPerView={6}
        loop
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Services;
