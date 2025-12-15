import React from "react";
import "./WorkPlatforms.css";
import draftsight from "../../assets/images/draft.png";
import autocad from "../../assets/images/auto.png";
import tekla from "../../assets/images/tekla.png";
import rebars from "../../assets/images/rebar.png";
import sds from "../../assets/images/Sds.png";

const WorkPlatforms = () => {
  return (
    <section className="work-platform-section">
       <div className="container">
      <div className="work-platform-box">
        <h2 className="work-platform-title">WORK PLATFORM</h2>

        <div className="work-platform-grid">
          {/* LEFT: LOGOS */}
          <div className="left-logos">
            <div className="logo-grid">
              <img src={draftsight} alt="DraftSight" />
              <img src={autocad} alt="AutoCAD" />

              <img src={tekla} alt="Tekla" />
              <img src={rebars} alt="RebarCAD" />

              <img className="single-logo" src={sds} alt="SDS/2" />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="divider"></div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="right-text">
            <p>
              Steel access/mezzanine <br></br> structures; designed per <br></br>AISC/IS codes;
              includes <br></br> stairs, rails, grating, <br></br>connections.
            </p>

            <p>
              <strong>Tools:</strong> Tekla, SDS/2, <br></br>AutoCAD. 
            </p>
            
          
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://wbfsteel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                wbfsteel.com
              </a>
            </p>
          </div>
          </div>
          </div>
          </div>
          
    
    </section>
  );
};

export default WorkPlatforms;
