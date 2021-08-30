import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
const Categories2 = () => {
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
      ></PageWrapper>
      {/* <!-- Categories Area --> */}
      <div className="pt-30 mt-30 d-flex flex-row mt-n10 pb-19 pb-lg-21">
        <Container>
          <br></br>
          <Row>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="550"
            >
              <Link to="/terms-conditions">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6" >
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blue text-center">
                      BETONI  <i class="icon icon-tail-right font-weight-bold"></i>
                    </h3>
                  </div>
                </div>
              </Link>
        
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="650"
            >
        
              <Link to="/terms-conditions">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blue text-center">
                      DRITARET  <i class="icon icon-tail-right font-weight-bold"></i>
                    </h3>
                  </div>
                </div>
              </Link>
        
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link to="/terms-conditions">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blue text-center">
                      FASADA  <i class="icon icon-tail-right font-weight-bold"></i>
                    </h3>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="550"
            >
              <Link to="/terms-conditions">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6" >
                  <div className="case-content mb-9">
                    <h3 className="category-title text-uppercase gr-text-6 mb-3 text-blue text-center">
                    Ujë 24/7   <i class="icon icon-tail-right font-weight-bold"></i>
                    </h3>
                  </div>
                </div>
              </Link>
        
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="650"
            >
        
              <Link to="/terms-conditions">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title text-uppercase gr-text-6 mb-3 text-blue text-center">
                    Gjeneratorë &  lifte  <i class="icon icon-tail-right font-weight-bold"></i>
                    </h3>
                  </div>
                </div>
              </Link>
        
            </Col>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="750"
            >
              <Link to="/terms-conditions">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title text-uppercase gr-text-6 mb-3 text-blue text-center">
                    Argëtim  <i class="icon icon-tail-right font-weight-bold"></i>
                    </h3>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories2;
