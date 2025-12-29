// HomeBanner.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeBanner.css";

function HomeBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  const [homeSlider, setHomeSlider] = useState([]);

  const baseURL = axios.defaults.baseURL || "";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios
      .get("/homeslider/get-homeslider")
      .then((response) => {
        setHomeSlider(response.data.responseData || []);
      })
      .catch((error) => {
        console.error("Error fetching home banner:", error);
      });
  }, []);

  const selectedBanner = homeSlider.find(
    (slide) =>
      slide.isActive &&
      (isMobile ? slide.view === "Mobile" : slide.view === "Desktop")
  );

  const bannerImage = selectedBanner?.img
    ? selectedBanner.img.startsWith("http")
      ? selectedBanner.img
      : `${baseURL.replace(/\/$/, "")}/${selectedBanner.img.replace(/^\//, "")}`
    : "";

  return (
    <section className="home-banner">
      {bannerImage && (
        <img
          src={bannerImage}
          alt="Home Banner"
          className="home-banner-img"
        />
      )}
    </section>
  );
}

export default HomeBanner;
