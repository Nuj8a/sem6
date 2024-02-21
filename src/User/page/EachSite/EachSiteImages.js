import { Image } from "@nextui-org/react";
import React from "react";

const EachSiteImages = ({ data }) => {
  return (
    <div className="flex h-full mb-5 overflow-hidden flex-col gap-5">
      <div className="w-full h-[380px] begorecontent border rounded border-black/10 flex justify-center items-center">
        <Image
          radius="none"
          className="object-contain rounded shadow-lg"
          src={data?.length > 0 ? data[0] : ""}
          style={{ maxHeight: "360px" }}
        />
      </div>
      <div className="max-h-[70px] begorecontent flex items-center gap-3 px-5 h-full w-full border rounded border-black/10">
        {data?.map((e, index) => {
          return (
            <div
              className="h-[55px] rounded-sm w-[50px] border overflow-hidden border-black/20"
              key={index}
            >
              <img
                src={e}
                alt=""
                height={55}
                width={50}
                style={{ height: "55px", width: "50px" }}
                className="object-cover cursor-pointer hover:scale-110 duration-150"
              />
            </div>
          );
        })}
        {/* <div className="h-[55px] rounded-sm w-[50px] border overflow-hidden border-black/20">
          <img
            src="https://images.pexels.com/photos/13882426/pexels-photo-13882426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={55}
            width={50}
            style={{ height: "55px", width: "50px" }}
            className="object-cover cursor-pointer hover:scale-110 duration-150"
          />
        </div> */}
      </div>
    </div>
  );
};

export default EachSiteImages;
