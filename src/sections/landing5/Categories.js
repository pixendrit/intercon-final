import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";


const Categories = () => {
  return (
    <>
      {/* <!-- Categories Area --> */}
      <div className="category-area d-flex flex-row mt-n10 pb-19 pb-lg-21">
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
              <Link to="/materialet">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6" >
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blue text-center">
                      MATERIALET  <i class="fas fa-external-link-alt"></i>
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
        
              <Link to="/katallogu" target="_blank">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blue text-center">
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
              <a href="https://intercon3d.netlify.app/" target="_blank" rel="noreferrer">
                <div className="single-category w-100 bg-primary d-inline-block px-12 pt-9 pb-1 mb-9 gr-hover-shadow-6 ">
                  <div className="case-content mb-9">
                    <h3 className="category-title gr-text-6 mb-3 text-blue text-center">
                      OBJEKTI 360°  <i class="fas fa-external-link-alt"></i>
                    </h3>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
