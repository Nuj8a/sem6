import React, { useEffect } from "react";
import Hero from "./HeroSection/Hero";
import Slogan from "./Slogan";
import Services from "../../Common/Page/Services";
import Products from "./Products";
import Features from "../../Common/Cards/Features";
import About from "./About";

const Home = ({ setColorChange, colorChange }) => {
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
    <div className="px-3">
      <Hero setColorChange={setColorChange} colorChange={colorChange} />
      <Slogan />
      <Services />
      <Products heading={"New Arrivals"} />
      {/* <Products heading={"Personalized Picks"} /> */}
      <Features />
      <Products heading={"Bestsellers"} />
      <About heading={"About web-Upaya"} />
      <Products heading={"Similar Items"} />
    </div>
  );
};

export default Home;
