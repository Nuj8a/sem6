import React from "react";

const ProductDescription = () => {
  return (
    <div className="max-h-[500px] overflow-auto px-4">
      <div className="flex gap-1 flex-col text-base">
        <h2 className="text-xl text-black/80 mt-5 font-poppins font-semibold">
          This is subcategory test
        </h2>
        <div className="px-2">
          <h4 className="flex gap-1 text-black/80">
            <span className="font-semibold">Price:</span>{" "}
            <div className="flex gap-1 items-end ml-1">
              <span className="text-red-600 font-poppins font-semibold">
                Rs. 9,100
              </span>
              <div className="ml-2 gap-2 flex mb-1">
                <span className="text-sm line-through">Rs. 10,000</span>
                <span className="text-sm">-10%</span>
              </div>
            </div>
          </h4>
          <div className="flex gap-5">
            <h4 className="flex gap-1 text-black/80">
              <span className="font-semibold">Category:</span>About
            </h4>
            <h4 className="flex gap-1 text-black/80">
              <span className="font-semibold">Subcategory:</span> -
            </h4>
          </div>
          <div className="flex gap-5 mb-1">
            <h4 className="flex gap-1 text-black/80">
              <span className="font-semibold">Product for:</span>Men
            </h4>
            <h4 className="flex gap-1 text-black/80">
              <span className="font-semibold">Avilable Colors:</span> Red, blue
            </h4>
          </div>
        </div>

        <div className="text-black/80 border-t pt-1 flex flex-col ">
          <h3 className="font-poppins font-semibold my-1 mt-2 text-lg">
            Description
          </h3>
          <div className="px-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sit dolorem numquam doloremque recusandae vero delectus placeat
              obcaecati, enim iste ratione aliquam quos, doloribus deserunt
              voluptatem tenetur
            </p>
            <p>
              quam ipsam itaque et architecto sequi ut. Neque dolorum rem sint,
              repellat aut illo laudantium at officiis adipisci facilis illum.
              Eligendi, cum rem?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sit dolorem numquam doloremque recusandae vero delectus placeat
              obcaecati, enim iste ratione aliquam quos, doloribus deserunt
              voluptatem tenetur
            </p>
            <p>
              quam ipsam itaque et architecto sequi ut. Neque dolorum rem sint,
              repellat aut illo laudantium at officiis adipisci facilis illum.
              Eligendi, cum rem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
