import React, { useState, useEffect } from "react";
import Home from "../assets/jsx/Home";
import { FaBatteryThreeQuarters } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import Chrome from "../assets/jsx/Chrome";
import Folder from "../assets/jsx/Folder";
import VSCode from "../assets/jsx/VSCode";
import { IoIosArrowUp } from "react-icons/io";
import Iconthispc from "../assets/image/thispc.png";
import Recycle from "../assets/image/recyclebin.png";
import ThemeIcon from "../assets/svg/theme.svg";
import Brave from "../assets/jsx/Brave";
import SwiperContainer from "./SwiperContainer";
import { Progress } from "@nextui-org/react";
import SearchIcon from "../assets/jsx/SearchIcon";
import Lens from "../assets/image/lens.png";
import HomeModal from "./Modals/HomeModal";
import FolderModal from "./Modals/FolderModal";
import ChromeModal from "./Modals/ChromeModal";
import IconCart from "../assets/image/cartIcon.png";
import windowimg from "../assets/image/windowimg.png";
import BraveModal from "./Modals/BraveModal";
import VSCodeModal from "./Modals/VSCodeModal";
import RecycleModal from "./Modals/RecycleModal";
import ThemeModal from "./Modals/ThemeModal";
import ProductsModal from "./Modals/ProductsModal";

