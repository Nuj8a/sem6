import React, { useState } from "react";
import { TbLayersSubtract } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Folder from "../../assets/jsx/Folder";
import Chrome from "../../assets/jsx/Chrome";
import { FaSearch } from "react-icons/fa";

const ChromeModal = ({ setChromeClk }) => {
  const [minimizeClick, setMinimizeClick] = useState(false);
  return (
    <div
      className={`overflow-hidden ${
        minimizeClick ? "w-[75%] h-[75%]" : "w-full h-full"
      }  bg-[var(--browser-color)] absolute duration-150 inset-0 z-10`}
    >
      <div className="relative h-full w-full">
        <div className="w-full h-[30px] flex justify-between px-2 items-center bg-[var(--browser-color)] border-b border-[var(--border-light-color)] z-10 absolute">
          <div className="flex justify-center items-center  text-[.6rem] text-[var(--text-light-color)] tracking-wider">
            <div className="scale-80">
              <Chrome />
            </div>
            <span>Chrome</span>
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
        <div className="absolute flex justify-center items-center h-full w-full p-3 flex-col gap-1 flex-wrap">
          <h3 className="text-lg -mt-3 mb-1">Google</h3>
          <div className="relative flex justify-center mb-1 items-center">
            <input
              type="text"
              name="search"
              id="search"
              className="text-xs rounded-full bg-transparent border border-[var(--border-dark-color)] w-[200px] px-3 pr-6 py-1"
              placeholder="Search..."
            />
            <FaSearch className="absolute text-[var(--white-half-color)] cursor-pointer hover:text-[var(--text-full-dark)] right-2 text-xs" />
          </div>
          <div className="flex flex-wrap max-w-[400px] ">
            <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
              <Folder />
              <p className="text-[.45rem] text-[var(--text-light-color)]">
                CMS
              </p>
            </div>
            <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
              <Folder />
              <p className="text-[.45rem] text-[var(--text-light-color)]">
                SMS
              </p>
            </div>
            <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
              <Folder />
              <p className="text-[.45rem] text-[var(--text-light-color)]">
                E-Com..
              </p>
            </div>
            <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
              <Folder />
              <p className="text-[.45rem] text-[var(--text-light-color)]">
                Market
              </p>
            </div>
            <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
              <Folder />
              <p className="text-[.45rem] text-[var(--text-light-color)]">
                Portof..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChromeModal;
