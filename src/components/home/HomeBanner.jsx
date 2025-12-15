// HomeBanner.jsx
import React, { useState, useEffect } from "react";
import "./HomeBanner.css";

import desktopBanner from "../../assets/images/Blog/Group 1000005614[1].png";
import mobileBanner from "../../assets/images/Blog/Group 1000005666.webp";

function HomeBanner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerImage = windowWidth <= 576 ? mobileBanner : desktopBanner;

  return (
    <section
      className="home-banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* You can add content here */}
    </section>
  );
}

export default HomeBanner;
