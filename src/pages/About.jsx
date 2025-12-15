import React from "react";
import "../css/about.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import about_banner from "../../src/assets/about_img/Group 1000005626.webp";
import about_img1 from "../../src/assets/images/Rectangle 680.webp";
import about_img2 from "../../src/assets/images/Rectangle 684.webp";
import about_img3 from "../../src/assets/images/Rectangle 683.webp";
import about_banner_mob from "../../src/assets/images/Mobile Banner/Group 1000005626.webp";

import constrction_icons from "../../src/assets/about_img/constractionperson_img.png";
import file_img from "../../src/assets/about_img/exportFile_img.png";
import export_global from "../../src/assets/about_img/globalIMg.png";

import CountUp from "react-countup";
import VissionMission from "./VissionMission";
import FaqCom from "./FaqCom";
import Testimonials from "./Testimonials";
import Service_Faqs from "../components/service_faqs/Service_Faqs";
import OurTeam from "../components/contactus/OurTeam";
// import VissionMission from '../Vision_mission/VissionMission';
// import FaqCom from '../FAQ/FaqCom';
// import Testimonials from '../testimonials/Testimonials';

function About() {
  const compoverview = [
    {
      para: "We are a leading structural engineering and design firm delivering reliable, cost-effective, and high-quality services. Our skilled team and modern processes ensure on-time project completion with minimal risk and maximum value. We specialize in structural and architectural design for residential and industrial projects, along with steel detailing, connection design, pre-engineered metal buildings, BIM, and rebar detailing services. All our work complies with OSHA standards, emphasizing both safety and quality. Driven by passion and professionalism, we use advanced software and global standards to deliver outstanding results that our clients trust for their future projects.",
    },
  ];

  // Split the paragraph into two parts by the sentence beginning
  const splitSentence = "Driven by passion and professionalism";

  const paragraphs = compoverview[0].para.split(splitSentence);

  return (
    <>
      <section className="par">
        {/* <img
          src={about_banner}
          class="img-fluid "
          alt="..."
          width={"100%"}
        ></img> */}
        <picture>
          <source media="(max-width: 768px)" srcSet={about_banner_mob} />
          <img
            src={about_banner}
            className="aboutimgs"
            alt="About section image"
          />
        </picture>

        <Container>
          <h3 className="text-center mt-4">
            <b>Company Overview</b>
          </h3>

          <div className="paraAbout">
            <p>{paragraphs[0].trim()}</p>
            <p>{splitSentence + paragraphs[1]}</p>
          </div>
        </Container>

        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
              <img src={about_img1} class="aboutimgs " alt="..."></img>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 back_color_about pb-5 pl-4">
              <div className="heading-row">
                <p className="number_about_page">1.</p>
                <p className="title_card">Environment</p>
              </div>
              <p className="about_card_para">
                Safety is one of the highest priorities within <br></br>{" "}
                Facmaster. <br></br> It is imperative that everyone follows{" "}
                <br></br> the policies and guidelines to ensure their own safety
                and the safety of others around them.<br></br> We are providing
                different We are providing <br></br>different.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 back_color_about1 pb-5 pl-4">
              <div className="heading-row">
                <p className="backcol2_color">2.</p>
                <p className="title_card1">Health & Safety</p>
              </div>
              <p className="about_card_para1">
                Safety is one of the highest priorities within <br></br>{" "}
                Facmaster. <br></br> It is imperative that everyone follows{" "}
                <br></br> the policies and guidelines to ensure their own safety
                and the safety of others around them.<br></br> We are providing
                different We are providing <br></br>different.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
              <img src={about_img2} class="aboutimgs " alt="..."></img>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
              <img src={about_img3} class="aboutimgs " alt="..."></img>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 back_color_about3 pb-3 pl-4">
              <div className="heading-row">
                <p className="backcol3_color">3.</p>
                <p className="title_card3">Integrity</p>
              </div>
              <p className="about_card_para3">
                Safety is one of the highest priorities within <br></br>{" "}
                Facmaster. <br></br> It is imperative that everyone follows{" "}
                <br></br> the policies and guidelines to ensure their own safety
                and the safety of others around them.<br></br> We are providing
                different We are providing <br></br> different.
              </p>
            </div>
          </div>
        </div>

        <section className="abt">
          <Container>
            <div className="background_color_aboutus_name">
              <h3 className="aboutus_name">
                <b>About Us</b>
              </h3>
            </div>
            <Row>
              <Col lg={8} md={8} sm={12} className="mt-4">
                <div className="paraAbout1">
                  <p>
                    We are a trusted name in structural engineering, committed
                    to delivering precise, reliable,and cost-effective
                    solutions.With a skilled team and advanced tools,we ensure
                    quality and on-time project delivery while maintaining
                    transparency and safety.Our expertise spans steel detailing,
                    connection design, BIM,rebar detailing, and pre-engineered
                    metal buildings for residential,industrial, and commercial
                    sectors. Guided by OSHA standards and global codes,we
                    continue to build lasting client relationships through
                    innovation, integrity, and excellence.
                  </p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={12}>
                <div className="engineer-box mb-5 mt-2">
                  <div className="icon">
                    <img
                      src={constrction_icons}
                      alt="Engineer Icon"
                      className="icon-image"
                    />
                  </div>
                  <div className="text-group">
                    <span className="number">
                      <CountUp
                        end={35}
                        duration={6}
                        enableScrollSpy
                        scrollSpyOnce
                      />{" "}
                      +
                    </span>
                    <span className="label">Expert Engineers</span>
                  </div>
                </div>
                <div className="engineer-box mb-5">
                  <div className="icon">
                    <img
                      src={file_img}
                      alt="Project Icon"
                      className="icon-image"
                    />
                  </div>
                  <div className="text-group">
                    <span className="number">
                      <CountUp
                        end={250}
                        duration={6}
                        enableScrollSpy
                        scrollSpyOnce
                      />{" "}
                      +
                    </span>
                    <span className="label">Project Completed</span>
                  </div>
                </div>
                <div className="engineer-box">
                  <div className="icon">
                    <img
                      src={export_global}
                      alt="Clients Icon"
                      className="icon-image"
                    />
                  </div>
                  <div className="text-group">
                    <span className="number">
                      <CountUp
                        end={25}
                        duration={6}
                        enableScrollSpy
                        scrollSpyOnce
                      />{" "}
                      +
                    </span>
                    <span className="label">Global Clients</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      <VissionMission />
      <OurTeam />
      <FaqCom />
      <Testimonials />
    </>
  );
}

export default About;
