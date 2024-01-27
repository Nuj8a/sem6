import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export default function CardsService() {
  return (
    <Card
      radius="none"
      isFooterBlurred
      className="border-none w-full h-[250px] !rounded !overflow-hidden "
      id="mainCardLink"
    >
      <Image
        isZoomed={false}
        shadow="sm"
        radius="none"
        width={300}
        alt={"gaurab"}
        className={`w-full absolute mainImage1 object-cover image-transition`}
        src={"https://nextui.org/images/album-cover.png"}
        style={{ height: "250px" }}
      />
      <Image
        isZoomed={false}
        shadow="sm"
        radius="none"
        width={300}
        alt={"gaurab"}
        className={`w-full absolute mainImage2 object-cover image-transition`}
        style={{ height: "250px" }}
        src={
          "https://plus.unsplash.com/premium_photo-1661943864527-d714736dfd16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <CardFooter className=" before:bg-white/30 border-white/20 rounded border-1 overflow-hidden py-1 absolute bottom-1 w-[calc(100%_-_8px)] shadow-small bg-white/50 ml-1 flex justify-between z-10">
        <p className="text-xs line-clamp-1 pl-1 font-semibold -ml-2 !-tracking-wide font-poppins">
          Ecommerce Site
        </p>
        <Button
          className="rounded bg-white/40 border border-black/20 tracking-wide !p-3 font-semibold font-poppins text-[.65rem] -mr-2 scale-95"
          variant="flat"
          color="default"
          radius="none"
          size="sm"
        >
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}
