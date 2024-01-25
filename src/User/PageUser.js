import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./common/Navigation/Navigation";
import Home from "./page/Home/Home";
import Footer from "./common/Navigation/Footer";

const PageUser = () => {
  const Location = useLocation().pathname;
  return (
    <>
      {!Location.includes("/dashboard") && (
        <div className="max-w-[1400px] mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageUser;
