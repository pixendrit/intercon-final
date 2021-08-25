import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgHeroBg from "../../assets/image/l8/png/hero-image.png";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="dark-mode-texts pt-19 pt-lg-29 pb-35  bg-image mt-19 rounded-10 mx-md-6"
        css={`
          background-image: url(${imgHeroBg});
        `}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="text-center">
                <h1 className="gr-text-3 mt-30">
                NE NDËRTOJMË PËR TË ARDHMEN TUAJ!
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
