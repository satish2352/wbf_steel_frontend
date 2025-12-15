import React from "react";
import "./expertise.css";

import draftsight from "../../assets/images/draft.png";
import autocad from "../../assets/images/auto.png";
import tekla from "../../assets/images/tekla.png";
import rebard from "../../assets/images/rebar.png";
import sds2 from "../../assets/images/Sds.png";

const logos = [draftsight, autocad, tekla, rebard, sds2];

function ExpertiseSection() {
  return (
    <div className="expertise-section">
      <h2 className="expertise-title">Our Expertise Lies In</h2>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          {/* Duplicate logos twice for seamless scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="scroll-item" key={index}>
              <img src={logo} alt="brand logo" className="brand-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpertiseSection;
