"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import EachPage from "../../common/Components/EachPage";
import { Typewriter } from "react-simple-typewriter";
import { Card } from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="h-[500px] w-full grid grid-cols-12 bg-[#0f1019]">
          <div className="col-span-7 flex justify-center items-center h-full">
            <div className="w-[80%] mt-4 ml-[10%] flex gap-1 flex-col">
              <h3 className="font-Orbitron tracking-wider text-white text-base font-semibold">
                Power Your Online Presence with,
              </h3>
              <div className="font-Orbitron text-[#ea580c] tracking-wider uppercase text-[3rem] font-semibold">
                <Typewriter
                  words={[
                    "Quick-Build",
                    "Mobile-Ease",
                    "Easy-CMS",
                    "SEO-Boost",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
              </div>
              <p className="font-poppins w-[95%] text-sm text-white/80">
                Discover WebUpaye for budget-friendly, responsive websites.
                Elevate your online presence with our services, offering quality
                design at a low cost.
              </p>
              <div>
                <Card
                  variant="ghost"
                  color="primary"
                  className="uppercase font-gruppo inline-block rounded-none px-7 py-[0.6rem] mt-5 border  border-white/20 bg-transparent text-dark-color hover:border-white/20 hover:bg-white/15 text-sm tracking-wider hover:tracking-widest"
                  radius="none"
                  shadow="none"
                  isPressable
                >
                  <div className="flex text-[#ea580c] justify-center gap-1 border-white/20 font-semibold duration-150 items-center">
                    Let's Go <FaArrowRight />
                  </div>
                </Card>
                <br />
                <Card
                  variant="ghost"
                  color="primary"
                  className="uppercase font-gruppo rounded-none py-[0.6rem] border  border-white/20 bg-transparent text-dark-color text-white/70 mt-10 w-[35px] h-[35px] flex justify-center items-center hover:border-white/20 hover:bg-white/15 text-sm tracking-wider hover:tracking-widest"
                  radius="none"
                  shadow="none"
                  isPressable
                  onClick={scrollDown}
                >
                  <FaChevronDown />
                </Card>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full col-span-5">
            <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Autoplay]}
              // modules={[Autoplay, Pagination]}
              className="mySwiper w-full"
            >
              <SwiperSlide>
                <EachPage />
              </SwiperSlide>
              <SwiperSlide>
                <EachPage />
              </SwiperSlide>
              <SwiperSlide>
                <EachPage />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
