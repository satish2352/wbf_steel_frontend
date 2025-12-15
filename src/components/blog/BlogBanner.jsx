import React from "react";
import "./BlogBanner.css";
import bannerImg from "../../assets/images/Banner.jpg"; // adjust path if needed

const BlogBanner = () => {
  return (
    <section
      className="wbf-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
      aria-hidden="true"
    />
  );
};

export default BlogBanner;
