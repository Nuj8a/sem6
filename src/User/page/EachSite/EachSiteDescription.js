import { Button, Chip } from "@nextui-org/react";
import React from "react";
import { IoMdCart } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import formatRS from "../../../libs/FormatRS";
import FindGender from "../../../libs/FindGender";

const EachSiteDescription = ({ data }) => {
  console.log(data);

  const finalPrice = Math.round(
    data.price - (data.price * data.discount) / 100
  );

  return (
    <div className="p-3 px-5 relative !font-poppins">
      <div className="flex gap-3 flex-col font-poppins">
        <h3 className="text-[#ea580c]">{data?.categoryName}</h3>
        <h2 className="text-3xl font-semibold text-black">
          {data?.title?.slice(0, 1).toUpperCase() + data?.title?.slice(1)}
        </h2>
        <div
          className="text-black/80 line-clamp-4"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></div>

        <div className="my-3">
          <div className="flex gap-5">
            <div className="text-black text-lg">{formatRS(finalPrice)}</div>
            <Chip
              color="success"
              size="sm"
              className="scale-85 text-white"
              radius="sm"
            >
              {data?.discount}% OFF
            </Chip>
          </div>
          <div className="line-through text-xs text-red-500">
            {formatRS(data?.price)}
          </div>
        </div>
        <div className="text-sm flex gap-2 flex-col">
          <div className="text-black/80">
            {FindGender(data?.gendertype).toLocaleLowerCase() === "men"
              ? `Man Up Your Style: Shop Our Men's Collection Now!`
              : FindGender(data?.gendertype).toLocaleLowerCase() === "women"
                ? "Level Up Your Style: Shop Our Women's Collection Now!"
                : "Elevate Your Look: Explore Our Unisex Collection Today!"}
          </div>
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
