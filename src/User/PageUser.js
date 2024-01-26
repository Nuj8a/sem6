import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./common/Navigation/Navigation";
import Home from "./page/Home/Home";
import Footer from "./common/Navigation/Footer";
import Login from "./page/login/page";
import Register from "./page/register/page";
import Shop from "./page/Category/page";
import About from "./page/about-us/page";
import Cart from "./page/cart/page";
import Checkout from "./page/checkout/page";
import EachPage from "./page/detail/page";

const PageUser = () => {
  const Location = useLocation().pathname;
  return (
    <>
      {!Location.includes("/dashboard") && (
        <div className="max-w-[1600px] mx-auto">
          {!Location.includes("/login") && !Location.includes("/register") && (
            <Navigation />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/eachpage" element={<EachPage />} />
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
