import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const pathname = useLocation().pathname;
  const isDashboard = pathname.includes("dashboard");
  const date = new Date();

  return !isDashboard ? (
    <footer className="shadow border-t border-black/5 bg-slate-50 mt-10">
      <div className={`mt-0 pt-3`}>
        <div className="container mx-auto px-5 pt-5 mb-2">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className={`col-span-4 lg:col-span-4 mb-2 pr-3 lg:pr-5`}>
              <h5 className="text-[var(--text-dark-color)] font-semibold text-sm tracking-wide text-uppercase mb-1">
                Get In Touch
              </h5>
              <p className="mb-1 text-sm text-[var(--text-light-color)] w-[80%]">
                Have questions or feedback? We&apos;re here to help! Contact us
                using the info below or our contact form. Well respond promptly.
              </p>
            </div>
            <div className={`col-span-4 lg:col-span-8`}>
              <div className="lg:grid lg:grid-cols-3">
                <div className="mb-5">
                  <h5 className="text-[var(--text-dark-color)] font-semibold text-sm tracking-wide text-uppercase mb-1">
                    Explore
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      to="/shirts-for-men"
                      className={`flex w-[160px] text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1" />
                      Shirts for Men
                    </Link>
                    <Link
                      to="/shoose-for-men"
                      className={`flex w-[160px] text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs  mr-1" />
                      Shoes for Men
                    </Link>
                    <Link
                      to="/pants-for-men"
                      className={` flex w-[160px] text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1" />
                      Pants for Men
                    </Link>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="text-[var(--text-dark-color)] font-semibold text-sm tracking-wide text-uppercase mb-1">
                    Connect
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      to="/contact"
                      className={`flex w-[160px] text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1 " />
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div>
                  <h5 className="text-[var(--text-dark-color)] font-semibold text-sm tracking-wide text-uppercase">
                    Contact Us:
                  </h5>
                  <div className="flex flex-col space-y-1 ml-1 mt-1">
                    <p className=" flex text-sm text-[var(--text-light-color)] items-center">
                      <MdEmail className="text-[var(--primary-color)] mr-3" />
                      info@Pahiran.org.np
                    </p>
                    <p className="mb-0 flex text-sm text-[var(--text-light-color)] items-center">
                      <BsTelephoneFill className="text-[var(--primary-color)] scale-90 mr-3" />
                      +977 9810000000
                    </p>
                    <Link
                      className={`tracking-wide flex text-sm text-[var(--text-light-color)] items-center`}
                    >
                      <ImLocation className="text-[var(--primary-color)] mr-3" />
                      Kathmandu, Nepal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full flex justify-center items-center border-t border-dashed border-black/20 mt-4 mx-auto`}
        >
          <p className="pt-2 pb-4 text-center  !py-5 text-sm text-[var(--text-light-color)] tracking-wide">
            Copyright © {date.getFullYear()} Pahiran. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
