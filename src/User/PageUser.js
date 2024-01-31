import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./common/Navigation/Navigation";
import Home from "./page/Home/Home";
import Footer from "./common/Navigation/Footer";
import Login from "./page/Login/page";
import Register from "./page/Register/page";
import Products from "./page/Products/page";
import Cart from "./page/Cart/page";
import Checkout from "./page/Checkout/page";
import EachSite from "./page/EachSite/EachSite";
import Contact from "./page/Contact/Contact";

const PageUser = () => {
  const Location = useLocation().pathname;
  return (
    <>
      {!Location.includes("/dashboard") && (
        <div className="max-w-[1600px] mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/each/:category/:subcategory/:id"
              element={<EachSite />}
            />
            <Route path="/:category/:subcategory" element={<Products />} />
            <Route path="/:category" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageUser;
