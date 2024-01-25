"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Carousel1 from "../assets/image/carousel1.jpg";
import Carousel2 from "../assets/image/carousel2.jpg";
import Carousel4 from "../assets/image/carousel4.jpg";
import videoSource from "../assets/videos/video2.mp4";

const Carousel = () => {
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="col-lg-12">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade mb-30 mb-lg-0"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 15000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <video
                      src={videoSource}
                      className="h-full w-full object-cover opacity-40"
                      muted
                      loop
                      autoPlay
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src={Carousel1}
                      alt="carousel"
                      className="h-full w-full object-cover opacity-40"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src={Carousel2}
                      alt="carousel"
                      className="h-full w-full object-cover opacity-40"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img
                      src={Carousel4}
                      alt="carousel"
                      className="h-full w-full object-cover opacity-40"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
