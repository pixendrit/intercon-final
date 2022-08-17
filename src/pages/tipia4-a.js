import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link } from "gatsby";
import img3d from "../assets/image/png/A4-a/a4-3d-resized.png";
import img2d from "../assets/image/png/A4-a/a4-2d-resized.png";


const Tipia4 = () => { 
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
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <!-- Brands Area --> */}

      <div className="how-section pb-5 pt-lg-10 pb-lg-8  bg-default-1">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="7" md="9">
              <div className="section-title text-center mt-5 mb-3 mb-lg-5">
                <h2 className="title gr-text-3 mb-7">Tipi A4</h2>
                <p className="px-lg-8 gr-text-5">
                  67.75 m²{" "}
                </p>
              </div>
            </Col>
          </Row>
          <div className="fact-section pt-lg-5 pb-lg-5 bg-default-1">
          <Row className="justify-content-between align-items-center">
            <Col sm="6" md="6" lg="5" className="mb-3">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <span className="gr-text-7 mr-9"><i className="icon icon-check-simple"></i></span>
                <p className="gr-text-10 mb-0">
                Qëndrimi ditor + Kuzhina
                </p>
              </div>
            </Col>
            <Col sm="6" md="6" lg="5" className="mb-3">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <span className="gr-text-7 mr-9">
                <i className="icon icon-check-simple"></i>
                </span>
                <p className="gr-text-10 mb-0">
                Terasa
                </p>
              </div>
            </Col>
            <Col sm="6" md="6" lg="5" className="mb-3">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <span className="gr-text-7 mr-9">
                <i className="icon icon-check-simple"></i>
                </span>
                <p className="gr-text-10 mb-0">
                Dhome Gjumi
                </p>
              </div>
            </Col>
            <Col sm="6" md="6" lg="5" className="mb-3">
              <div className="single-fact d-flex px-9 px-sm-0 px-xl-9">
                <span className="gr-text-7 mr-9">
                <i className="icon icon-check-simple"></i>
                </span>
                <p className="gr-text-10 mb-0">
                Banjo
                </p>
              </div>
            </Col>
          </Row>
      </div>
        </Container>
      </div>

      <div className="content-section bg-blue pt-lg-8 pb-8 pb-lg-15">
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
                <img className="main-img w-100 pt-5" src={img2d} alt="" />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5" className="order-lg-1">
              <div className="content-text">
                <h2 className="mb-3">
                  Pamja 2 dimensionale e banesës!
                </h2>
                <p className="gr-text-12 mb-0">
                  Kliko foton për ta zmadhuar.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="content-section bg-white pt-lg-8 pb-8 pb-lg-15">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm="10" lg="7">
              <div
                className="content-img pt-5 pr-9"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                  <Zoom>
                <img
                  src={img3d}
                  alt=""
                  className="mw-100"
                />
                </Zoom>
              </div>
            </Col>
            <Col sm="10" lg="5">
              <div className="content-text pt-3 pt-lg-0 pl-xl-7">
                <h2 className="text-mirage-2 mb-3">
                  Dukja e banesës nga 3d modelimi i saj.
                </h2>
                <p className="gr-text-12 text-mirage-2 mb-0">
                  Klikoni foton për ta zmadhuar.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="align-items-center justify-content-center pt-10 pb-10 bg-default-1">
            <Col lg="10">
              <div
                className="cta-text d-flex flex-column flex-sm-row align-items-center justify-content-center"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <h2 className="title gr-text-5 mb-6 mb-sm-0 mr-sm-9 ">
                  Kthehu te katallogu
                </h2>
                <div
                  className="cta-btn"
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  data-aos-delay="500"
                >
                  <Link to="/katallogu" className="btn btn-white bg-white gr-hover-y">
                  <i class="fas fa-arrow-left"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
      </PageWrapper>
    </>
  );
};

export default Tipia4;
