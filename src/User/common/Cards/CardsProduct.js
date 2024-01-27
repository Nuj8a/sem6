import React from "react";
import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CardsProduct() {
  return (
    <Link
      to={"/each/services/e-commerce/1"}
      className="cursor-pointer hover:scale-[1.02] rounded  duration-100 group"
      id="mainCardLink"
    >
      <Card
        className={` h-[250px] border overflow-hidden shadow relative !rounded`}
        shadow="sm"
      >
        <CardBody className="overflow-visible  p-0">
          <Image
            isZoomed={false}
            shadow="sm"
            radius="none"
            width={300}
            height={190}
            alt={"gaurab"}
            className={`w-full absolute  mainImage1 object-cover !h-[190px] image-transition`}
            src={"https://nextui.org/images/album-cover.png"}
            style={{ height: "190px" }}
          />
          <Image
            isZoomed={false}
            shadow="sm"
            radius="none"
            width={300}
            height={190}
            alt={"gaurab"}
            className={`w-full absolute  mainImage2 object-cover !h-[190px] image-transition`}
            style={{ height: "190px" }}
            src={
              "https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </CardBody>
        <CardFooter className="!rounded-none group-hover:bg-blue-50 duration-200 shadow-inner text-small h-[60px] absolute z-20 bg-white text-black/90 bottom-0 justify-between">
          <div className="flex flex-col">
            <h2 className="font-poppins line-clamp-1">{"Ecommerce Site"}</h2>
            <div className="flex gap-3 items-end">
              <p className="text-black/80 text-xs font-poppins">
                {"RS. 10,000"}
              </p>
              <p className="text-sm line-through text-red-500 font-poppins">
                {"RS. 14,000"}
              </p>
            </div>
          </div>
          <MdShoppingCart className="text-xl bottom-3 absolute right-2 text-black/80" />
        </CardFooter>
      </Card>
    </Link>
  );
}
