import React from "react";
import "../css/services.css";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import thum_icon from "../../src/assets/services/image 514.webp";
import services_card2 from "../../src/assets/services/image 515.webp";
import service_card3 from "../../src/assets/services/image 516.webp";
import Services_cards from "../../src/components/service_page_cards_data/Services_cards";
import Start_work_together from "../../src/components/Work Together Com/Start_work_together";
import OurExperience from "../../src/components/our experience/OurExperience";
import Service_Faqs from "../../src/components/service_faqs/Service_Faqs";
import services_banner from "../../src/assets/images/Servicepage/Group 1000005630.webp";
import WorkPlatforms from "../components/home/WorkPlatforms";
import services_banner_mobile from "../../src/assets/images/Mobile Banner/Group 1000005629.webp";

function Services() {
  return (
    <>
      <picture>
        <source media="(max-width: 767px)" srcSet={services_banner_mobile} />
        <img
          src={services_banner}
          className="service-img"
          alt="Services Banner"
          width="100%"
        />
      </picture>

      <p className="service_heading_name">Why Choose Us</p>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-center align-items-center">
              <Card className="rounded-circle circle_card_styling">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={thum_icon}
                    class="img-fluid img2_from_service"
                    alt="..."
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="mt-1 text-center rounded_card1_data">
              Quality brands and Work
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-center align-items-center">
              <Card className="rounded-circle circle_card_styling">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Image
                    src={services_card2}
                    fluid
                    className="img2_from_service"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="mt-1 text-center rounded_card1_data">
              Fully licensed and insured
            </div>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className="d-flex justify-content-center align-items-center ">
              <Card className="rounded-circle circle_card_styling">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Image
                    src={service_card3}
                    fluid
                    className="img2_from_service"
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="mt-1 text-center rounded_card1_data pl-5">
              100% service warranty
            </div>
          </Col>
        </Row>
      </Container>
      <Services_cards />
      <Start_work_together />
      <OurExperience />

      <WorkPlatforms />
    </>
  );
}

export default Services;
