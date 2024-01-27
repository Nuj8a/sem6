import React from "react";
import EachSiteDescription from "./EachSiteDescription";
import EachSiteImages from "./EachSiteImages";

const EachSiteContent = () => {
  return (
    <div className="grid h-[470px] grid-cols-12 gap-5">
      <div className="col-span-5 h-full">
        <EachSiteImages />
      </div>
      <div className="col-span-7 h-full">
        <EachSiteDescription />
      </div>
    </div>
  );
};

export default EachSiteContent;
