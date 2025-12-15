import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          title="WBF Steel Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.783072893254!2d-106.97195392347545!3d44.80867697107071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5336fbef7a9dbd61%3A0x6b0bf1d4c8768e12!2s1309%20Coffeen%20Ave%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1709988000000!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
