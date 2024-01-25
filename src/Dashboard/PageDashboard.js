import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/dashboard/Dashboard";
import Category from "./Pages/Lists/category/Category";
import TopNav from "./common/Navigation/TopNav";

const PageDashboard = ({ setProgress }) => {
  const [hamClick, setHamClick] = useState(false);
  const Location = useLocation().pathname;
  return (
    <>
      {Location.includes("/dashboard") && (
        <>
          <TopNav setHamClick={setHamClick} hamClick={hamClick} />
          <div
            className={`${
              hamClick ? "ml-[50px]" : "ml-[180px]"
            } duration-200 py-3 px-5 bg-white !text-black`}
          >
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/category"
                element={<Category setProgress={setProgress} />}
              />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default PageDashboard;
