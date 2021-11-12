import React from "react";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import serviceImg from "../../../images/service-img.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Transmission",
      icon: <i className="fas fa-car-battery"></i>,
      description:
        "Car Repair & Services 7 Days Service Warranty. On Time Work Completion Skilled & Reliable.",
    },
    {
      id: 2,
      name: "Oil Change",
      icon: <i className="fas fa-car-side"></i>,
      description:
        "Car Repair & Services 7 Days Service Warranty. On Time Work Completion Skilled & Reliable.",
    },
    {
      id: 3,
      name: "Air Conditioning",
      icon: <i className="fas fa-fan"></i>,
      description:
        "Car Repair & Services 7 Days Service Warranty. On Time Work Completion Skilled & Reliable.",
    },
    {
      id: 4,
      name: "Auto Electric",
      icon: <i className="fas fa-bolt"></i>,
      description:
        "Car Repair & Services · 7 Days Service Warranty · On Time Work Completion Skilled & Reliable.",
    },
  ];

  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center px-2">
          <Col xs={12} md={6} lg={6}>
            <div className="service-intro">
              <h2 className="fw-bold fs-1">Our Services</h2>
              <p>
                Find Car Service In Usa. Unlimited Access. 100% Secure. Always
                Facts. Privacy Friendly. The Best Resources.
              </p>
            </div>
            <Row xs={2} md={2} lg={2}>
              {services.map((service) => (
                <Col key={service.id}>
                  <div className="service-card">
                    <div style={{ fontSize: "33px", color: "#3498db" }}>
                      {service.icon}
                    </div>
                    <div>
                      <h5 style={{ color: "#34495e", fontWeight: "bold" }}>
                        {service.name}
                      </h5>
                      <p className="text-muted">{service.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="service-image">
              <img className="image" src={serviceImg} alt="service" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
