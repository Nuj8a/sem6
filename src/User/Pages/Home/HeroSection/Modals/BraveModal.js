import React, { useState } from "react";
import { TbLayersSubtract } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Folder from "../../assets/jsx/Folder";
import { FaSearch } from "react-icons/fa";
import Brave from "../../assets/jsx/Brave";
import wallpaperbrave from "../../assets/image/wallpaperbrave.jpg";

const BraveModal = ({ setChromeClk }) => {
  const [minimizeClick, setMinimizeClick] = useState(false);
  return (
    <div
      className={`overflow-hidden ${
        minimizeClick ? "w-[75%] h-[75%]" : "w-full h-full"
      }  bg-[var(--browser-color)] absolute duration-150 inset-0 z-10`}
    >
      <div className="relative h-full w-full">
        <div className="w-full h-[30px] z-[15] flex justify-between px-2 items-center bg-[var(--browser-color)] border-b border-[var(--border-light-color)] absolute">
          <div className="flex justify-center items-center  text-[.6rem] text-light-color tracking-wider">
            <div className="scale-80">
              <Brave />
            </div>
            <span className="text-[.7rem]">Brave</span>
          </div>
          <div className="h-full flex justify-end items-center gap-1 w-[100px]">
            <span
              onClick={() => setChromeClk((p) => !p)}
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
              onClick={() => setChromeClk((p) => !p)}
              className="p-1 hover:bg-[var(--border-light-color)] rounded-sm duration-100 cursor-pointer"
            >
              <RxCross2 className="text-sm" />
            </span>
          </div>
        </div>
        <img
          className="h-full w-full absolute object-cover inset-0 opacity-30 z-[0]"
          src={wallpaperbrave}
          alt=""
        />
        <div className="absolute z-10 flex justify-center items-center h-full w-full p-3 flex-col gap-1 flex-wrap">
          <div
            className={`absolute flex flex-col justify-start items-center gap-1 px-3 py-2 text-[.55rem] top-[30px] left-0 h-10 min-w-[150px] ${
              minimizeClick ? "scale-80 -ml-5" : "scale-100"
            }`}
          >
            <div className="flex justify-start items-center gap-3">
              <div>
                <p className="text-red-300">2</p>
                <p>Add Blocked</p>
              </div>
              <div>
                <p className="text-blue-300">0 MB</p>
                <p>Bandwidth Saved</p>
              </div>
              <div>
                <p>0 minuts</p>
                <p>Time Saved</p>
              </div>
            </div>

            <div className="flex flex-wrap max-w-[400px] -ml-4 mt-1">
              <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
                <Folder />
                <p className="text-[.45rem] text-light-color">CMS</p>
              </div>
              <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
                <Folder />
                <p className="text-[.45rem] text-light-color">SMS</p>
              </div>
              <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
                <Folder />
                <p className="text-[.45rem] text-light-color">E-Com..</p>
              </div>
              <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
                <Folder />
                <p className="text-[.45rem] text-light-color">Market</p>
              </div>
              <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
                <Folder />
                <p className="text-[.45rem] text-light-color">Portof..</p>
              </div>
            </div>
          </div>
          <div className="text-lg mt-3 "></div>
          <div
            className={`relative flex justify-center mb-1 items-center ${
              minimizeClick ? "mt-10 scale-80" : "mt-0 scale-100"
            }`}
          >
            <input
              type="text"
              name="search"
              id="search"
              className="text-xs rounded-full bg-transparent border border-[var(--white-half-color)] w-[200px] px-3 pr-6 py-1"
              placeholder="Search..."
            />
            <FaSearch className="absolute text-[var(--white-half-color)] cursor-pointer hover:text-[var(--text-full-dark)] right-2 text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraveModal;
