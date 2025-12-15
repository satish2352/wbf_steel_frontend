import React from "react";
import { Link } from "react-router-dom";
import "./HomeAbout.css";
import aboutImg from "../../assets/images/image 136.png";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about-container">
        <div className="home-about-text">
          <h2>Welcome To WBF Steel</h2>
          <p>
            We deliver reliable, cost-effective, and high-quality building
            solutions that add value and reduce risk. With expert teams and
            modern methods, we ensure timely, transparent project delivery. Our
            support and advice team always helps customers wholeheartedly and
            answers all customers' questions.
          </p>
          <Link
            to="/AboutUs"
            className="learn-more"
            onClick={(e) => {
              e.currentTarget.classList.add("clicked");
              setTimeout(() => {
                e.currentTarget.classList.remove("clicked");
              }, 400);
            }}
          >
            LEARN MORE{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </Link>
        </div>
        <div className="home-about-image">
          <img src={aboutImg} alt="About WBF Steel" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
