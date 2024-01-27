import { Button, Chip } from "@nextui-org/react";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const EachSiteDescription = () => {
  return (
    <div className="p-3 px-5 relative !font-poppins">
      <div className="flex gap-3 flex-col font-poppins">
        <h3 className="text-[#ea580c]">Gaurab Sunar</h3>
        <h2 className="text-3xl font-semibold text-black">
          E-Commerce Website
        </h2>
        <p className="text-black/80 line-clamp-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, aspernatur alias? Est inventore officiis iste voluptates
          delectus saepe tempora autem, sit, at repellat aliquam quis pariatur
          recusandae officia totam cupiditate?
        </p>
        <div className="my-3">
          <div className="flex gap-5">
            <div className="text-black text-lg">RS. 67,000</div>
            <Chip color="success" size="sm" className="scale-85" radius="sm">
              40% OFF
            </Chip>
          </div>
          <div className="line-through text-xs text-red-500">RS. 80,000</div>
        </div>
        <div className="text-sm flex gap-2 flex-col">
          <div className="text-black/80">Website Type: Dynamic</div>
          <div className="text-black/80">Technology Used: ReactJs, NodeJS</div>
        </div>
        <div className="mt-4 flex gap-5">
          <Button
            isPressable
            radius="none"
            className="font-poppins flex justify-center px-10 items-center rounded-sm duration-300 font-semibold"
            startContent={<BsBagCheckFill />}
            color="primary"
          >
            Order Now
          </Button>
          <Button
            radius="none"
            isPressable
            color="primary"
            className="font-poppins flex justify-center px-10 items-center rounded-sm duration-300 font-semibold"
            variant="bordered"
            startContent={<IoMdCart className="scale-110" />}
          >
            <div>Add to cart</div>
          </Button>
        </div>
      </div>
      <FaHeart className="absolute top-0 text-black/80 cursor-pointer right-10 text-xl" />
    </div>
  );
};

export default EachSiteDescription;
