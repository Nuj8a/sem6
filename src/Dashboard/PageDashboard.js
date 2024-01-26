import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Pages/dashboard/Dashboard";
import Category from "./Pages/Lists/category/Category";
import Subcategory from "./Pages/Lists/subcategory/Page";
import Banner from "./Pages/Lists/banner/Page";
import Products from "./Pages/Lists/products/Page";
import TopNav from "./common/Navigation/TopNav";
import BarChart from "./Pages/Stats/barchart/Page";
import FilledChart from "./Pages/Stats/filledchart/Page";
import LineChart from "./Pages/Stats/linechart/Page";
import Profile from "./Pages/User/profile/Page";
import Users from "./Pages/User/users/Page";

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
              <Route
                path="/dashboard/subcategory"
                element={<Subcategory setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/banner"
                element={<Banner setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/products"
                element={<Products setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/filledchart"
                element={<FilledChart setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/linechart"
                element={<LineChart setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/barchart"
                element={<BarChart setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/users"
                element={<Users setProgress={setProgress} />}
              />
              <Route
                path="/dashboard/profile"
                element={<Profile setProgress={setProgress} />}
              />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default PageDashboard;
