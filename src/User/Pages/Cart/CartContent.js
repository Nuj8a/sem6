import React from "react";
import { IoBag } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const CartContent = () => {
  return (
    <div className="min-h-[200px] gap-10 pb-10 grid grid-cols-12">
      <div className="col-span-7 flex gap-2 flex-col h-full ">
        <div className="w-full min-h-[40px] flex items-center gap-5 p-3 bg-[rgba(255,255,255,0.1)] rounded border border-[var(--border-light-color)]">
          <div className="w-[50px]">
            <img
              src="https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={35}
              width={35}
              style={{ height: "35px", width: "35px" }}
              className="rounded object-cover"
              alt=""
            />
          </div>
          <div className="font-poppins flex justify-between w-full items-center">
            <div className=" flex items-center gap-5 ">
              <div className="w-[120px]">
                <div className="text-xs text-[var(--text-light-color)]">
                  Gaurab sunar
                </div>
                <div className="text-[.6rem] text-[var(--text-light-color)]">
                  Dynamic
                </div>
              </div>
              <div className="text-sm font-semibold w-[300px] text-[var(--text-dark-color)]">
                E-Commerce Website
              </div>
            </div>
            <div className="flex items-center gap-5 w-[200px] justify-end">
              <div className="flex items-end gap-1 text-[var(--text-light-color)] hover:cursor-pointer hover:text-[var(--text-darh-color)]">
                <MdDelete className="" />
                <p className="text-xs ">Delete</p>
              </div>
              <div className="w-[1px] h-[20px] border border-[var(--border-light-color)]"></div>
              <p className="text-sm text-[var(--primary-color)]">Rs. 80,000</p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[40px] flex items-center gap-5 p-3 bg-[rgba(255,255,255,0.1)] rounded border border-[var(--border-light-color)]">
          <div className="w-[50px]">
            <img
              src="https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={35}
              width={35}
              style={{ height: "35px", width: "35px" }}
              className="rounded object-cover"
              alt=""
            />
          </div>
          <div className="font-poppins flex justify-between w-full items-center">
            <div className=" flex items-center gap-5 ">
              <div className="w-[120px]">
                <div className="text-xs text-[var(--text-light-color)]">
                  Gaurab sunar
                </div>
                <div className="text-[.6rem] text-[var(--text-light-color)]">
                  Dynamic
                </div>
              </div>
              <div className="text-sm font-semibold w-[300px] text-[var(--text-dark-color)]">
                E-Commerce Website
              </div>
            </div>
            <div className="flex items-center gap-5 w-[200px] justify-end">
              <div className="flex items-end gap-1 text-[var(--text-light-color)] hover:cursor-pointer hover:text-[var(--text-darh-color)]">
                <MdDelete className="" />
                <p className="text-xs ">Delete</p>
              </div>
              <div className="w-[1px] h-[20px] border border-[var(--border-light-color)]"></div>
              <p className="text-sm text-[var(--primary-color)]">Rs. 80,000</p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[40px] flex items-center gap-5 p-3 bg-[rgba(255,255,255,0.1)] rounded border border-[var(--border-light-color)]">
          <div className="w-[50px]">
            <img
              src="https://images.pexels.com/photos/18489099/pexels-photo-18489099/free-photo-of-man-in-white-shirt-with-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height={35}
              width={35}
              style={{ height: "35px", width: "35px" }}
              className="rounded object-cover"
              alt=""
            />
          </div>
          <div className="font-poppins flex justify-between w-full items-center">
            <div className=" flex items-center gap-5 ">
              <div className="w-[120px]">
                <div className="text-xs text-[var(--text-light-color)]">
                  Gaurab sunar
                </div>
                <div className="text-[.6rem] text-[var(--text-light-color)]">
                  Dynamic
                </div>
              </div>
              <div className="text-sm font-poppins font-semibold w-[300px] text-[var(--text-dark-color)]">
                E-Commerce Website
              </div>
            </div>
            <div className="flex items-center gap-5 w-[200px] justify-end">
              <div className="flex items-end gap-1 text-[var(--text-light-color)] hover:cursor-pointer hover:text-[var(--text-darh-color)]">
                <MdDelete className="" />
                <p className="text-xs ">Delete</p>
              </div>
              <div className="w-[1px] h-[20px] border border-[var(--border-light-color)]"></div>
              <p className="text-sm text-[var(--primary-color)]">Rs. 80,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-7 py-5 font-poppins col-span-5 h-full rounded border border-[var(--border-light-color)]">
        <h3 className="text-xl text-[var(--text-dark-color)] font-semibold mb-1">
          Order Summary
        </h3>
        <div className="flex flex-col gap-1 mt-4">
          <div className="text-sm flex justify-between text-[var(--text-light-color)]">
            <div>Subtotal:</div>
            <div>Rs. 1,20,000</div>
          </div>
          <div className="text-sm flex justify-between text-[var(--text-light-color)]">
            <div>Discount:</div>
            <div>10%</div>
          </div>
          <div className="text-sm flex border-dashed justify-between border-y py-3 border-[var(--border-light-color)] mt-3 my-2 text-[var(--text-light-color)]">
            <div className="uppercase">Total:</div>
            <div className="text-[var(--primary-color)] font-semibold text-base">
              Rs. 1,00,000
            </div>
          </div>
        </div>

        <button className="border w-full py-3 hover:bg-[var(--primary-color)] duration-200 font-semibold font-poppins hover:text-[var(--background-color)] border-[var(--primary-color)] text-[var(--primary-color)] mt-4 rounded-sm capitalize text-sm flex items-center justify-center mb-3 gap-[7px] tracking-wide">
          <IoBag className="scale-110 text-base mb-[2px]" />
          Proceed to checkout ( 1 )
        </button>
      </div>
    </div>
  );
};

export default CartContent;
