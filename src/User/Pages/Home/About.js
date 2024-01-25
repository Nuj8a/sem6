import React, { useEffect, useState } from "react";
import AboutContent from "../About/AboutContent";

const About = ({ heading }) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="min-h-[500px] bg-[var(--background-color)] pb-5 w-full">
        <AboutContent position={scrollY} heading={heading} />
      </div>
    </div>
  );
};

export default About;
