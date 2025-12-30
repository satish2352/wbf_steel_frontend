import React from "react";
import "./BlogBanner.css";
import bannerImg from "../../assets/about_img/Group 1000005902.png";
import BlogImgMobile from "../../assets/about_img/Group 1000005909.png";

const BlogBanner = () => {
  return (
    <section className="wbf-banner">
    <picture>
         <source media="(max-width: 678px)" srcSet={BlogImgMobile} />
      <img src={bannerImg} alt="Blog Banner" />
        </picture>
    </section>
   
  );
};

export default BlogBanner;
