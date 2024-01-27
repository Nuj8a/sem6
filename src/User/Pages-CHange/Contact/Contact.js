import React, { useEffect } from "react";
import { IoCallSharp, IoLogoInstagram } from "react-icons/io5";
import { LiaFacebookSquare } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxLine, RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const Contact = () => {
  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollUP();
  }, []);
  return (
    <div className="min-h-screen px-3">
      <div className="relative h-full w-full">
        <div className="absolute top-0 h-[400px] rounded-b-md w-full border border-t-0 border-[var(--border-light-color)] bgOpactity1"></div>
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-1 min-h-[400px] z-10 ">
            <div className="mt-[100px] w-[80%] float-right flex flex-col gap-4">
              <h3 className="text-xs font-poppins uppercase text-[var(--text-light-color)]">
                Contact Us
              </h3>
              <h2 className="font-gruppo  text-[var(--text-dark-color)] text-3xl">
                <span className="text-[var(--primary-color)] font-semibold text-[2.3rem] mr-2">
                  WebUpaya:
                </span>
                Merge innovation with budget-friendly solutions for a standout
                online presence.
              </h2>
              <p className="text-sm font-poppins text-[var(--text-light-color)]">
                Send us a message and we'll get your questions answered as soon
                as possible.
              </p>
              <div>
                <button className="border px-5 py-3 rounded-full mt-2 gap-[2px] hover:cursor-pointer border-[var(--primary-color)] text-[var(--primary-color)] flex items-center hover:bg-[var(--primary-color)] duration-200 hover:text-[var(--background-color)] font-semibold font-poppins text-sm">
                  <IoCallSharp className="text-base" />
                  <span>+977 9810325922</span>
                </button>
              </div>
              <div className="mt-14 flex flex-col gap-7">
                <div className="font-poppins flex flex-col gap-2">
                  <h3 className="text-[var(--text-dark-color)] font-Orbitron font-semibold tracking-wider uppercase">
                    Contact us through
                  </h3>
                  <div className="flex flex-col gap-1 px-1">
                    <p className="text-sm flex gap-1 items-center text-[var(--text-light-color)]">
                      <MdEmail />
                      gaurabsunar0001@gmail.com
                    </p>
                    <p className="text-sm flex gap-1 items-center text-[var(--text-light-color)]">
                      <MdLocationPin />
                      Kathmandu Nepal
                    </p>
                    <p className="text-sm flex gap-1 items-center text-[var(--text-light-color)]">
                      <IoCallSharp />
                      +977 9810325922
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[var(--text-dark-color)] font-Orbitron font-semibold tracking-wider uppercase">
                    Social media
                  </h3>
                  <div className="flex gap-4 mt-2">
                    <Link to={"/"}>
                      <LiaFacebookSquare className="text-primary-color hover:text-[var(--text-full-dark)] scale-125 text-2xl" />
                    </Link>
                    <Link to={"/"}>
                      <IoLogoInstagram className="text-primary-color hover:text-[var(--text-full-dark)] text-2xl" />
                    </Link>
                    <Link to={"/"}>
                      <RiYoutubeLine className="text-primary-color hover:text-[var(--text-full-dark)] scale-125 text-2xl" />
                    </Link>
                    <Link to={"/"}>
                      <RiLinkedinBoxLine className="text-primary-color hover:text-[var(--text-full-dark)] scale-125 text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 min-h-[400px] flex justify-center items-center mt-[100px] z-10">
            <div>
              <div className="w-[450px] font-poppins rounded bg-[var(--background-color)] border border-[var(--border-light-color)] shadow h-full p-6 flex gap-4 flex-col">
                <h2 className="font-semibold uppercase text-[var(--text-light-color)]">
                  Contact Form
                </h2>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  className="bgOpactity1 border border-[var(--border-light-color)] text-[var(--text-light-color)] text-sm outline-none rounded-sm py-[.6rem] px-3"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email*"
                  className="bgOpactity1 border border-[var(--border-light-color)] text-[var(--text-light-color)] text-sm outline-none rounded-sm py-[.6rem] px-3"
                />
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Message Title*"
                  className="bgOpactity1 border border-[var(--border-light-color)] text-[var(--text-light-color)] text-sm outline-none rounded-sm py-[.6rem] px-3"
                />
                <textarea
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  className="bgOpactity1 border border-[var(--border-light-color)] text-[var(--text-light-color)] text-sm outline-none rounded-sm h-[150px] py-[.6rem] px-3 resize-none"
                ></textarea>
                <button className="border bgOpactity1 border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)] font-semibold mb-2 text-sm py-[.7rem] hover:bg-[var(--primary-color)] duration-200 hover:text-[var(--background-color)] hover:tracking-wider rounded capitalize tracking-wide">
                  Submit your message{" "}
                  <IoArrowForwardOutline className="text-xl scale-95 pt-[1px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
