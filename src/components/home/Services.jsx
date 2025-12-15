import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

import icon1 from "../../assets/icons/image 141.png";  // your image
import icon2 from "../../assets/icons/image 142.png";         // your image


function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="row justify-content-center">
          {/* Service Card 1  */}
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="service-card yellow-card shadow-sm">
              <div className="service-icon">
                <img src={icon1} alt="Structural Steel" className="service-img-icon" />

              </div>
              <h4 className="service-title">
                Structural & Miscellaneous Steel
              </h4>
              <p className="service-text">
                Structural steel is utilized in construction or building
                projects. Structural steel is considered as steel shaped for use
                in development of projects.
              </p>
               <Link to="/services" className="service-link">
                READ MORE  <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </div>
          </div>

          {/*  Service Card 2 */}
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="service-card blue-card shadow-sm">
              <div className="service-icon">
                <img src={icon2} alt="PEB" className="service-img-icon" />

              </div>
              <h4 className="service-title">Pre-Engineered Metal Building</h4>
              <p className="service-text">
                With regards to Pre-Engineered Metal Buildings and detailing, we
                work on projects that consist of both simple and highly compound
                ones.
              </p>
              <Link to="/services" className="service-link">
                READ MORE  <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
