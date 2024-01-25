import React, { useEffect } from "react";
import About from "../Home/About";
import ComputerData from "../../Common/Page/ComputerData";
import ContactList from "../../Common/Page/ContactList";

const AboutUs = ({ setColorChange, colorChange }) => {
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
      <About />
      <ComputerData setColorChange={setColorChange} colorChange={colorChange} />
      <ContactList />
    </div>
  );
};

export default AboutUs;
