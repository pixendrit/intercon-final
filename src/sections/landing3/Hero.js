import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import imgHeroBg from "../../assets/image/l8/png/hero-image.png";


const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <div
        className="co-working bg-image bg-overlay overlay-2 pb-13 pt-24 pt-lg-32 pb-lg-28 d-lg-flex align-items-center lg:min-h-vh-100"
        css={`
          background-image: url(${imgHeroBg});
        `}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg="10" xl="9" data-aos="fade-up" data-aos-duration="1000">
              <div className="hero-content section-title dark-mode-texts text-center">
                <h4 className="pre-title text-green gr-text-12 text-uppercase mb-10">
                Blini banesën që gjithmonë keni ëndërruar, sepse...
                </h4>
                <h1 className="gr-text-2 font-weight-bold mb-12">
                Ne ndërtojmë për të ardhmen tuaj!
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
