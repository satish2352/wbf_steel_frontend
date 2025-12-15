import React from "react";
import "./ChooseUs.css";

import icon1 from "../../assets/icons/Vector (3).png";
import icon2 from "../../assets/icons/Vector (4).png";
import icon3 from "../../assets/icons/ic_twotone-support-agent.png";


function WhyChooseUs() {
  return (
    <section className="why-section ">
      <div className="container">
        <div className="row text-center justify-content-center align-items-start">
          {/* COLUMN 1 */}
          <div className="col-md-4 col-sm-12 why-item">
            <div className="icon mb-3">
               <img src={icon1} alt="Professional Team" className="why-icon" />
            </div>
            <h4 className="why-title">PROFESSIONAL TEAM</h4>
            <p className="why-text">
              Our Structural, PEMB/PEB, REBAR and detailing teams make for an
              endearing combination. We have team of 13+ experienced detailer
              who are knowledgeable in AISC, BS, MBMA, ASD, AISI, AWS, MBCI,
              LRFD, CRSI and ACI codes.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="col-md-4 col-sm-12 why-item">
            <div className="icon mb-3">
               <img src={icon3} alt="Smart Work" className="why-icon" />
            </div>
            <h4 className="why-title">GREAT SUPPORT</h4>
            <p className="why-text">
              Our support and advice team always helps customers wholeheartedly
              and answers all customers' questions.
            </p>
          </div>

          {/* COLUMN 3*/}
          <div className="col-md-4 col-sm-12 why-item">
            <div className="icon mb-3">
              <i className="bi bi-house-fill"></i>
            </div>
            <h4 className="why-title">SMART WORK</h4>
            <p className="why-text">
              We never negotiate on our quality of design and detailing
              regardless of how huge or small the size of the Project. We use
              leading-edge 3D-Tool software for Structural and Miscellaneous
              detailing, just as AutoCAD, BIM coordination, Blue Beam, and MS
              Office for portrayals and documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
