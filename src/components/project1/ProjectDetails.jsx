import React, { useState } from "react";
import "./ProjectDetails.css";


import Img1 from "../../assets/images/pp1.jpg";
import Img2 from "../../assets/images/pp2.jpg";
import Img3 from "../../assets/images/pp3.jpg";
import ImgMain from "../../assets/images/pp4.jpg";

function ProjectDetails() {
  const [images] = useState([Img1, Img2, Img3]);
  const [mainImage, setMainImage] = useState(ImgMain);

  return (
    <section className="project-details">
        <div className="white-box">
      <div className="project-container">
        {/* Left Column - Image List */}
        <div className="image-list">
          <button className="arrow-btn">▲</button>
          <div className="image-thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
                className={mainImage === img ? "active" : ""}
              />
            ))}
          </div>
          <button className="arrow-btn">▼</button>
        </div>

        {/* Middle Column - Main Image */}
        <div className="main-image-section">
          <h2 className="project-title">Commercial Building, <br></br>GA USA</h2>
          <img src={mainImage} alt="Main Project" className="main-image" />
        </div>

        {/* Right Column - Info Box */}
        <div className="info-box">
          <p>
            Located in Georgia, USA, WBF Steel Company specializes in
            commercial building projects. The company provides high-quality
            structural steel fabrication, design, and erection services for
            industrial and commercial constructions. Known for durability,
            precision, and timely project delivery.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
