import React from "react";
import "../../css/startworkTogether.css";

import facebookIcon from "../../../src/assets/icons/logos_facebook.png";
import instaIcon from "../../../src/assets/icons/insta.png";
import whatsappIcon from "../../../src/assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../../src/assets/icons/Group.png";
import mailIcon from "../../../src/assets/icons/mail.png";
import serviceLine from "../../imges/services/veritical_service_line.png";

import arra from "../../../src/assets/services/Arrow_8.png";

import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
function Start_work_together() {
  return (
    <>
    
      <div className="container">
        <section className="start">
        <div className="startwork-card-outer-border pt-5 ">
          <div className="row align-items-center  flex-column flex-md-row">
            {/* LEFT COLUMN */}
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <p className="startwork-letstart_work_heading">
                Let’s Start Work Together
              </p>
              <div className="startwork-custom-line"></div>
              <p className="startwork-para-work">
                Please feel free to contact us.<br></br> We will get back to you
                with 1-2 business days.
                <br />
                Or just call us now.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6 col-md-6 col-12 mb-5">
              <p className="startwork-letstart_work_heading join">Join Us</p>
              <div className="startwork-social-icons d-flex justify-content-md-start justify-content-center gap-2 ">
                <a href="#">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="#">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src={mailIcon} alt="Mail" />
                </a>
              </div>

              <p className="startwork-get-quote pl-2">
                <Link to="/contactus">
                  GET A QUOTE{" "}
                  <HiOutlineArrowNarrowRight className="startwork-get_quote_icon" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        </section>
      </div>
      
    </>
  );
}

export default Start_work_together;
