import { Card, Image } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const urlMaker = (name) => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

const SubcategorySmall = ({ category, subcategories }) => {
  return (
    <div>
      <Card
        radius="none"
        className={`absolute !rounded-sm !p-2 !m-0 top-9 z-50 hidden group-hover:block navcard`}
      >
        <ul className="flex flex-col">
          {subcategories.map((subcategory, index) => (
            <li key={index}>
              <Link
                to={`/${urlMaker(category)}/${urlMaker(subcategory.subCategoryName)}`}
              >
                {subcategory.subCategoryName}
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default SubcategorySmall;
