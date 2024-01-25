import React from "react";
import { IoPower } from "react-icons/io5";
import Theme from "../../assets/svg/theme.svg";
import { FaSearch } from "react-icons/fa";
import Iconthispc from "../../assets/image/thispc.png";
import Chrome from "../../assets/jsx/Chrome";
import VSCode from "../../assets/jsx/VSCode";
import Brave from "../../assets/jsx/Brave";
import Folder from "../../assets/jsx/Folder";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeModal = ({
  homeBtnClk,
  setWindowBoot,
  setWindowChange,
  closeEveryThing,
  setComputerRotation,
  FileBtnClick,
  themeBtnClk,
  ChromeBtnClk,
  BraveBtnClk,
  VscodeBtnClk,
  setColorsData,
}) => {
  const resetEveryColor = () => {
    setColorsData({
      primaryColor: 0,
      backgroundColor: 0,
      darkFontColor: 0,
      lightFontColor: 0,
      DarkFont: 0,
    });
  };
  const powerBtnClk = () => {
    resetEveryColor();
    setWindowBoot(0);
    setTimeout(() => {
      setWindowChange((p) => !p);
    }, 2000);
    closeEveryThing();
    setComputerRotation(true);
  };
  return (
    <div
      className={`h-[200px] duration-150 overflow-hidden w-[220px] p-2 bg-[var(--black-half-color)] rounded-sm absolute ${
        homeBtnClk ? "bottom-9" : " -bottom-[220px]"
      }  z-20`}
    >
      {/* for search  */}
      <div className="relative flex justify-center items-center">
        <FaSearch className="absolute left-[.35rem] text-xs" />
        <input
          type="text"
          name="search"
          id="search"
          className="w-full px-2 pl-6 bg-[var(--border-dark-color)] outline-none rounded-sm py-1 text-[.6rem]"
          placeholder="Search your site..."
        />
      </div>
      {/* for apps  */}
      <div className="mt-2">
        <h4 className="text-[.55rem] text-[text-dark-color] mb-[1px] tracking-wide capitalize">
          Apps
        </h4>
        <div className="flex gap-2">
          <div
            onClick={FileBtnClick}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] py-[2px] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <img className="w-[19px] scale-95" src={Iconthispc} alt="thisPC" />
            <p className="text-[.4rem] text-[var(--text-light-color)]">
              ThisPC
            </p>
          </div>
          <div
            onClick={themeBtnClk}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] py-[2px] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <img className="w-[19px] scale-95" src={Theme} alt="thisPC" />
            <p className="text-[.4rem] text-[var(--text-light-color)]">Theme</p>
          </div>
          <div
            onClick={ChromeBtnClk}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <Chrome />
            <p className="text-[.4rem] text-[var(--text-light-color)]">
              Chrome
            </p>
          </div>
          <div
            onClick={VscodeBtnClk}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <VSCode />
            <p className="text-[.4rem] text-[var(--text-light-color)]">
              VSCode
            </p>
          </div>
          <div
            onClick={BraveBtnClk}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <Brave />
            <p className="text-[.4rem] text-[var(--text-light-color)]">Brave</p>
          </div>
        </div>
      </div>
      {/* for recomended  */}
      <div className="mt-2">
        <h4 className="text-[.55rem] text-[text-dark-color] mb-[1px] tracking-wide capitalize">
          Recommended
        </h4>
        <div className="flex gap-2">
          <Link
            to={"/"}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <Folder />
            <p className="text-[.4rem] text-[var(--text-light-color)]">
              E-com..
            </p>
          </Link>
          <Link
            to={"/"}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <Folder />
            <p className="text-[.4rem] text-[var(--text-light-color)]">SMS</p>
          </Link>
          <Link
            to={"/"}
            className="h-[35px] w-[35px] flex hover:bg-[var(--border-dark-color)] duration-150 px-1 cursor-pointer rounded justify-center items-center flex-col"
          >
            <Folder />
            <p className="text-[.4rem] text-[var(--text-light-color)]">CMS</p>
          </Link>
        </div>
      </div>
      {/* for profile  */}
      <div className="absolute bottom-0 bg-[var(--border-light-color)] flex justify-between px-2 items-center w-full h-[17px] left-0">
        <div className="w-1/3 flex justify-start gap-1 items-center">
          <div className="h-[10px] flex justify-center items-center w-[10px] bg-[var(--border-light-color)] border border-[border-light-color] rounded-full">
            <FaUser className="text-[7px]" />
          </div>
          <span className="text-[.5rem] select-none">User</span>
        </div>
        <div className="h-[10px] w-[10px] flex justify-center items-center rounded-full">
          <IoPower
            onDoubleClick={powerBtnClk}
            className="text-xs cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
