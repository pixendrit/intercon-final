import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import imgHero from "../../assets/image/l8/png/hero-image.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div className="pb-11 pb-lg-14 pt-25 pt-lg-29 bg-blue position-relative">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col
              sm="10"
              md="9"
              lg="7"
              xl="6"
              data-aos="fade-right"
              data-aos-duration="750"
              data-aos-delay="500"
            >
             
            </Col>
            <Col sm="12" className="mt-3 mt-lg-1">
              <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img className="img-fluid" src={imgHero} alt="" />
              </div>
            </Col>
            <div className="hero-content text-center">
            <p className="gr-text-8 pl-5 pr-5">
            Blini banesën që gjithmonë keni ëndërruar, sepse...
                </p>
                <h1 className="gr-text-3 mb-8 text-narvik">
                  Ne ndërtojmë për të ardhmen tuaj!
                </h1>
              
             
              </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
