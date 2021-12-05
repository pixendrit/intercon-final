import React from "react";
import { Link } from "gatsby";
import imgHeroBg from "../assets/image/l8/png/cover-3.png";
import PageWrapper from "../components/PageWrapper";
import Content4 from "../sections/landing2/Content4";
import { Container, Row, Col } from "react-bootstrap";

const Fasada = () => {

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
        <Content4 />
        <Row className="align-items-center justify-content-center mt-10 pt-10 pb-10 bg-transparent">
            <Col lg="10">
            <p className="gr-text-10 mb-10 text-center"> 
            Disa nga pamjet e fasadës strukturale të kompleksit tonë janë prezentuar përmes disa fotove dhe poashtu mund të eksploroni në detale përmes web-faqes duke shikuar objektin në pamje 360°  

            </p>
            <div
                className="cta-text d-flex flex-column flex-sm-row align-items-center justify-content-center mb-5"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 className="title gr-text-5 mb-6 mb-sm-0 mr-sm-9 ">
                  Shiko objektin 360°
                </h2>
                <div
                  className="cta-btn"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  <a  href="https://intercon3d.netlify.app/" target="_blank" className="btn btn-white bg-white gr-hover-y">
                  <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
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

export default Fasada;