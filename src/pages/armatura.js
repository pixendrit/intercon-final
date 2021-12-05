import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import imgHeroBg from "../assets/image/l8/png/cover-3.png";
import PageWrapper from "../components/PageWrapper";
import Content2 from "../sections/landing2/Content2";

const Armatura = () => {

  return (
    <>
     <PageWrapper
        headerConfig={{
          theme: "dark",
          align: "center",
          isFluid: true,
          button: "cta", // cta, account, null
        }}
        footerConfig={{
          theme: "dark",
           style: "style1", //style1, style2
        }}
      >
      {/* <!-- Hero Area --> */}
      <div
        className="co-working bg-image bg-overlay overlay-2 pb-13 pt-24 pt-lg-32 pb-lg-28 d-lg-flex align-items-center lg:min-h-vh-100"
        css={`
          background-image: url(${imgHeroBg});
        `}
      >
        <Container>    
        <Content2 />
        <Row className="align-items-center justify-content-center mt-10 pt-10 pb-10 bg-transparent">
            <Col lg="10">
              <div
                className="cta-text d-flex flex-column flex-sm-row align-items-center justify-content-center"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 className="title gr-text-5 mb-6 mb-sm-0 mr-sm-9 ">
                  Kthehu te materialet
                </h2>
                <div
                  className="cta-btn"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  <Link to="/materialet" className="btn btn-white bg-white gr-hover-y">
                  <i class="fas fa-arrow-left"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    
      </div>
      </PageWrapper>
    </>
  );
};

export default Armatura;