import React from "react";
import "./BlogBanner.css";
import bannerImg from "../../assets/about_img/Group 1000005669.png";

const BlogBanner = () => {
  return (
    <section className="wbf-banner">
      <img src={bannerImg} alt="Blog Banner" />
    </section>
  );
};

export default BlogBanner;
