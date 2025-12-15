import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "../../css/service_card.css";

import service_img1 from "../../../src/assets/images/Servicepage/Rectangle 4810.webp";
import service_img2 from "../../../src/assets/images/Servicepage/Rectangle 4808.webp";

function Services_cards() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("infrastructure/get-infrastructure")
      .then((res) => {
        const fetchedServices = res.data?.data || res.data?.responseData || [];

        if (fetchedServices.length > 0) {
          setServices(fetchedServices);
        } else {
          setError("No services found.");
        }
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setError("Failed to load services.");
      })
      .finally(() => setLoading(false));
  }, []);

  const safeText = (text, fallback = "No data") => text || fallback;

  return (
    <>
      {loading && (
        <p style={{ textAlign: "center", padding: "50px" }}>
          Loading services...
        </p>
      )}

      {error && (
        <p style={{ textAlign: "center", padding: "50px", color: "red" }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <Container fluid className="mb-5">
          {services.map((service, index) => {
            const imgSrc =
              service.img || (index % 2 === 0 ? service_img1 : service_img2);
            const title = safeText(service.title, "No Title");
            const desc = safeText(service.desc, "No Description");

            const rowClass = `mt-3 service-card-row ${
              index % 2 !== 0 ? "reverse-row" : ""
            }`;

            return (
              <Row className="mt-3 service-card-row" key={service.id || index}>
                {index % 2 === 0 ? (
                  <>
                    {/* Image Left */}
                    <Col md={6} className="p-0 m-0 img-col">
                      <img
                        src={imgSrc}
                        alt={title}
                        className="responsive-image img-fluid"
                      />
                    </Col>

                    {/* Text Right */}
                    <Col
                      md={6}
                      className="d-flex flex-column justify-content-center align-items-start p-3 colum_backcolor text-col"
                    >
                      <p className="service_card1_headingstrature">{title}</p>
                      <p className="service_card_para">{desc}</p>
                    </Col>
                  </>
                ) : (
                  <>
                    {/* Text Left */}
                    <Col
                      md={6}
                      className="d-flex flex-column justify-content-center align-items-start p-3 colum_backcolor text-col"
                    >
                      <p className="service_card1_headingstrature">{title}</p>
                      <p className="service_card_para">{desc}</p>
                    </Col>

                    {/* Image Right */}
                    <Col md={6} className="p-0 m-0 img-col">
                      <img
                        src={imgSrc}
                        alt={title}
                        className="responsive-image img-fluid"
                      />
                    </Col>
                  </>
                )}
              </Row>
            );
          })}
        </Container>
      )}
    </>
  );
}

export default Services_cards;
