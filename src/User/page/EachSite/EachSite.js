import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../common/Navigation/BreadCrumb";
import EachSiteContent from "./EachSiteContent";
import { Tab, Tabs } from "@nextui-org/react";
import Related from "../../common/page/Related";

const EachSite = () => {
  const data = useParams();
  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollUP();
  }, []);
  return (
    <>
      <div className="min-h-[50vh] flex gap-5 flex-col w-full px-4">
        <div>
          <div className="-mb-3 mt-7 text-black/80 capitalize font-semibold font-poppins text-3xl">
            {data.subcategory} Websites
          </div>
          <div className="flex justify-between items-center">
            <BreadCrumbs
              category={data.category}
              categoryLink={data.category}
              subcategory={data.subcategory}
            />
          </div>
          <EachSiteContent />
        </div>
        <div className="min-h-[400px] mt-3 flex-row">
          <div className="flex items-center justify-start gap-5">
            <div>
              <Tabs radius="none" variant="bordered" aria-label="Tabs variants">
                <Tab key="Description" title="Description" />
                <Tab key="Specification" title="Specification" />
              </Tabs>
            </div>
            <div className="border-t w-full h-[1px] border-[var(--border-dark-color)] border-dashed"></div>
          </div>
        </div>
        <Related />
      </div>
    </>
  );
};

export default EachSite;
