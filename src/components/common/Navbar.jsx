import "./Navbar.css";
import logo from "../../assets/images/wbfnewlogo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../assets/icons/Group.png";
import mailIcon from "../../assets/icons/mail.png";

function Navbar() {
  const [hideInfobar, setHideInfobar] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // <-- ADDED

  const [contacts, setContacts] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const currentScroll = window.scrollY;

      if (isMobile) {
        if (currentScroll > lastScrollY && currentScroll > 50) {
          setHideInfobar(true);
        } else if (currentScroll < lastScrollY) {
          setHideInfobar(false);
        }
      } else {
        setHideInfobar(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Sticky Header on Scroll ===
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-wrapper");

      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch Contact Info
    axios
      .get("/header-contact/getheaderContacts")
      .then((response) => {
        if (response.data.result) {
          setContacts(response.data.responseData || []);
        } else {
          setError(response.data.message);
        }
      })
      .catch(() => setError("Failed to fetch contact info"));

    // Fetch Social Media Links
    axios
      .get("/social-contact/get-socialcontacts")
      .then((response) => {
        setSocialLinks(response.data.responseData[0] || {});
      })
      .catch((error) => {
        console.error("Error fetching social media links:", error);
      });
  }, []);

  return (
    <>
      <div className="header-wrapper">
        {/* ======== INFOBAR ======== */}
        <div
          className={`top-infobar py-2 ${hideInfobar ? "hide-infobar" : ""}`}
        >
          <div className="container d-flex flex-wrap justify-content-between align-items-center">
            <div className="left-logo text-center text-lg-start">
              <NavLink to="/">
                <img src={logo} alt="WBF Logo" className="infobar-logo" />
              </NavLink>
            </div>

            <div className="right-info d-flex align-items-center justify-content-end flex-wrap">
              <div className="info-item d-flex align-items-center me-4">
                <i className="bi bi-telephone-fill text-warning fs-4 me-2"></i>
                <div>
                  <div className="fw-semibold info-title">
                    {/* Call Us: 248-301-0901 */}
                    Call Us:{" "}
                    <a
                      href={`tel:${contacts[0]?.phone1 || "248-301-0901"}`}
                      className="me-3 d-block d-md-inline"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {contacts[0]?.phone1 || "248-301-0901"}
                    </a>
                  </div>
                  <div className="text-muted info-sub">
                    {/* info@wbfsteel.com */}
                    <a
                      href={`mailto:${
                        socialLinks.email || "info@wbfsteel.com"
                      }`}
                      className="me-3 d-block d-md-inline"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {socialLinks.email || "info@wbfsteel.com"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="info-item d-flex align-items-center me-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <i className="bi bi-geo-alt-fill text-warning fs-4 me-2"></i>
                  <div>
                    <div className="fw-semibold info-title">
                      1309 Coffeen Ave #1200 Sheridan
                    </div>
                    <div className="text-muted info-sub">WY 82801, USA</div>
                  </div>
                </a>
              </div>

              <div className="social-icons d-flex align-items-center">
                <a href={socialLinks.facebook} className="me-2">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href={socialLinks.instagram} className="me-2">
                  <img src={instaIcon} alt="Instagram" />
                </a>
                <a href={`https://wa.me/${socialLinks.whatsapp}`} className="me-2">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href={socialLinks.linkedin} className="me-2">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href={`mailto:${socialLinks.email}`}>
                  <img src={mailIcon} alt="Mail" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ======== NAVBAR ======== */}
        <nav className="navbar navbar-expand-lg navbar-dark main-navbar sticky-top">
          <div className="container d-flex justify-content-between align-items-center">
            <NavLink to="/">
              <img
                src={logo}
                alt="WBF Logo"
                className="navbar-mobile-logo d-lg-none"
              />
            </NavLink>

            {/* === TOGGLER WITH STATE === */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsNavOpen(!isNavOpen)} // <-- ADDED
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* === COLLAPSE DIV WITH SHOW TOGGLE === */}
            <div
              className={`collapse navbar-collapse justify-content-center ${
                isNavOpen ? "show" : ""
              }`}
              id="mainNav"
            >
              <ul className="navbar-nav text-uppercase fw-bold">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    onClick={() => setIsNavOpen(false)} // <-- CLOSE ON CLICK
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    onClick={() => setIsNavOpen(false)}
                  >
                    About Us
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className="nav-link"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/projectproducts1"
                    className="nav-link"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Projects
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/ContactUs"
                    className="nav-link"
                    onClick={() => setIsNavOpen(false)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
