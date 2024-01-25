import React, { useState } from "react";
import { TbLayersSubtract } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import FolderSmall from "../../assets/jsx/FolderSmall";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Recycle from "../../assets/svg/theme.svg";
import { Slider } from "@mui/material";
import { Button } from "@nextui-org/react";

const ThemeModal = ({ setFileClick, setColorsData, colorsData }) => {
  const [minimizeClick, setMinimizeClick] = useState(false);
  function valuetext(value) {
    return `${value}°C`;
  }

  const primaryColorChange = (e) => {
    setColorsData({ ...colorsData, primaryColor: e });
  };
  const backgroundColorChange = (e) => {
    setColorsData({ ...colorsData, backgroundColor: e });
  };
  const darkFontColorChange = (e) => {
    setColorsData({ ...colorsData, darkFontColor: e });
  };
  const lightFontColorChange = (e) => {
    setColorsData({ ...colorsData, lightFontColor: e });
  };
  const DarkFontChange = (e) => {
    setColorsData({ ...colorsData, DarkFont: e });
  };
  const PcHardwareChange = (e) => {
    setColorsData({ ...colorsData, PcHardware: e });
  };
  const PcSoftwareChange = (e) => {
    setColorsData({ ...colorsData, PcSoftware: e });
  };
  const borderDarkChange = (e) => {
    setColorsData({ ...colorsData, borderDark: e });
  };

  const resetEveryColor = () => {
    setColorsData({
      primaryColor: 0,
      backgroundColor: 0,
      darkFontColor: 0,
      lightFontColor: 0,
      DarkFont: 0,
    });
  };

  return (
    <div
      className={`overflow-hidden ${
        minimizeClick ? "w-[75%] h-[75%]" : "w-full h-full"
      }  bg-[var(--browser-color)] absolute duration-150 inset-0 z-10`}
    >
      <div className="relative h-full w-full">
        <div className="w-full h-[30px] flex justify-between px-2 items-center bg-[var(--browser-color)] border-b border-[var(--border-light-color)] z-10 absolute">
          <div className="text-[.6rem] flex gap-1 items-center text-[var(--text-light-color)] tracking-wider">
            <img src={Recycle} height={12} width={12} alt="" />
            Theme
          </div>
          <div className="h-full flex justify-end items-center gap-1 w-[100px]">
            <span
              onClick={() => setFileClick((p) => !p)}
              className="p-1 hover:bg-[var(--border-light-color)] rounded-sm duration-100 cursor-pointer"
            >
              <LuMinus className="text-xs" />
            </span>
            <span
              onClick={() => setMinimizeClick((p) => !p)}
              className="p-1 text-xs hover:bg-[var(--border-light-color)] rounded-sm duration-100 cursor-pointer"
            >
              <TbLayersSubtract className="rotate-180" />
            </span>
            <span
              onClick={() => setFileClick((p) => !p)}
              className="p-1 hover:bg-[var(--border-light-color)] rounded-sm duration-100 cursor-pointer"
            >
              <RxCross2 className="text-sm" />
            </span>
          </div>
        </div>
        <div className="h-full px-2 py-2 w-[100px] bg-transparent border-r border-[var(--border-light-color)] absolute top-[30px]">
          <ul className="flex justify-start items-start gap-1 flex-col">
            <Link
              to={"/"}
              className="text-[.6rem] text-[var] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark]"
            >
              <FolderSmall /> Home
            </Link>

            <Link
              to={"/"}
              className="text-[.6rem] text-[var] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark]"
            >
              <FolderSmall />
              About Us
            </Link>

            <Link
              to={"/"}
              className="text-[.6rem] text-[var] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark]"
            >
              <FolderSmall />
              Services
            </Link>

            <div className="pl-2 flex justify-center flex-col gap-[1px]">
              <Link
                to={"/"}
                className="text-[.5rem] text-[var] flex items-center hover:text-[var(--text-full-dark]"
              >
                <MdOutlineKeyboardArrowRight /> CMS
              </Link>

              <Link
                to={"/"}
                className="text-[.5rem] text-[var] flex items-center hover:text-[var(--text-full-dark]"
              >
                <MdOutlineKeyboardArrowRight />
                E-Commerce
              </Link>
              <Link
                to={"/"}
                className="text-[.5rem] text-[var] flex items-center hover:text-[var(--text-full-dark]"
              >
                <MdOutlineKeyboardArrowRight /> SMS
              </Link>
            </div>

            <Link
              to={"/"}
              className="text-[.6rem] text-[var] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark]"
            >
              <FolderSmall />
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="absolute max-h-[300px] overflow-y-auto top-[30px] left-[100px] h-full w-full p-3 flex gap-1 flex-wrap">
          <div className="w-[80%] mt-2 flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Logo Color
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.primaryColor}
                    onChange={(e) => primaryColorChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Background Color
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.backgroundColor}
                    onChange={(e) => backgroundColorChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full gap-4">
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Dark Font Color
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.darkFontColor}
                    onChange={(e) => darkFontColorChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Light Font Color
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.lightFontColor}
                    onChange={(e) => lightFontColorChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Font Color
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.DarkFont}
                    onChange={(e) => DarkFontChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Computer Hardware
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.PcHardware}
                    onChange={(e) => PcHardwareChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                  {/* <Slider
                  size="small"
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  /> */}
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center w-full">
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Computer Software
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.PcSoftware}
                    onChange={(e) => PcSoftwareChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className="font-poppins text-[.55rem] font-semibold">
                  Border Color
                </p>
                <div className="pl-3">
                  <Slider
                    size="small"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    value={colorsData.borderDark}
                    onChange={(e) => borderDarkChange(e.target.value)}
                    min={10}
                    max={110}
                  />
                </div>
              </div>
            </div>
            <Button
              className="inline-block !rounded-full scale-80 -ml-2 shadow border border-black/20 w-[100px] !bg-[var(--primary-color)] text-[var(--background-color)] font-poppins font-semibold"
              color="default"
              size="sm"
              onClick={resetEveryColor}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
