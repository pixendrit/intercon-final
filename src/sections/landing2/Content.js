import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import toni2 from "../../assets/image/job-site/jpg/2.jpg";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import toni1 from "../../assets/image/job-site/jpg/1.jpg";
import toni3 from "../../assets/image/job-site/jpg/3.jpg";
import tonilogo from "../../assets/image/png/toni.png";


const Content = () => (
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
                <img className="main-img w-100 pt-5" src={toni1} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Toni Company sh.p.k.  bashkpunon me kompaninë tonë duke na furnizuar me betonin më cilësor në treg duke ofruar klasa të ndryshme fortësisë.
                </h3>
                <p className="gr-text-10 mb-0">
                Toni Company sh.p.k. është themeluar në vitin 1991 e cila është marrë kryesisht me ndërtim të lartë.
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
                <img className="main-img w-100 pt-5" src={toni3} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Pllaka e themelit dhe pllakat mbajtëse të meskateve, punohen me beton të klasës C25/30 , ndërsa shtyllat e konstruksionit punohen me beton të klasës C30/37.
                </h3>
                <p className="gr-text-10 mb-0">
                Poashtu në pozicione të caktuara , Toni Company na ofron aditive të ndryshme për rritjen e kualitetit të betonit e cila ndikon në mënyrë direkte në kualitetin dhe qëndrueshmërinë e konstruksionit. 
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
                <img className="main-img w-100 pt-5" src={tonilogo} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h3 className="mb-3 gr-text-6">
                Aktualisht kjo kompani numëron rreth 50 punëtor aktiv të specializuar në fushat përkatëse si: 
                </h3>
                <p className="gr-text-10 mb-0">
                inxhinier të ndërtimtarisë, inxhinier të makinerisë, ekonomist të diplomuar, jurist të diplomuar, punëtor të kualifikuar për manipulim me makineri, e tjerë.                </p>
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
                <img className="w-100 h-100" src={toni2} alt="" />
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
              Toni Company sh.p.k. ka laboratorin e përsosur me të cilën e kontrollon kualitetin e betonit të vet.
                Testimet të cilat i realizon në laborator jane : 
                </Col>

                <Col
                  md="6"
                  lg="12"
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">1</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                      Rezistenca në shtypje e betonit
                      </h3>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">2</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                       Ujëpëshkueshmëria e betonit 
                      </h3>
                    </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="12"
                  data-aos="fade-left"
                  data-aos-duration="900"
                >
                  <div className="single-widget my-9 media">
                    <div className="media-icon circle-sm bg-blue mr-8">
                      <span className="count text-white gr-text-9">3</span>
                    </div>
                    <div className="media-body">
                      <h3 className="w-title mb-5 gr-text-7">
                      Konsistenca e betonit
                      </h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
 
  </>
);

export default Content;