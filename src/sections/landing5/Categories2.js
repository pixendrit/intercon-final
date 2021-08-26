import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";


const Categories2 = () => {
  return (
    <>
      {/* <!-- Categories Area --> */}
      <div className="category-area d-flex flex-row pt-20 mt-n10 pb-19 pb-lg-21">
        <Container>
          <br></br>
          <Row>
            <Col
              md="6"
              lg="4"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="650"
            >
        
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-primary d-inline-block px-5 pt-5 pb-5 mb-9  gr-hover-shadow-6 ">
                  <div className="case-content ">
                    <h3 className="category-title gr-text-9 mb-3 text-blue text-center">
                      KATALLOGU I BANESAVE  <i class="fas fa-external-link-alt"></i>
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
              <Link to="/#">
                <div className="single-category w-100 rounded-10 bg-primary d-inline-block px-5 pt-5 pb-5 mb-9  gr-hover-shadow-6 ">
                  <div className="case-content ">
                    <h3 className="category-title gr-text-9 mb-3 text-blue text-center">
                      OBJEKTI 360°  <i class="fas fa-external-link-alt"></i>
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
