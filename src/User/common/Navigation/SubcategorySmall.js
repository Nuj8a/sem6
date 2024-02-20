import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubcategorySmall = ({ category, subcategories, urlMaker }) => {
  const location = useLocation().pathname;

  return (
    <div className="absolute top-9 z-50 hidden group-hover:block border border-black/10 rounded bg-gray-100 !py-1">
      <div radius="none">
        <ul>
          {subcategories.map((subcategory, index) => {
            return (
              <li key={index} className="flex justify-start w-full">
                <Link
                  className={`text-nowrap py-2 text-sm px-3 w-full ${location.toLocaleLowerCase().endsWith(urlMaker(subcategory.subCategoryName)) ? "bg-slate-300" : ""}`}
                  to={`/${urlMaker(category)}/${urlMaker(subcategory.subCategoryName)}`}
                >
                  {subcategory.subCategoryName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SubcategorySmall;
