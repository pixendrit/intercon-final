import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import dritaret1 from "../../assets/image/job-site/jpg/dritaret1.jpg";
import dritaret2 from "../../assets/image/job-site/jpg/dritaret2.jpg";




const Content6 = () => (
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
                <img className="main-img w-100 pt-5" src={dritaret1} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Njëra prej shumë arsyjeve të cilat e bëjnë kompleksin tonë të jetë ideal për klientët tanë, janë përdorimi i dritareve me kualitet të shkëlqyeshëm.                </h3>         
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
                <img className="main-img w-100 pt-5" src={dritaret2} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <p className="mb-3 gr-text-9">
                Karakteristikat e dritareve të kompleksit tonë janë:
              </p>
              <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-4 media">
                    <div className="media-icon  mr-8">
                      <span className="count text-white gr-text-12">*</span>
                    </div>
                    <div className="media-body">
                      <h6 className="w-title mb-3 gr-text-10">
                      Profili PVC prodhim gjerman, me trashësi 8mm ( Izolim i shkëlqyer termik Uf = 1.4 W (m2K)
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-4 media">
                    <div className="media-icon mr-8">
                      <span className="count text-white gr-text-12">*</span>
                    </div>
                    <div className="media-body">
                      <h6 className="w-title mb-3 gr-text-10">
                      Instalimi i tre xhamave ( 4 stinor ) dhe tre gomave – Ud = 0.8 W (m2K)
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-4 media">
                    <div className="media-icon mr-8">
                      <span className="count text-white gr-text-12">*</span>
                    </div>
                    <div className="media-body">
                      <h6 className="w-title mb-3 gr-text-10">
                      Ndërprerja e dyfishtë e urës termike në prag, siguron izolimin më të lartë termik
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-4 media">
                    <div className="media-icon  mr-8">
                      <span className="count text-white gr-text-12">*</span>
                    </div>
                    <div className="media-body">
                      <h6 className="w-title mb-3 gr-text-10">
                      Përdorimi i profilit elegant me ngjyrë Antracid 
                      </h6>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-4 media">
                    <div className="media-icon mr-8">
                      <span className="count text-white gr-text-12">*</span>
                    </div>
                    <div className="media-body">
                      <h6 className="w-title mb-3 gr-text-10">
                      	Përdorimi i roletes së aluminit.
                      </h6>
                    </div>
                  </div>
                </Col>

      
              </div>
            </Col>
          </Row>


        </Container>
    </div>


 
  </>
);

export default Content6;