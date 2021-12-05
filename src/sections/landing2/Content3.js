import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import blloku1 from "../../assets/image/job-site/jpg/blloku1.jpg";
import blloku2 from "../../assets/image/job-site/jpg/blloku2.jpg";
import blloku3 from "../../assets/image/job-site/jpg/blloku3.jpg";


const Content3 = () => (
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
                <img className="main-img w-100 pt-5" src={blloku1} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Muret ndarëse të projekteve tona realizohen me bllokun e argjilës i cili prodhohet në Kosovë.
              </h3>
                <p className="gr-text-10 mb-0">
                Muret e jashtme realizohen me bllok giter me dimenzione 25/20/19 ndërsa muret ndarëse brenda realizohen me bllok giter 25/20/19 dhe 25/12/19.
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
                <img className="main-img w-100 pt-5" src={blloku2} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Karakteristika e bllokut giter është se, blloku posedon perde ndarëse të cilat krijojnë vakum e cila e izolon zërin.                </h3>
                <p className="gr-text-10 mb-0">Poashtu, metoda më ideale për izolimin e zërit ndaj banesave bëhet duke përdorur bllokun giter (double) apo dyfshin, ku me këtë rast krijohet një hapësirë –vakum, e cila e absorbon zërin.               </p>
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
                <img className="w-100 h-100" src={blloku3} alt="" />
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
                      Çdo here gjatë punimit të mureve, kontrollohen lidhjet e mureve mes vete, dhe me pllakën poshtë dhe sipër sipas standardeve të kërkuara.
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
                      Lidhja cilësore e mureve eliminon plasaritjet e mundshme të suvatimit.
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

export default Content3;