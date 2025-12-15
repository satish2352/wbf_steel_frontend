import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/wbf-Reverse_Logo.png";
import bg from "../../assets/images/Footer.webp"; // Background image

import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../assets/icons/Group.png";
import mailIcon from "../../assets/icons/mail.png";
import axios from "axios";

import { useEffect, useState } from "react";

function Footer() {
  const [contacts, setContacts] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios
      .get("/header-contact/getheaderContacts")
      .then((response) => {
        setContacts(response.data.responseData || []);
      })
      .catch(() => console.error("Failed to fetch contact info"));

    axios
      .get("/social-contact/get-socialcontacts")
      .then((response) => {
        setSocialLinks(response.data.responseData[0] || {});
      })
      .catch(() => console.error("Failed to fetch social media links"));
  }, []);

  return (
    <>
      <footer
        className="footer-section text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container-fluid ">
          <div className="row gy-5 justify-content-between align-items-start">
            {/* ===== LEFT COLUMN ===== */}
            <div className="col-lg-4 col-md-4 text-md-start text-center">
              <h4 className="footer-title mb-3">CONTACT COMPANY</h4>
              <ul className="footer-contact list-unstyled">
                <li className="footer-phone-stack">
                  <div className="phone-icon">
                    <i className="bi bi-telephone-fill text-warning fs-5"></i>
                  </div>

                  <div className="phone-numbers">
                    <a
                      href={`tel:${contacts[0]?.phone1}`}
                      className="text-white text-decoration-none"
                    >
                      {contacts[0]?.phone1}
                    </a> /

                    {contacts[0]?.phone2 && (
                      <a
                        href={`tel:${contacts[0]?.phone2}`}
                        className="text-white text-decoration-none"
                      >
                        {contacts[0]?.phone2}
                      </a>
                    )}
                  </div>
                </li>

                {/* EMAIL */}
                <li>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-white text-decoration-none d-flex align-items-center"
                  >
                    <i className="bi bi-envelope-fill me-2 text-warning fs-5"></i>
                    {socialLinks.email}
                  </a>
                </li>

                {/* ADDRESS */}
                <li>
                  <a
                    href="https://www.google.com/maps?q=1309+Coffeen+Ave+1200+Sheridan+WY+82801"
                    className="text-white text-decoration-none d-flex align-items-start"
                    target="_blank"
                  >
                    <i className="bi bi-geo-alt-fill me-2 text-warning fs-5 mt-1"></i>
                    1309 Coffeen Ave #1200 <br /> Sheridan, WY 82801, USA
                  </a>
                </li>

                {/* WEBSITE */}
                <li>
                  <a
                    href="https://www.wbfsteel.com"
                    className="text-white text-decoration-none d-flex align-items-center"
                    target="_blank"
                  >
                    <i className="bi bi-globe2 me-2 text-warning fs-5"></i>
                    https://www.wbfsteel.com
                  </a>
                </li>
              </ul>
            </div>

            {/* ===== MIDDLE COLUMN ===== */}
            <div className="col-lg-3 col-md-4 text-md-start text-center footer-follow-col">
              <h4 className="footer-title mb-3 men">MENU</h4>
              <ul className="footer-menu">
                <li>
                  <NavLink to="/" className="menu-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About" className="menu-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Services" className="menu-link">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Blog" className="menu-link">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Careers" className="menu-link">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ContactUs" className="menu-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* ===== RIGHT COLUMN ===== */}
            <div className="col-lg-4 col-md-4 text-lg-start ">
              <img src={logo} alt="WBF Logo" className="footer-logo mb-3" />

              <p className="footer-desc">
                We have been increasing current standards in the matter of
                transmission impeccable building structures.
              </p>

              <h5 className="footer-follow-title fw-bold mt-4 mb-3">
                FOLLOW <span>US</span>
              </h5>
              <div className="footer-social justify-content-lg-start justify-content-center">
                <a href={socialLinks.facebook} target="_blank">
                  <img src={facebookIcon} alt="Facebook" />
                </a>

                <a href={socialLinks.instagram} target="_blank">
                  <img src={instaIcon} alt="Instagram" />
                </a>

                <a
                  href={`https://wa.me/${socialLinks.whatsapp}`}
                  target="_blank"
                >
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>

                <a href={socialLinks.linkedin} target="_blank">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>

                <a href={`mailto:${socialLinks.email}`} target="_blank">
                  <img src={mailIcon} alt="Email" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== COPYRIGHT ===== */}
        <div className="footer-bottom text-center py-3">
          © 2025 Copyright:{" "}
          <a
            href="https://www.sumagoinfotech.com/"
            className="fw-semibold text-white text-decoration-none"
          >
            Made With Passion by Sumago Infotech
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
