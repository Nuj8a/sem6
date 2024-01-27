import React, { useState } from "react";
import { TbLayersSubtract } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import FolderSmall from "../../assets/jsx/FolderSmall";
import Folder from "../../assets/jsx/Folder";
import Home from "../../assets/jsx/Home";

const FolderModal = ({ fileClick, setFileClick }) => {
  const [minimizeClick, setMinimizeClick] = useState(false);
  return (
    <div
      className={`overflow-hidden ${
        minimizeClick ? "w-[75%] h-[75%]" : "w-full h-full"
      }  bg-[var(--browser-color)] absolute duration-150 inset-0 z-10`}
    >
      <div className="relative h-full w-full">
        <div className="w-full h-[30px] flex justify-between px-2 items-center bg-[var(--browser-color)] border-b border-[var(--border-light-color)] z-10 absolute">
          <div className="text-[.6rem] flex items-center text-[var(--text-light-color)] tracking-wider">
            <div className="scale-75 -mt-[1px]">
              <Home />
            </div>
            Home
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
              className="text-[.6rem] text-[--white-half-color] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark)]"
            >
              <FolderSmall /> Home
            </Link>

            <Link
              to={"/"}
              className="text-[.6rem] text-[--white-half-color] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark)]"
            >
              <FolderSmall />
              About Us
            </Link>

            <Link
              to={"/"}
              className="text-[.6rem] text-[--white-half-color] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark)]"
            >
              <FolderSmall />
              Services
            </Link>

            <div className="pl-2 flex justify-center flex-col gap-[1px]">
              <Link
                to={"/"}
                className="text-[.5rem] text-[--white-half-color] flex items-center hover:text-[var(--text-full-dark)]"
              >
                <MdOutlineKeyboardArrowRight /> CMS
              </Link>

              <Link
                to={"/"}
                className="text-[.5rem] text-[--white-half-color] flex items-center hover:text-[var(--text-full-dark)]"
              >
                <MdOutlineKeyboardArrowRight />
                E-Commerce
              </Link>
              <Link
                to={"/"}
                className="text-[.5rem] text-[--white-half-color] flex items-center hover:text-[var(--text-full-dark)]"
              >
                <MdOutlineKeyboardArrowRight /> SMS
              </Link>
            </div>

            <Link
              to={"/"}
              className="text-[.6rem] text-[--white-half-color] flex justify-center items-center gap-[1px] hover:text-[var(--text-full-dark)]"
            >
              <FolderSmall />
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="absolute top-[30px] left-[100px] h-full w-full p-3 flex gap-1 flex-wrap">
          <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
            <Folder />
            <p className="text-[.45rem] text-[var(--text-light-color)]">CMS</p>
          </div>
          <div className="flex hover:bg-[var(--border-dark-color)] h-[35px] w-[35px] duration-150 cursor-pointer rounded justify-center items-center flex-col">
            <Folder />
            <p className="text-[.45rem] text-[var(--text-light-color)]">SMS</p>
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
  );
};

export default FolderModal;
