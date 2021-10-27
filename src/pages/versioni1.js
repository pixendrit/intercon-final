import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link } from "gatsby";
import situacioni from "../assets/image/png/A4/Situacioni.png";
import img3d from "../assets/image/png/A4/a4-3d-resized.png";
import img2d from "../assets/image/png/A4/a4-2d-resized.png";


const A401 = () => { 
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
      <div className="brand-section pb-5 border-bottom bg-blackish-blue">
        <Container>
          <Row className="justify-content-center align-items-center flex-nowrap">
            <Col xs="12">
              <div className="brand-logos d-flex justify-content-center justify-content-between align-items-vertically  flex-nowrap">
              <div
                className="content-text pr-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <h2 className="gr-text-4 pt-15 px-5 pb-5 bg-sky-blue mb-8 mr-10">
                  Tipi A4
                </h2>
                <p className="gr-text-5 mb-0">
                  67.75 m²{" "}
                </p>

              </div>
              <div className="content-widget d-flex align-items-start flex-column mt-8"> 
                  <div className="widget-icon text-primary mr-6 gr-text-8 d-flex align-items-center">
                    <i className="icon icon-check-simple mr-5"></i>
                  
                  <h3 className="w-title gr-text-10 mb-3">
                    Qëndrimi ditor + Kuzhina
                  </h3>
                  </div>
                  <div className="widget-icon text-primary mr-6 gr-text-10 d-flex align-items-center">
                    <i className="icon icon-check-simple mr-5"></i>
                  
                  <h3 className="w-title gr-text-10 mb-3">
                    Terasa
                  </h3>
                  </div>
                  <div className="widget-icon text-primary mr-6 gr-text-10 d-flex align-items-center">
                    <i className="icon icon-check-simple mr-5"></i>
                  <h3 className="w-title gr-text-10 mb-3">
                    Dhoma Gjumi
                  </h3>
                  </div>
                  <div className="widget-icon text-primary mr-6 gr-text-10 d-flex align-items-center">
                    <i className="icon icon-check-simple mr-5"></i>
                 
                  <h3 className="w-title gr-text-10 mb-3">
                    Banjo
                  </h3>
                  </div>
        </div>
                <div>                
                  {/* <img src={situacioni} alt="pozicioni i baneses" className="w-100" />
                  <figcaption>Pozicioni i banesës</figcaption> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
      <div className="brand-section pb-5 border-bottom bg-primary d-flex align-items-start flex-column">
        <Container>
        <Row>
        <Zoom>
        <div
                className="hero-img"
                data-aos="fade-left"
                data-aos-duration="750"
                data-aos-delay="500"
              >
          <img className="banner-fluid-image pt-lg-9 w-100" src={img2d} alt="Render 2d" /> 
          </div>   
        </Zoom>
          </Row>
          <Row >
         <Zoom>
           <div>
          <img className="banner-fluid-image pt-lg-9 w-100" src={img3d} alt="Render 3d" />
          </div>
         </Zoom>
          </Row>
        </Container>
        
      </div>
      <Row className="align-items-center bg-blackish-blue justify-content-center pt-10 pb-10">
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

export default A401;
