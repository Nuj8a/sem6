import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./common/Navigation/Navigation";
import Home from "./page/Home/Home";
import Footer from "./common/Navigation/Footer";
import Login from "./page/login/page";
import Register from "./page/register/page";

const PageUser = () => {
  const Location = useLocation().pathname;
  return (
    <>
      {!Location.includes("/dashboard") && (
        <div className="max-w-[1400px] mx-auto">
          {!Location.includes("/login") && !Location.includes("/register") && (
            <Navigation />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {!Location.includes("/login") && !Location.includes("/register") && (
            <Footer />
          )}
        </div>
      )}
    </>
  );
};

export default PageUser;
