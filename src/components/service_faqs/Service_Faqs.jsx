import React from "react";
import "../../css/service_faq.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";


import CountUp from "react-countup";
import { Link } from "react-router-dom";

function Service_Faqs() {
  return (
    <>
      <section className="servicefaq-section">

        {/* CountUp Section */}
        <div className="background_color_faq mt-5 mb-5">
          <div className="container-fluid pb-5">
            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12 pl-5 pe-5 d-flex flex-column align-items-center faq-column">
                <p className="count">
                  <CountUp end={10} duration={10} enableScrollSpy scrollSpyOnce suffix="+" />
                </p>
                <p className="title_colum">Years of <span className="tablet-break">Expertise</span></p>
                <p className="title_para">A decade of excellence in steel detailing, connection design, and BIM solutions</p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 pl-5 pe-5 d-flex flex-column align-items-center faq-column">
                <p className="count">
                  <CountUp end={1500} duration={10} enableScrollSpy scrollSpyOnce suffix="+" />
                </p>
                <p className="title_colum">Successful Projects</p>
                <p className="title_para">Delivered with unmatched precision, optimizing fabrication and installation</p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 pl-5 pe-5 d-flex flex-column align-items-center faq-column">
                <p className="count">
                  <CountUp end={1500} duration={10} enableScrollSpy scrollSpyOnce suffix="+" />
                </p>
                <p className="title_colum">Tons of Steel Detailed Monthly</p>
                <p className="title_para">Ensuring efficiency in fabrication and erection processes</p>
              </div>

            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="container-fluid">
          <div className="row">

            {/* Left FAQ Content */}
            <div className="col-sm-12 col-lg-6 col-md-6">
              <div className="faq_backimg_service">
                <p className="service_FAQ pl-3">FAQ's</p>

                <p className="faq_section_para">
                  Have questions about our steel detailing services? Explore our FAQs for quick answers on workflows, software expertise, and industry standards. For further assistance, reach out to us.
                </p>

                <div className="contactUs_container">
                  <Link to="/ContactUs">
                    <p className="contactUs_name">
                      <span className="text">Contact Us</span>
                      <FaExternalLinkAlt className="link-icons ml-2" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right FAQ Accordion */}
            <div className="col-sm-12 col-lg-6 col-md-6">
              <div className="accordion" id="faqAccordion">

                {/* FAQ 1 */}
                <button
                  className="btn backbtn_color"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <span className="icon_box"><SlArrowDown className="icon_faq" /></span>
                  What types of steel detailing services does WBF Steel provide?
                </button>

                <div id="collapseOne" className="collapse show" data-parent="#faqAccordion">
                  <div className="card servicefaq card-body">
                    We offer structural steel detailing, connection design, miscellaneous steel detailing (stairs, railings, ladders, etc.), BIM & 3D modeling, material take-off & estimation, CNC & fabrication support, and quality control & compliance services.
                  </div>
                </div>

                {/* FAQ 2 */}
                <button className="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseTwo">
                  <span className="icon_box"><SlArrowDown className="icon_faq" /></span>
                  Do you follow international standards for steel detailing?
                </button>

                <div id="collapseTwo" className="collapse" data-parent="#faqAccordion">
                  <div className="card servicefaq card-body">
                    Yes, we follow AISC, NISD, AWS, CISC, BS, EN standards ensuring global compliance.
                  </div>
                </div>

                {/* FAQ 3 */}
                <button className="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseThree">
                  <span className="icon_box"><SlArrowDown className="icon_faq" /></span>
                  Can you handle large-scale and complex projects?
                </button>

                <div id="collapseThree" className="collapse" data-parent="#faqAccordion">
                  <div className="card servicefaq card-body">
                    Yes, we specialize in handling major industrial, commercial, and infrastructure steel projects.
                  </div>
                </div>

                {/* FAQ 4 */}
                <button className="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseFour">
                  <span className="icon_box"><SlArrowDown className="icon_faq" /></span>
                  How does your BIM & 3D modeling service help in construction?
                </button>

                <div id="collapseFour" className="collapse" data-parent="#faqAccordion">
                  <div className="card servicefaq card-body">
                    BIM helps reduce clashes, improves accuracy, reduces fabrication delays, and enhances project coordination.
                  </div>
                </div>

                {/* FAQ 5 */}
                <button className="btn backbtn_color collapsed mt-3" type="button" data-toggle="collapse" data-target="#collapseFive">
                  <span className="icon_box"><SlArrowDown className="icon_faq" /></span>
                  Can you work as per US and Canada time zones?
                </button>

                <div id="collapseFive" className="collapse" data-parent="#faqAccordion">
                  <div className="card servicefaq card-body">
                    Yes, our team operates flexibly to match US, Canada, UK, and Gulf time zones.
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default Service_Faqs;
