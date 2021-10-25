import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import situacioni from "../../assets/image/png/A4/Situacioni.png";
import img3d from "../../assets/image/png/A4/3d.png";
import img2d from "../../assets/image/png/A4/2d.png";

const A401 = () => { 
  return (
    <>
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
                  67.75 m².{" "}
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
                  <img src={situacioni} alt="" className="w-100" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </div>
      <div className="brand-section pb-5 border-bottom bg-primary d-flex align-items-start flex-column">
        <Container>
          <Row >
            <img className="banner-fluid-image pt-lg-9 w-100" src={img3d} alt="" />
          </Row>
          <Row>
          <img className="banner-fluid-image pt-lg-9 w-100" src={img2d} alt="" />
          </Row>
        </Container>
        
      </div>
    </>
  );
};

export default A401;
