import React from "react";
import { Card, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import URLConverter from "../../../libs/URLConverter";

const EachCategory = ({ data }) => {
  return (
    <Card
      isPressable
      className="col-lg-3 group col-md-4 col-sm-6 rounded-sm"
      radius="none"
    >
      <Link to={`/${URLConverter(data?.categoryName)}`} className="w-full">
        <div className="cat-item flex items-center w-full rounded shadow-sm hover:bg-slate-100">
          <div className="overflow-hidden">
            <Image
              radius="none"
              className="w-[100px] h-full group-hover:scale-110 group-hover:rotate-6"
              src={data?.image}
              alt={data?.categoryName}
            />
          </div>
          <div className="flex flex-col font-poppins justify-start pl-3">
            <h6 className="font-semibold text-sm text-gray-800">
              {data?.categoryName}
            </h6>
            <small className="text-gray-600 text-xs text-start w-full">
              {data?.productCount}
            </small>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default EachCategory;
