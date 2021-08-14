import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import MapGoogle from "../components/MapGoogle";



const AboutPage = () => {
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
          theme: "light",
           style: "style1", //style1, style2
        }}
      >
        <div className="inner-banner">
          <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29">
              <Col lg="9" xl="8">
                <div className="px-md-12 text-center mb-11 mb-lg-14">                  <p className="gr-text-8 mb-0">
                  NTP Intercon operon që nga viti 2001 dhe parimi kryesor ka qenë ndërtimi i objekteve kualitative dhe ofrimi i kushteve sa më të mira në to. Dizajni, arkitektura, siguria dhe fortësia, ngrohtësia, izolimi e shumë tjera na bëjnë që të dallojmë në tregun Kosovar.

                  </p>
                </div>
              </Col>
             
            </Row>
          </Container>
        </div>
        <div className="about-content pt-lg-28 pt-13 pb-13 pb-lg-25">
          <Container>
            <Row>
              <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                    8 Astrit Bytyqi, Ferizaj 70000
                  </h2>
                </div>
              </Col> 
               <Col lg="6" className="mb-7 mb-lg-0">
                <div className="pr-xl-13">
                  <h2 className="gr-text-3 mb-0">
                  <a href="https://goo.gl/maps/oDmkuiMnHQ3J9BEfA" target="_blank">Merr drejtimet</a>
                  </h2>
                </div>
              </Col>
            
            </Row>
          </Container>
          <br />
          <br />
          <div
          className="google-map fluid-map-height position-relative overflow-hidden"
          id="googleMap"
          css={`
            position: relative;
            overflow: hidden;
          `}
        >
          <div
            css={`
              height: 100%;
              width: 100%;
              position: absolute;
              top: 0px;
              left: 0px;
              background-color: rgb(229, 227, 223);
            `}
          >
            <MapGoogle />
          </div>
        </div>
        </div>
        
        <div className="pt-13 pt-lg-24 pb-lg-24 ">
          <Container>
            <Row className="justify-content-center">
              
              <Col
                lg="3"
                md="4"
                xs="6"
                className="mb-13 d-flex align-items-center"
              >
                <div className="mt-xs-n4S5">
                  <h3 className="gr-text-9S">
                    Rezervoni takimin tuaj
                  </h3>
                  <a
                    href="tel:+38348150316"
                    className="btn-link with-icon gr-text-blue gr-text-7 font-weight-bold mt-5"
                  >
                    Telefono në +383 48 150 316{" "}
                    <i className="icon icon-tail-right font-weight-bold"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};
export default AboutPage;
