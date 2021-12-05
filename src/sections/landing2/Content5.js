import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import suvatimi1 from "../../assets/image/job-site/jpg/suvatimi1.jpg";
import suvatimi2 from "../../assets/image/job-site/jpg/suvatimi2.png";
import suvatimi3 from "../../assets/image/job-site/jpg/suvatimi3.jpg";



const Content5 = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section bg-transparent pt-lg-8 pb-8 pb-lg-15">
        <Container>
        <Row className="align-items-center">
          <Col lg="6">
            <div className="content-img-group text-center mb-8 mb-lg-0">
              <div className="main-image  w-xs-250 w-lg-250 w-xl-250 mx-auto position-relative gr-z-index-1">
                  <Zoom>
                <img className="w-100 h-100" src={suvatimi3} alt="" />
                </Zoom>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="content-widget mt-7 mt-lg-0 pr-lg-13 pl-xl-19">
              <Row className="align-items-center">
              <Col
                  md="6"
                  lg="12"
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
              
                </Col>

                <Col
                  md="6"
                  lg="12"
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-3 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-11">*</span>
                    </div>
                    <div className="media-body">
                      <h5 className="w-title mb-3 gr-text-9">
                      Suvatimi i brenshëm i mureve realizohet në dy mënyra, varësisht nga kërkesa e klientit. Klienti jonë mund të kërkoj që suvatimi në banesë të jetë:
                      </h5>
                    </div>
                  </div>
                </Col>

                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-3 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-11">1</span>
                    </div>
                    <div className="media-body">
                      <h5 className="w-title mb-3 gr-text-9">
                      GLED , apo
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-3 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-11">2</span>
                    </div>
                    <div className="media-body">
                      <h5 className="w-title mb-3 gr-text-9">
                      FASADË
                      </h5>
                    </div>
                  </div>
                </Col>
      
              </Row>
            </div>
          </Col>
        </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="10"
              lg="6"
              className="offset-xl-1  order-lg-2 mb-3 mb-lg-0"
            >
              <div
                className="double-image-group-opacity"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                  <Zoom>
                <img className="main-img w-100 pt-5" src={suvatimi1} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Madhësia e kokrrave të fasadës mund të jetë:
              </h3>
              <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-3 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-11">*</span>
                    </div>
                    <div className="media-body">
                      <h5 className="w-title mb-3 gr-text-9">
                      Fasadë 1.5 mm
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-3 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-11">*</span>
                    </div>
                    <div className="media-body">
                      <h5 className="w-title mb-3 gr-text-9">
                      Fasadë 1.0 mm , dhe
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-3 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-11">*</span>
                    </div>
                    <div className="media-body">
                      <h5 className="w-title mb-3 gr-text-9">
                      Fasadë 0.5 mm
                      </h5>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col
              sm="10"
              lg="6"
              className="offset-xl-1  order-lg-2 mb-3 mb-lg-0"
            >
              <div
                className="double-image-group-opacity"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                  <Zoom>
                <img className="main-img w-100 pt-5" src={suvatimi2} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Materiali i suvatimit është material cilësor, ndërsa për suvatimin e mureve, ne japim garancion dhe mirëmbajtje për 2 vite.   
                </h3>         
              </div>
            </Col>
          </Row>

        </Container>
    </div>
        <Row className=" justify-content-center">
          <div className="col-xl-6 col-lg-8 col-sm-10">
            <div className="section-title text-center mb-12">
              <h2 className="title gr-text-6 mb-6">
              </h2>
              <p className="gr-text-8 px-lg-7 px-xl-0">
              </p>
            </div>
          </div>
        </Row>

 
  </>
);

export default Content5;