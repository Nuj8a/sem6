import { Image } from "@nextui-org/react";
import React from "react";

const EachSiteImages = () => {
  return (
    <div className="flex h-full mb-5 overflow-hidden flex-col gap-5">
      <div className="w-full h-[380px] begorecontent border rounded border-[var(--border-light-color)] flex justify-center items-center">
        <Image
          radius="none"
          className="object-contain rounded shadow-lg"
          src="https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{ maxHeight: "360px" }}
        />
      </div>
      <div className="max-h-[70px] begorecontent flex items-center gap-3 px-5 h-full w-full border rounded border-[var(--border-light-color)]">
        <div className="h-[55px] rounded-sm w-[50px] border overflow-hidden border-[var(--border-dark-color)]">
          <img
            src="https://images.pexels.com/photos/7949632/pexels-photo-7949632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={55}
            width={50}
            style={{ height: "55px", width: "50px" }}
            className="object-cover cursor-pointer hover:scale-110 duration-150"
          />
        </div>
        <div className="h-[55px] rounded-sm w-[50px] border overflow-hidden border-[var(--border-dark-color)]">
          <img
            src="https://images.pexels.com/photos/13882426/pexels-photo-13882426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={55}
            width={50}
            style={{ height: "55px", width: "50px" }}
            className="object-cover cursor-pointer hover:scale-110 duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default EachSiteImages;
