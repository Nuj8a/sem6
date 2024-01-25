import React from "react";
import { Card } from "@nextui-org/react";
import image2 from "./assets/svg/devider.svg";
import Logo from "../../Common/assets/js/Logo";

const Slogan = () => {
  return (
    <div className="relative w-full h-full border-t border-black/5">
      <div className="mx-auto max-w-[95%] md:max-w-[100%]">
        <div className="flex mt-12 deviderSvg w-[100%] mx-auto md:w-full gap-2 justify-center items-center">
          <div className="w-1/2 border-b border-dashed border-[var(--border-dark-color)]" />
          <img
            src={image2}
            height={40}
            width={40}
            alt="devider"
            className="!text-[var(--text-full-dark)] !fill-[var(--text-full-dark)]"
          />
          <div className="w-1/2 border-b border-dashed border-[var(--border-dark-color)]" />
        </div>
        <div className="flex flex-col min-h-[100px]">
          <div className="flex justify-center items-center mt-5">
            <div className="flex items-center md:m-6 bg-2 gap-4 md:mb-5">
              <Logo height={125} width={357} />
              <Card
                radius="none"
                className=" bg-custom-color border-[var(--border-light-color)] border before:bg-[var(--border-light-color)] overflow-hidden  bottom-1 h-[125px] flex flex-col justify-center items-start gap-3 px-5 shadow-small mt-2 z-10 rounded-sm before:rounded"
              >
                <h2 className="text-xl text-[var(--primary-color)] md:text-[2.9rem] font-Orbitron font-semibold">
                  #WebForAll
                </h2>
                <h3 className="font-semibold text-[var(--text-light-color)] font-Orbitron italic text-xs md:text-sm">
                  Innovate Affordably with WebUpaya
                </h3>
              </Card>
            </div>
          </div>
          <p
            data-aos="fade-up"
            className="font-semibold italic text-center pb-3 text-[var(--text-dark-color)] text-xs md:text-based max-w-[95%] md:max-w-[90%] mx-auto font-poppins !-tracking-[.01rem]"
          >
            WebUpaya: Fusing cutting-edge innovation with budget-friendly
            solutions to elevate your online presence.
          </p>
        </div>
      </div>
      {/* <Events /> */}
    </div>
  );
};

export default Slogan;
