import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import fasada1 from "../../assets/image/job-site/jpg/fasadaejashtme1.jpg";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import fasada2 from "../../assets/image/job-site/jpg/fasada2.jpg";
import fasada3 from "../../assets/image/job-site/jpg/fasada3.jpg";



const Content4 = () => (
  <>
    {/* <!-- Content section --> */}
    <div className="content-section bg-transparent pt-lg-8 pb-8 pb-lg-15">
        <Container>
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
                <img className="main-img w-100 pt-5" src={fasada1} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Që nga fillimi i projektit tonë, ne kemi spjeguar që fasada e jashtme e kompleksit  është një fasadë unike dhe inovative e papërdorur nga askush deri me sot në tregun tonë.
                </h3>
                <p className="gr-text-10 mb-0">
                Fasada e tillë është fasadë ventiluese e cila punohet me pllakën e porcelanit me trashësi 4mm, me dimenzione 300 x 100 cm.
                </p>
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
                <img className="main-img w-100 pt-5" src={fasada3} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Pllaka e porcelanit ka një rrjetë speciale prapa saj, e cila plotëson standardet për përdorim të jashtëm.</h3>
                <p className="gr-text-10 mb-0">
                Garancioni i saj është 100 vjeçar.                </p>
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
        <Row className="align-items-center">
          <Col lg="6">
            <div className="content-img-group text-center mb-8 mb-lg-0">
              <div className="main-image  w-xs-250 w-lg-250 w-xl-250 mx-auto position-relative gr-z-index-1">
                  <Zoom>
                <img className="w-100 h-100" src={fasada2} alt="" />
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
                      Fasada ventiluese me qëndrueshmeri të lartë ( 100 vite)                      </h5>
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
                      Eliminimi i kondensimit dhe formimit të mykut
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
                      Izolim termik me lesh guri i cili ka koeficient termik më të lartë
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
                      Izolim akustik ideal
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
                      Qendrueshmëri ndaj zjarrit.
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
                      Estetike dhe e bukur për arkitekturë dhe dizajn.
                      </h5>
                    </div>
                  </div>
                </Col>
      
              </Row>
            </div>
          </Col>
        </Row>
        
 
  </>
);

export default Content4;