import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../../../assets/icons/logo.svg";
import { Card } from "@nextui-org/react";
import Subcategory from "./Subcategory";
import Profile from "../Components/Profile";

const Navigation = ({ setColorChange, colorChange }) => {
  const Location = useLocation().pathname;
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="sticky bg-slate-50 shadow font-poppins top-0 z-50">
        <div className="h-[55px] w-full border-b border-dark-color">
          <div className="flex w-[95%] pt-1 mx-auto justify-between items-center h-full">
            <div className="flex gap-20  h-full">
              <div className="logo flex justify-center items-center h-full">
                <img src={Logo} height={40} width={115} alt="logo" />
              </div>
              <ul className="flex text-sm justify-center gap-5 items-center">
                <li>
                  <Link
                    className={`${
                      Location.toLowerCase() === "/"
                        ? "text-black"
                        : "text-slate-700"
                    } relative hover:text-black py-2 `}
                    to={"/"}
                  >
                    Home
                    {Location.toLowerCase() === "/" && (
                      <div className="h-[2px] absolute bottom-1 bg-black/80 rounded-r w-[20px]"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    className={` ${
                      Location.toLowerCase() === "/about-us"
                        ? "text-black"
                        : "text-slate-700"
                    } hover:text-black relative py-2 `}
                    to={"/about-us"}
                  >
                    About
                    {Location.toLowerCase() === "/about-us" && (
                      <div className="h-[2px] absolute bottom-1 bg-black/80 rounded-r w-[20px]"></div>
                    )}
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    className={` ${
                      Location.toLowerCase().includes("/services")
                        ? "text-black"
                        : "text-slate-700"
                    } hover:text-black flex relative justify-start py-2  items-center gap-[1px] itemHover`}
                  >
                    Services{" "}
                    <IoIosArrowDown className="mt-[3px] text-base group-hover:rotate-180 duration-150" />
                    {Location.toLowerCase().includes("/services") && (
                      <div className="h-[2px] absolute bottom-1 bg-black/80 rounded-r w-[20px]"></div>
                    )}
                  </Link>
                  <div className="hidden group-hover:block">
                    <Subcategory />
                  </div>
                </li>
                <li>
                  <Link
                    className={` ${
                      Location.toLowerCase() === "/contact"
                        ? "text-black"
                        : "text-slate-700"
                    } hover:text-black relative py-2 `}
                    to={"/contact"}
                  >
                    Contact
                    {Location.toLowerCase() === "/contact" && (
                      <div className="h-[2px] absolute bottom-1 bg-black/80 rounded-r w-[20px]"></div>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="profile text-sm flex justify-center items-center gap-5">
              <div className="scale-75">
                {/* <ThemeChange
                  setColorChange={setColorChange}
                  colorChange={colorChange}
                /> */}
              </div>
              <div className="h-[20px] w-[1px] border-r border-black/15" />
              <Link
                to={"/login"}
                className={`login !text-xs w-1/3 ${
                  Location.toLowerCase().includes("login")
                    ? "text-black"
                    : "text-black/80"
                } `}
              >
                Login
              </Link>
              <div className="h-[20px] w-[1px] border-r border-black/15" />
              <Link
                to={"/register"}
                className={`login !text-xs w-1/3 ${
                  Location.toLowerCase().includes("register")
                    ? "text-black"
                    : "text-black/80"
                } `}
              >
                Signup
              </Link>
              <div className="h-[20px] w-[1px] border-r border-black/15" />
              <Link to={"/cart"} className="w-1/3">
                <IoMdCart
                  className={`login text-2xl ${
                    Location.toLowerCase().includes("cart")
                      ? "text-black"
                      : "text-black/70"
                  } `}
                />
              </Link>
              <div className="h-[20px] w-[1px] border-r border-black/15" />
              <Profile />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {scrollY > 700 && (
        <Card
          variant="ghost"
          color="primary"
          className="uppercase z-[1000000] fixed w-[35px] rotate-180 h-[35px] bottom-[40vh] text-white bg-[#0f1019] hover:bg-[#000000] right-10 font-gruppo rounded-none flex border-dark-color justify-center items-center mt-5 border text-sm tracking-wider hover:tracking-widest"
          radius="none"
          shadow="none"
          isPressable
          onClick={scrollUP}
        >
          <div className="flex text-white justify-center gap-1 border-dark-color  duration-150 items-center">
            <IoIosArrowDown className="text-xl" />
          </div>
        </Card>
      )}
    </>
  );
};

export default Navigation;
