import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Card } from "@nextui-org/react";
import LaptopSVG from "./assets/js/LaptopSVG";
import video1 from "./assets/videos/video1.mp4";
import video3 from "./assets/videos/video3.mp4";
import Image1 from "./assets/images/image1.png";
import Image2 from "./assets/images/image2.png";

const AboutContent = ({ position, heading }) => {
  const shiftp = position;
  const shift = !shiftp ? 0 : -shiftp;
  return (
    <div className="h-full w-full flex justify-center gap-5 items-center">
      <div className="w-[55%] boxshadowg  overflow-hidden">
        <div className="relative h-full  w-[95%] mx-auto overflow-hidden">
          {!heading && (
            <div className="w-full overflow-auto whitespace-nowrap z-20 text-[var(--primary-color)] text-[3.5rem] font-bold h-[100px] font-Orbitron">
              <div
                className={`inset-0 pt-2 flex text-border gap-20 absolute`}
                style={{ left: shift * 6 + "px" }}
              >
                <span>Discovering Webupaya</span>
                <span>Our story</span>
                <span>Discovering Webupaya</span>
                <span>Our story</span>
              </div>
            </div>
          )}
          {heading && (
            <div className="w-full overflow-auto whitespace-nowrap z-20 text-[var(--primary-color)] text-[3.5rem] font-bold h-[100px] font-Orbitron">
              <div
                className={`inset-0 pt-2 capitalize flex text-border gap-20 absolute`}
                style={{ left: 0 + "px" }}
              >
                <span>{heading}</span>
              </div>
            </div>
          )}
          <p className="font-gruppo text-light-color  mt-3 text-2xl w-[90%]">
            Transform your online presence with our affordable, sleek website
            designs. We create modern, engaging platforms that captivate your
            audience without breaking the bank. Elevate your brand today!
          </p>
          <Card
            variant="ghost"
            color="primary"
            className="uppercase font-gruppo mt-10 inline-block rounded-none px-7 py-[0.6rem] border  border-dark-color bg-transparent text-dark-color hover:border-[var(--border-dark-color)] hover:bg-[var(--border-light-color)] text-sm tracking-wider hover:tracking-widest"
            radius="none"
            shadow="none"
            isPressable
          >
            <div className="flex text-primary-color justify-center gap-1 border-dark-color font-semibold duration-150 items-center">
              Let's Go <FaArrowRight />
            </div>
          </Card>
        </div>
      </div>
      <div className="w-[45%] h-[500px] flex justify-center items-center">
        <div className="relative w-[500px] scale-110 h-[300px] ">
          <LaptopSVG />
          <div className="bg-[var(--background-color)] z-[8] absolute h-[134px] w-[180px] bottom-[8px] right-[48px] rounded">
            <div className="relative inset-0 h-full w-full overflow-hidden">
              {/* <video
                className="absolute inset-0 h-full w-full"
                style={{
                  objectFit: "cover",
                  height: "134px",
                  width: "180px",
                  borderRadius: "3px",
                }}
                muted
                loop
                autoPlay
                src={video4}
                type="video/mp4"
              /> */}
              <img
                src={Image1}
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="bg-black z-[7] absolute h-[156px] w-[242px] bottom-[46px] right-[106px] rounded">
            <img src={Image2} className="h-full w-full object-contain" alt="" />
          </div>
          <div className="bg-[var(--background-color)] z-[6] absolute h-[210px] w-[386px] bottom-[80px] right-[66px] rounded">
            <video
              style={{
                objectFit: "cover",
                height: "210px",
                width: "386px",
                borderRadius: "5px",
              }}
              muted
              loop
              autoPlay
              src={video1}
              type="video/mp4"
            />
          </div>
          <div className="bg-[var(--background-color)] z-[8] absolute h-[133px] w-[63px] bottom-[3px] left-[67px] rounded-lg">
            <video
              style={{
                objectFit: "cover",
                height: "133px",
                width: "63px",
                borderRadius: "9px",
              }}
              muted
              loop
              autoPlay
              src={video3}
              type="video/mp4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
