import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "./common/Navigation/Navigation";
import Home from "./page/Home/Home";
import Footer from "./common/Navigation/Footer";
import Login from "./page/Login/page";
import Register from "./page/Register/page";
import Shop from "./page/Category/page";
import Products from "./page/Products/page";
import Cart from "./page/cart/page";
import Checkout from "./page/Checkout/page";
import EachPage from "./page/Detail/page";
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
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-us" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/eachpage" element={<EachPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/each/:category/:subcategory/:id"
              element={<EachSite />}
            />
            <Route path="/:category/:subcategory" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PageUser;
