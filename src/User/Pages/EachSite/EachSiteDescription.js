import { Button, Chip } from "@nextui-org/react";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const EachSiteDescription = () => {
  return (
    <div className="p-3 px-5 relative !font-poppins">
      <div className="flex gap-3 flex-col font-poppins">
        <h3 className="text-[var(--primary-color)]">Gaurab Sunar</h3>
        <h2 className="text-3xl font-semibold text-[var(--text-dark-color)]">
          E-Commerce Website
        </h2>
        <p className="text-[var(--text-light-color)] line-clamp-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, aspernatur alias? Est inventore officiis iste voluptates
          delectus saepe tempora autem, sit, at repellat aliquam quis pariatur
          recusandae officia totam cupiditate?
        </p>
        <div className="my-3">
          <div className="flex gap-5">
            <div className="text-[var(--text-dark-color)] text-lg">
              RS. 67,000
            </div>
            <Chip color="success" size="sm" className="scale-85" radius="sm">
              40% OFF
            </Chip>
          </div>
          <div className="line-through text-sm text-red-500">RS. 80,000</div>
        </div>
        <div className="text-sm flex gap-2 flex-col">
          <div className="text-[var(--text-light-color)]">
            Website Type: Dynamic
          </div>
          <div className="text-[var(--text-light-color)]">
            Technology Used: ReactJs, NodeJS
          </div>
        </div>
        <div className="mt-4 flex gap-5">
          <Button
            isPressable
            radius="none"
            size="sm"
            className="font-poppins flex justify-center items-center rounded-sm text-black text-sm !py-4 !h-[40px] bg-[var(--primary-color)] hover:bg-[#bb4506] hover:text-white duration-300 px-5 font-semibold"
            startContent={<BsBagCheckFill />}
          >
            Order Now
          </Button>
          <Button
            radius="none"
            size="sm"
            isPressable
            className="font-poppins flex justify-center items-center border-2 rounded-sm text-sm !py-4 !h-[40px] border-[var(--primary-color)] !hover:bg-[var(--primary-color)] orangeiter px-5 text-white !bg-transparent font-semibold"
            variant="bordered"
            startContent={<IoMdCart className="text-white" />}
          >
            <div>Add to cart</div>
          </Button>
        </div>
      </div>
      <FaHeart className="absolute top-0 text-[var(--text-light-color)] cursor-pointer right-10 text-xl" />
    </div>
  );
};

export default EachSiteDescription;
