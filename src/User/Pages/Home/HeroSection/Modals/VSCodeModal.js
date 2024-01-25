import React, { useState } from "react";
import { TbLayersSubtract } from "react-icons/tb";
import { LuMinus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import VSCode from "../../assets/jsx/VSCode";
import { IoPlayOutline } from "react-icons/io5";

const VSCodeModal = ({ setChromeClk }) => {
  const [minimizeClick, setMinimizeClick] = useState(false);
  const [code, setCode] = useState("Console.log('Gaurab')");
  const [run, setRun] = useState(false);
  const inpvalchange = (e) => {
    setCode(e.target.value);
    setRun(false);
  };
  function extractName(inputString) {
    var regex = /Console\.log\(['"]([^'"]+)['"]\)/;
    var match = inputString.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }
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
              <VSCode />
            </div>
            <span className="mt-[2px]">VS-Code</span>
          </div>
          <div className="h-full flex justify-end items-center gap-1 w-[100px]">
            {code.length > 2 && (
              <IoPlayOutline
                onClick={() => setRun(true)}
                className="absolute right-[5.5rem] cursor-pointer text-[var(--text-light-color)] hover:text-[var(--text-full-dark)] scale-90"
              />
            )}

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
        <div className="absolute flex justify-start items-start h-full w-[100px] bg-transparent top-[30px] left-0 border-r border-[var(--border-light-color)] flex-col p-1 gap-1 flex-wrap">
          <div className="text-[.6rem]">
            <h3 className="uppercase text-[var(--text-full-dark)]/90">
              Projects
            </h3>
            <div className="pl-2 my-[2px]">
              <p className="text-[var(--text-light-color)] cursor-pointer">
                index.js
              </p>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center top-[30px] left-[100px] items-center h-full w-full flex-col gap-1 flex-wrap">
          <div className="h-full w-full relative ">
            <div className="absolute top-0 right-0 left-0 h-[55%]">
              <textarea
                name="code"
                value={code}
                onChange={inpvalchange}
                id="code"
                className="h-full w-full p-2 text-[.6rem] text-orange-300 pt-4  outline-none bg-transparent"
              ></textarea>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-[45%] border-t border-[var(--border-light-color)]">
              <p className="text-xs flex gap-1 p-2 text-[var(--text-full-dark)]/50">
                Output:{" "}
                <span
                  className={`inline-block w-full ${run ? "block" : "hidden"}`}
                >
                  {extractName(code)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSCodeModal;