const Computer = ({
  setComputerRotation,
  setColorChange,
  colorChange,
  colorsData,
  setColorsData,
  initialClick,
  setInitialClick,
}) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [searchIsVisiable, setSearchIsVisiable] = useState(false);
  const [fileClick, setFileClick] = useState(false);
  const [recycleClk, setRecycleClk] = useState(false);
  const [themeClk, setThemeClk] = useState(false);
  const [homeBtnClk, setHomeBtnClk] = useState(false);
  const [chromeClk, setChromeClk] = useState(false);
  const [braveClk, setBraveClk] = useState(false);
  const [vsCodeClk, setVsCodeClk] = useState(false);

  const HomeBtnClk = () => {
    // closeEveryThing();
    setHomeBtnClk((p) => !p);
  };
  const FileBtnClick = () => {
    closeEveryThing();
    setFileClick((p) => !p);
  };
  const recycleBtnClk = () => {
    closeEveryThing();
    setRecycleClk((p) => !p);
  };
  const themeBtnClk = () => {
    closeEveryThing();
    setThemeClk((p) => !p);
  };
  const ChromeBtnClk = () => {
    closeEveryThing();
    setChromeClk((p) => !p);
  };
  const BraveBtnClk = () => {
    closeEveryThing();
    setBraveClk((p) => !p);
  };
  const VscodeBtnClk = () => {
    closeEveryThing();
    setVsCodeClk((p) => !p);
  };
  const productBtnClk = () => {
    closeEveryThing();
    setInitialClick((p) => !p);
  };
  const closeEveryThing = () => {
    setHomeBtnClk(false);
    setFileClick(false);
    setChromeClk(false);
    setBraveClk(false);
    setVsCodeClk(false);
    setInitialClick(false);
    setRecycleClk(false);
    setComputerRotation(false);
    setThemeClk(false);
  };
  useEffect(() => {
    // Update time and date every second
    const intervalId = setInterval(() => {
      const now = new Date();

      // Format time as 12-hour clock with AM/PM
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      // Format date as YYYY/MM/DD
      const formattedDate = `${now.getFullYear()}/${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")}`;

      setCurrentTime(formattedTime);
      setCurrentDate(formattedDate);
    }, 1000);

    // Clean up interval when component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const [windowBoot, setWindowBoot] = useState(0);
  const [windowChange, setWindowChange] = useState(false);

  useEffect(() => {
    setWindowBoot(20);
    setTimeout(() => {
      setWindowBoot(75);
    }, 1500);
    setTimeout(() => {
      setWindowBoot(99);
    }, 2500);
    setTimeout(() => {
      setWindowBoot(100);
    }, 3500);
  }, [windowChange]);

  const [showModal, setShowModal] = useState(false);
  setTimeout(() => {
    setShowModal(true);
  }, 6000);

  return (
    <>
      {windowBoot >= 100 ? (
        <>
          <div className=" h-full w-full shadow m-auto rounded flex justify-center items-center relative overflow-hidden">
            <div className="h-[10px] -top-[2px] w-[80px] bg-[var(--pc-body-color)] z-30 rounded-b -mt-[1px] absolute flex items-center gap-1 justify-center">
              <div className="h-[1px] w-[1px] bg-[var(--text-full-dark)] rounded-full"></div>
              <div className="h-[4px] w-[4px] rounded-full flex justify-center items-center">
                <img
                  src={Lens}
                  alt="lens"
                  height={5}
                  width={5}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="z-[5] absolute flex items-center gap-2 justify-start flex-col top-0 right-0 h-full py-2 w-[40px]">
              <div
                onClick={FileBtnClick}
                className="relative flex hover:bg-[var(--border-dark-color)] cursor-pointer h-[35px] pb-2 w-[35px] rounded-sm justify-center items-center"
              >
                <img className="w-[19px]" src={Iconthispc} alt="thisPC" />
                <span className="text-[0.42rem] absolute text-dark-color select-none bottom-0 w-[24px] text-center font-semibold">
                  This PC
                </span>
              </div>
              <div
                onClick={recycleBtnClk}
                className="relative flex hover:bg-[var(--border-dark-color)] cursor-pointer h-[35px] pb-2 w-[35px] rounded-sm justify-center items-center"
              >
                <img className="w-[19px]" src={Recycle} alt="recyclebin" />
                <span className="text-[0.42rem] absolute text-dark-color select-none bottom-0 w-[35px] text-center font-semibold">
                  Recycle Bin
                </span>
              </div>
              <div
                onClick={themeBtnClk}
                className="relative flex hover:bg-[var(--border-dark-color)] cursor-pointer h-[35px] pb-2 w-[35px] rounded-sm justify-center items-center"
              >
                <img className="w-[19px]" src={ThemeIcon} alt="recyclebin" />
                <span className="text-[0.42rem] absolute text-dark-color select-none bottom-0 w-[35px] text-center font-semibold">
                  Theme
                </span>
              </div>

              <div
                onClick={VscodeBtnClk}
                className="relative flex h-[35px] w-[35px] hover:bg-[var(--border-dark-color)] cursor-pointer pb-2 rounded-sm justify-center items-center"
              >
                <VSCode />
                <span className="text-[0.42rem] absolute text-dark-color bottom-0 w-[26px] text-center font-semibold">
                  VS Code
                </span>
              </div>
              <div
                onClick={BraveBtnClk}
                className="relative flex h-[35px] w-[35px] hover:bg-[var(--border-dark-color)] cursor-pointer pb-2 rounded-sm justify-center items-center"
              >
                <Brave />
                <span className="text-[0.42rem] absolute text-dark-color bottom-0 w-[20px] text-center font-semibold">
                  Brave
                </span>
              </div>
              <div
                onClick={ChromeBtnClk}
                className="relative flex h-[35px] w-[35px] hover:bg-[var(--border-dark-color)] cursor-pointer pb-2 rounded-sm justify-center items-center"
              >
                <Chrome />
                <span className="text-[0.42rem] absolute text-dark-color bottom-0 w-[26px] text-center font-semibold">
                  Chrome
                </span>
              </div>
              <div
                onClick={productBtnClk}
                className="relative flex hover:bg-[var(--border-dark-color)] cursor-pointer h-[35px] pb-2 w-[35px] rounded-sm justify-center items-center"
              >
                <img className="w-[19px]" src={IconCart} alt="cart" />
                <span className="text-[0.42rem] absolute text-dark-color select-none bottom-0 w-[24px] text-center font-semibold">
                  Products
                </span>
              </div>
            </div>
            <div className="bg-black h-full w-full ">
              <SwiperContainer />
            </div>
            {(homeBtnClk ||
              fileClick ||
              chromeClk ||
              braveClk ||
              themeClk ||
              vsCodeClk ||
              initialClick) && (
              <div
                className="h-full w-full bg-transparent absolute inset-0 z-10"
                onClick={closeEveryThing}
              ></div>
            )}

            {fileClick && (
              <div className={`${fileClick ? "block" : "hidden"}`}>
                <FolderModal setFileClick={setFileClick} />
              </div>
            )}
            {recycleClk && (
              <div className={`${recycleClk ? "block" : "hidden"}`}>
                <RecycleModal setFileClick={setRecycleClk} />
              </div>
            )}

            {initialClick && (
              <div className={`${initialClick ? "block" : "hidden"}`}>
                <ProductsModal setFileClick={setInitialClick} />
              </div>
            )}

            {themeClk && (
              <div className={`${themeClk ? "block" : "hidden"}`}>
                <ThemeModal
                  setFileClick={setThemeClk}
                  setColorChange={setColorChange}
                  colorChange={colorChange}
                  setColorsData={setColorsData}
                  colorsData={colorsData}
                />
              </div>
            )}
            {chromeClk && (
              <div className={`${chromeClk ? "block" : "hidden"}`}>
                <ChromeModal setChromeClk={setChromeClk} />
              </div>
            )}

            {braveClk && (
              <div className={`${braveClk ? "block" : "hidden"}`}>
                <BraveModal setChromeClk={setBraveClk} />
              </div>
            )}
            {vsCodeClk && (
              <div className={`${vsCodeClk ? "block" : "hidden"}`}>
                <VSCodeModal setChromeClk={setVsCodeClk} />
              </div>
            )}
            {homeBtnClk && (
              <HomeModal
                homeBtnClk={homeBtnClk}
                setWindowBoot={setWindowBoot}
                setWindowChange={setWindowChange}
                closeEveryThing={closeEveryThing}
                setComputerRotation={setComputerRotation}
                FileBtnClick={FileBtnClick}
                themeBtnClk={themeBtnClk}
                ChromeBtnClk={ChromeBtnClk}
                BraveBtnClk={BraveBtnClk}
                VscodeBtnClk={VscodeBtnClk}
                setColorsData={setColorsData}
              />
            )}

            <div className="absolute z-10 bottom-0 h-7 border-t border-light-color w-full bg-custom-color">
              <div className="flex px-2 justify-between items-center">
                <div className="flex gap-1">
                  <div
                    className="cursor-pointer hover:scale-105"
                    onClick={HomeBtnClk}
                  >
                    <Home />
                  </div>
                  <div
                    className={`cursor-pointer flex justify-center items-center  rounded-full h-full w-full ${
                      searchIsVisiable
                        ? "bg-[border-dark-color] border border-dark-color pr-1"
                        : "bg-transparent border-none pr-0"
                    }`}
                  >
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search..."
                      className={` !duration-300 bg-transparent outline-none text-xs py-[2px] ${
                        searchIsVisiable
                          ? "w-[150px] px-2  pl-3"
                          : " w-0 select-none"
                      }`}
                    />
                    <div
                      className="scale-90 mb-[1px]"
                      onClick={() => setSearchIsVisiable(true)}
                    >
                      <SearchIcon />
                    </div>
                  </div>
                  <div
                    className="cursor-pointer hover:scale-105"
                    onClick={FileBtnClick}
                  >
                    <Folder />
                  </div>
                  <div
                    onClick={ChromeBtnClk}
                    className="cursor-pointer hover:scale-105"
                  >
                    <Chrome />
                  </div>
                  <div
                    onClick={VscodeBtnClk}
                    className="cursor-pointer hover:scale-105"
                  >
                    <VSCode />
                  </div>
                </div>
                <div className="h-7 flex gap-1 items-center">
                  <div className="mr-1">
                    <div className="flex gap-[.35rem] ">
                      <IoIosArrowUp className="text-[.6rem] mt-[1px] -mr-[2px]" />
                      <FaWifi className="text-[.6rem] mt-[1px]" />
                      <FaBatteryThreeQuarters className="text-[.7rem]" />
                    </div>
                  </div>
                  <div className="text-[.4rem] flex flex-col h-full justify-center text-dark-color tracking-wider">
                    <span>{currentTime}</span>
                    <span>{currentDate}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`h-[50px] duration-150 rounded-br pb-9 bg-black/60 w-[150px] top-0 ${
                !showModal ? "-left-[150px]" : "left-[0px]"
              } absolute z-[2] p-1`}
            >
              <div className="relative h-full w-full ">
                <h2 className="text-sm tracking-wider font-semibold text-center font-Orbitron text-dark-color">
                  Discover Your Ideal{" "}
                  <span className="text-primary-color">Website</span>
                </h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-full flex-col gap-2 flex justify-center items-center w-full bg-[#111]">
            <div className="h-[10px] -top-[2px] w-[80px]  bg-[var(--pc-body-color)] z-30 rounded-b -mt-[1px] absolute flex items-center gap-1 justify-center">
              <div className="h-[1px] w-[1px] bg-[var(--text-full-dark)] rounded-full"></div>
              <div className="h-[4px] w-[4px] rounded-full flex justify-center items-center">
                <img
                  src={Lens}
                  alt="lens"
                  height={5}
                  width={5}
                  className="object-contain"
                />
              </div>
            </div>
            <Progress size="sm" hidden className="hidden" />
            <img
              src={windowimg}
              alt=""
              height={40}
              width={40}
              className="mb-3"
            />
            <Progress
              size="sm"
              aria-label="Loading..."
              value={windowBoot}
              className="max-w-[150px]"
            />
            <p className="font-Orbitron text-xs tracking-wider ">Booting...</p>
          </div>
        </>
      )}
    </>
  );
};

export default Computer;
