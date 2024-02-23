"use client";
import React, { useState, useMemo, useContext } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Image,
} from "@nextui-org/react";
import { DeleteIcon } from "../../../Dashboard/common/components/Tables/Icons/DeleteIcon";
import FormatRS from "../../../libs/FormatRS";
import ProductContext from "../../../context/productContext/ProductContext";

const columns = [
  { name: "PRODUCT NAME ", uid: "productname", sortable: true },
  { name: "PRODUCT PRICE", uid: "productprice", sortable: true },
  { name: "PRODUCT COLOR", uid: "color" },
  { name: "ADD PRODUCT", uid: "addrem" },
  { name: "ACTIONS", uid: "actions" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "productname",
  "productprice",
  "color",
  "addrem",
  "actions",
];

export default function TablePage({ cartData }) {
  const { setOrderData } = useContext(ProductContext);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "age",
    direction: "ascending",
  });

  let finalpriceData = (price, discount) => {
    return FormatRS(price - Math.round((price * discount) / 100));
  };

  const headerColumns = useMemo(() => {
    return columns.filter((column) =>
      INITIAL_VISIBLE_COLUMNS.includes(column.uid)
    );
  }, []);

  const sortedItems = useMemo(() => {
    return [...cartData].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [cartData, sortDescriptor]);

  const decreaseQuantity = (data) => {
    const updatedOrderData = cartData.map((item) => {
      if (item.productId === data.productId) {
        const newQuantity = Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setOrderData(updatedOrderData);
  };

  const increaseQuantity = (data) => {
    const updatedOrderData = cartData.map((item) => {
      if (item.productId === data.productId) {
        const newQuantity = Math.min(
          item.quantity + 1,
          item.product.maxQuantity
        ); // Ensure quantity doesn't exceed max quantity
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setOrderData(updatedOrderData);
  };

  return (
    <Table
      radius="sm"
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      classNames={{
        wrapper: "max-h-[500px]",
      }}
      sortDescriptor={sortDescriptor}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader
        columns={headerColumns}
        radius="sm"
        className="!top-0 !absolute"
      >
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Cart Data Found"} items={sortedItems}>
        {sortedItems.map((e, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                <div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <Image
                        src={e?.product?.image[0]}
                        alt={e?.product?.title}
                        height={40}
                        width={40}
                        className="w-[40px] border h-[40px] rounded shadow"
                      />
                    </div>
                    <div className="flex flex-col font-poppins text-sm">
                      <div className="capitalize font-semibold line-clamp-1">
                        {e?.product?.title}
                      </div>
                      <div
                        className="line-clamp-1 font-poppins text-xs"
                        dangerouslySetInnerHTML={{
                          __html: e?.product?.description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex font-poppins flex-col">
                  {finalpriceData(
                    e?.product?.price || 1,
                    e?.product?.discount || 1
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col capitalize">{e?.pColor}</div>
              </TableCell>
              <TableCell>
                <div className="font-poppins flex w-[90px] border shadow">
                  <div
                    className="w-1/3 text-center py-[7px] duration-100 hover:bg-gray-200 cursor-pointer font-semibold scale-110 select-none"
                    onClick={() => decreaseQuantity(e)}
                  >
                    -
                  </div>
                  <div className="w-1/3 text-center py-[7px] border-x">
                    {e.quantity}
                  </div>
                  <div
                    className="w-1/3 text-center py-[7px] duration-100 hover:bg-gray-200 cursor-pointer select-none"
                    onClick={() => increaseQuantity(e)}
                  >
                    +
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center max-w-[45%] justify-center gap-2">
                  <Tooltip color="danger" content="Delete Product">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
