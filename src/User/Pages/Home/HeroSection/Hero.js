import React, { useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiYoutubeLine, RiLinkedinBoxLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { LiaFacebookSquare } from "react-icons/lia";
import Computer from "./Computer";
import { Typewriter } from "react-simple-typewriter";
import StandImg from "./StandImg";

const Hero = ({ setColorChange, colorChange }) => {
  const handleType = () => {};
  const handleDone = () => {};
  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  const [initialClick, setInitialClick] = useState(false);
  const [computerRotation, setComputerRotation] = useState(true);

  const [colorsData, setColorsData] = useState({
    primaryColor: 0,
    backgroundColor: 0,
    darkFontColor: 0,
    lightFontColor: 0,
    DarkFont: 0,
    PcHardware: 0,
    PcSoftware: 0,
    borderDark: 0,
  });

  const numberToHexColor = (n) => {
    if (n > 100) {
      return "#E6E6FA";
    } else if (n > 90) {
      return "#008080";
    } else if (n > 80) {
      return "#800000";
    } else if (n > 70) {
      return "#ee82ee";
    } else if (n > 60) {
      return "#4b0082";
    } else if (n > 50) {
      return "#00ffff";
    } else if (n > 40) {
      return "#ffff00";
    } else if (n > 30) {
      return "#ffa500";
    } else if (n > 20) {
      return "#0000ff";
    } else if (n > 10) {
      return "#008000";
    } else if (n > 2) {
      return false;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setColorChange((prevColors) => ({
      ...prevColors,
      primaryColor: numberToHexColor(colorsData.primaryColor) || "#ea580c",
      backgroudColor: numberToHexColor(colorsData.backgroundColor) || "#0f1019",
      textDarkColor: numberToHexColor(colorsData.darkFontColor) || "#ffffffe6",
      textLightColor:
        numberToHexColor(colorsData.lightFontColor) || "#ffffffb3",
      textFullDark: numberToHexColor(colorsData.DarkFont) || "#ffffff",
      pcBodyColor: numberToHexColor(colorsData.PcHardware) || "#0c0c0c",
      browserColor: numberToHexColor(colorsData.PcSoftware) || "#111",
      borderDarkColor: numberToHexColor(colorsData.borderDark) || "#ffffff40",
    }));
  }, [colorsData, setColorChange]);
  return (
    <div className="h-screen -mt-[55px] max-h-[750px] pb-14 flex justify-center items-center relative overflow-hidden gradient-container  w-full bg-color-primary linear-g">
      <div className="w-[35px] h-[65%] z-[10] absolute top-10 mt-14 flex flex-col gap-8 justify-center items-center right-0">
        <div className="h-1/3 w-[.01rem] bg-[var(--border-light-color)]"></div>
        <Link to={"/"}>
          <LiaFacebookSquare className="text-primary-color hover:text-[var(--text-full-dark)] text-xl scale-110" />
        </Link>
        <Link to={"/"}>
          <IoLogoInstagram className="text-primary-color hover:text-[var(--text-full-dark)] text-lg" />
        </Link>
        <Link to={"/"}>
          <RiYoutubeLine className="text-primary-color hover:text-[var(--text-full-dark)] text-xl" />
        </Link>
        <Link to={"/"}>
          <RiLinkedinBoxLine className="text-primary-color hover:text-[var(--text-full-dark)] text-xl" />
        </Link>
        <div className="h-1/3 w-[.01rem] bg-[var(--border-light-color)]"></div>
      </div>
      {colorChange.backgroudColor === "#0f1019" && (
        <>
          <div className="radielBox absolute z-[1] bottom-0 left-0"></div>
          <div className="radielBox absolute z-[1] bottom-[200px] right-0"></div>
        </>
      )}

      <div className="flex h-full flex-row justify-between absolute w-full  z-[2]">
        <div className="h-full w-1/4 z-[2] border-r border-black/5"></div>
        <div className="h-full w-1/4 z-[2] border-r border-black/5"></div>
        <div className="h-full w-1/4 z-[2] border-r border-black/5"></div>
        <div className="h-full w-1/4 z-[2]"></div>
      </div>
      <div className="z-[3] absolute left-[100px] w-[37%]">
        <div className="w-full">
          <h3 className="font-Orbitron  text-dark-color text-xl font-semibold tracking-wide">
            Power Your Online Presence with,
          </h3>
          <div className="font-Orbitron text-primary-color tracking-wider uppercase text-[3rem] font-semibold">
            <Typewriter
              words={["Quick-Build", "Mobile-Ease", "Easy-CMS", "SEO-Boost"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </div>
          <p className="font-gruppo text-xl text-light-color">
            Discover WebUpaye for budget-friendly, responsive websites. Elevate
            your online presence with our services, offering quality design at a
            low cost.
          </p>
          <Card
            variant="ghost"
            color="primary"
            className="uppercase font-gruppo inline-block rounded-none px-7 py-[0.6rem] mt-5 border  border-dark-color bg-transparent text-dark-color hover:border-[var(--border-dark-color)] hover:bg-[var(--border-light-color)] text-sm tracking-wider hover:tracking-widest"
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
      <div className="absolute right-12 float-end flex justify-center items-end -mt-10 h-full">
        <div
          id="perspectiveA"
          className="w-[600px] m-auto z-10 h-[400px] perspectiveA"
        >
          <div
            className={`w-[580px] overflow-hidden h-[379px] bg-[var(--pc-body-color)] flex justify-center items-center p-2 z-[5] absolute rounded   border border-light-color ${
              computerRotation && "rotatey"
            }`}
          >
            <Computer
              setComputerRotation={setComputerRotation}
              setColorChange={setColorChange}
              colorChange={colorChange}
              setColorsData={setColorsData}
              colorsData={colorsData}
              initialClick={initialClick}
              setInitialClick={setInitialClick}
            />
          </div>
          <div className="mt-10 z-[1] -left-8 absolute -bottom-[150px]">
            <StandImg />
          </div>
        </div>
      </div>

      <div className="z-[3] gap-2  absolute bottom-2 right-0 flex justify-end w-full">
        <div>
          <Card
            radius="none"
            className="justify-between bg-custom-color border-light-color border before:bg-[var(--border-light-color)] overflow-hidden py-2  bottom-5 w-[300px] flex gap-1 pt-4 px-5 flex-col pb-4 shadow-small ml-1 z-10 rounded-sm before:rounded"
          >
            <h2 className="text-[var(--text-full-dark)] font-Orbitron uppercase text-sm tracking-wider">
              Affordable Websites
            </h2>
            <p className="text-[.7rem] font-poppins text-dark-color line-clamp-2">
              WebUpaye: Affordable, responsive websites for a powerful online
              presence.
            </p>
          </Card>
        </div>
        <div>
          <Card
            radius="none"
            className="justify-between bg-custom-color border-[var(--border-light-color)] border before:bg-[var(--border-light-color)] overflow-hidden py-2  bottom-5 w-[300px] flex gap-1 pt-4 px-5 flex-col pb-4 shadow-small ml-1 z-10 rounded-sm before:rounded"
          >
            <h2 className="text-[var(--text-full-dark)] font-Orbitron uppercase text-sm tracking-wider">
              Latest Technology
            </h2>
            <p className="text-[.7rem] font-poppins text-dark-color  line-clamp-2">
              WebUpaye: Pioneer in technology, delivering innovation in every
              project.
            </p>
          </Card>
        </div>
        <Card
          variant="ghost"
          color="primary"
          className="uppercase absolute z-[5] w-[35px] h-[35px] -top-8 left-[100px] font-gruppo rounded-none flex border-dark-color justify-center items-center mt-5 border bg-transparent text-full-dark hover:border-[var(--border-light-color)] hover:bg-[var(--border-light-color)] text-sm tracking-wider hover:tracking-widest"
          radius="none"
          shadow="none"
          isPressable
          onClick={scrollDown}
        >
          <div className="flex text-primary-color justify-center gap-1 border-dark-color font-semibold duration-150 items-center">
            <IoIosArrowDown />
          </div>
        </Card>
      </div>
      {!computerRotation && (
        <div
          onClick={() => setComputerRotation(true)}
          className="absolute inset-0 h-full w-full z-[6]"
        ></div>
      )}
    </div>
  );
};

export default Hero;
