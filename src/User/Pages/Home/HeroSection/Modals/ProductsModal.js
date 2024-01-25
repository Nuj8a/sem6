import React, { useState } from "react";
import { TbLayersSubtract } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import FolderSmall from "../../assets/jsx/FolderSmall";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CartIcon from "../../assets/image/cartIcon.png";
import Cards from "../../../../Common/Cards/CardsProduct";
import BreadCrumb from "../../../../Common/Navigation/BreadCrumb";

const ProductsModal = ({ setFileClick }) => {
  const [minimizeClick, setMinimizeClick] = useState(false);
  return (
    <div
      className={`overflow-hidden ${
        minimizeClick ? "w-[75%] h-[75%]" : "w-full h-full"
      }  bg-[var(--browser-color)] absolute duration-150 inset-0 z-10`}
    >
      <div className="relative h-full w-full">
        <div className="w-full h-[30px] flex justify-between px-2 items-center bg-[var(--browser-color)] border-b border-[var(--border-light-color)] z-10 absolute">
          <div className="text-[.6rem] flex gap-1 items-center text-[var(--text-light-color)] tracking-wider">
            <img src={CartIcon} height={12} width={14} alt="" />
            Products
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
        <div className="absolute top-[30px] left-[100px] right-[100px] h-full w-full px-3">
          <div className="flex flex-col w-[91%] h-full">
            <BreadCrumb />
            <div className="grid-container overflow-auto pb-[70px] w-full h-full">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsModal;
