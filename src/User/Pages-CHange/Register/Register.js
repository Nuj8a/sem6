import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Logo from "../../Common/assets/js/Logo";
import { IoArrowForwardOutline } from "react-icons/io5";

const Register = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className="min-h-[200px] w-[400px] my-20 rounded border border-[var(--border-light-color)]">
        <div className="flex gap-5 flex-col p-8 font-poppins">
          <div className="flex justify-between pb-2 items-center">
            <h3 className="text-[var(--text-dark-color)] font-semibold tracking-wider text-2xl font-Orbitron">
              Sign Up
            </h3>
            <Logo height={45} width={115} />
          </div>
          <h3 className="text-[var(--text-light-color)] text-sm">
            Thank you for using web-upaya!!!
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex gap-1 flex-col">
              <label
                htmlFor="name"
                className="text-sm text-[var(--text-dark-color)] cursor-pointer"
              >
                Name
              </label>
              <div className="w-full h-[42px] relative flex items-center">
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="text-sm px-4 w-full absolute inset-0 pr-10 py-3 text-white bg-transparent border border-[var(--border-light-color)]"
                />
                <FaUser className="absolute right-3 text-[var(--text-light-color)]" />
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <label
                htmlFor="email"
                className="text-sm text-[var(--text-dark-color)] cursor-pointer"
              >
                Email
              </label>
              <div className="w-full h-[42px] relative flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="text-sm px-4 w-full absolute inset-0 pr-10 py-3 text-white bg-transparent border border-[var(--border-light-color)]"
                />
                <MdEmail className="absolute right-3 scale-110 text-[var(--text-light-color)]" />
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="text-sm text-[var(--text-dark-color)] cursor-pointer"
                >
                  Password
                </label>
              </div>
              <div className="w-full h-[42px] relative flex items-center">
                <input
                  type={`${showPass ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="text-sm px-4 absolute inset-0 pr-10 py-3 text-white bg-transparent border border-[var(--border-light-color)]"
                />
                {showPass ? (
                  <IoMdEye
                    className="absolute scale-125 right-3 z-10 cursor-pointer hover:text-[var(--text-dark-color)] text-[var(--text-light-color)]"
                    onClick={() => setShowPass((p) => !p)}
                  />
                ) : (
                  <IoMdEyeOff
                    className="absolute scale-125 right-3 z-10 cursor-pointer hover:text-[var(--text-dark-color)] text-[var(--text-light-color)]"
                    onClick={() => setShowPass((p) => !p)}
                  />
                )}
              </div>
            </div>
          </div>
          <button className="border py-2 w-[120px] pl-2 rounded-full mx-auto my-1 uppercase text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] font-semibold text-sm duration-200 border-[var(--primary-color)] flex justify-center items-center gap-[2px] hover:tracking-wider">
            Sign Up <IoArrowForwardOutline className="scale-95 text-lg" />
          </button>
          <div>
            <p className="text-xs text-[var(--text-light-color)] tracking-wider  pb-2">
              Already have account?{" "}
              <Link
                to={"/login"}
                className="text-blue-400 hover:text-blue-500 duration-150"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
