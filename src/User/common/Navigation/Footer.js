"use client";
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
              <h5 className="text-[var(--text-dark-color)] font-Orbitron font-semibold text-sm tracking-wide text-uppercase mb-1">
                Get In Touch
              </h5>
              <p className="mb-1 text-sm font-poppins text-[var(--text-light-color)] w-[80%]">
                Have questions or feedback? We&apos;re here to help! Contact us
                using the info below or our contact form. Well respond promptly.
              </p>
              <div>
                <h6 className="text-[var(--text-dark-color)] font-Orbitron font-semibold text-sm tracking-wide text-uppercase mt-2 mb-3">
                  Follow Us:
                </h6>
                <div className="flex space-x-3 -mt-2 ">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61554100722430"
                    }
                    target="blank"
                  >
                    <AiFillFacebook className="text-2xl text-[var(--primary-color)] cursor-pointer" />
                  </Link>

                  <Link
                    href={"https://www.instagram.com/desnepal2080/"}
                    target="blank"
                  >
                    <FaInstagramSquare className="text-2xl text-[var(--primary-color)] cursor-pointer" />
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@DESNepal."}
                    target="blank"
                  >
                    <FaYoutubeSquare className="text-2xl text-[var(--primary-color)] cursor-pointer" />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/des-nepal-undefined-3a73642a5/"
                    }
                    target="blank"
                  >
                    <FaLinkedin className="text-2xl text-[var(--primary-color)] cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-span-4 lg:col-span-8`}>
              <div className="lg:grid lg:grid-cols-3">
                <div className="mb-5">
                  <h5 className="text-[var(--text-dark-color)] font-Orbitron font-semibold text-sm tracking-wide text-uppercase mb-1">
                    Explore
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      href="/our-mission"
                      className={`flex w-[160px] font-poppins text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1" />
                      Our Initiatives
                    </Link>
                    <Link
                      href="/news-and-events"
                      className={`flex w-[160px] font-poppins text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs  mr-1" />
                      Digital Programs
                    </Link>
                    <Link
                      href="/projects"
                      className={` flex w-[160px] font-poppins text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1" />
                      Projects
                    </Link>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="text-[var(--text-dark-color)] font-Orbitron font-semibold text-sm tracking-wide text-uppercase mb-1">
                    Connect
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      href="/contact"
                      className={`flex w-[160px] font-poppins text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1 " />
                      Contact Us
                    </Link>
                    <Link
                      href="/leadership"
                      className={` flex w-[200px] text-sm font-poppins text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1 " />
                      Leadership
                    </Link>
                    <Link
                      href="/news-and-events"
                      className={` flex w-[160px] font-poppins text-sm  text-[var(--text-light-color)] items-center`}
                    >
                      <MdOutlineKeyboardArrowRight className="!text-xs mr-1 " />
                      News and Events
                    </Link>
                  </div>
                </div>
                <div>
                  <h5 className="text-[var(--text-dark-color)] font-Orbitron font-semibold text-sm tracking-wide text-uppercase">
                    Contact Us:
                  </h5>
                  <div className="flex flex-col space-y-1 ml-1 mt-1">
                    <p className=" flex font-poppins text-sm text-[var(--text-light-color)] items-center">
                      <MdEmail className="text-[var(--primary-color)] mr-3" />
                      info@webupaya.org.np
                    </p>
                    <p className="mb-0 flex font-poppins text-sm text-[var(--text-light-color)] items-center">
                      <BsTelephoneFill className="text-[var(--primary-color)] scale-90 mr-3" />
                      +977 9767485800
                    </p>
                    <Link
                      href="https://www.google.com/maps/place/Suvalaav+Jewellers/@27.7410232,85.3101737,49m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1924434e767b:0x50b0d5a9db419ade!2sSuvalaav+Jewellers!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc!3m5!1s0x39eb1924434e767b:0x50b0d5a9db419ade!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc?entry=ttu"
                      className={`tracking-wide font-poppins flex text-sm text-[var(--text-light-color)] items-center`}
                    >
                      <ImLocation className="text-[var(--primary-color)] mr-3" />
                      kupandol-10 Lalitpur, Nepal
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
          <p className="pt-2 pb-4 text-center font-poppins !py-5 text-sm text-[var(--text-light-color)] tracking-wide">
            Copyright © {date.getFullYear()} WebUpaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
