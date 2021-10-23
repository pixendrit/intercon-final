import React from "react";
import { Link } from "gatsby";
import {Row, Col, Container} from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
import A10 from "../assets/image/png/A10/A10-1.png";

const Tipia10 = () => {
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
                        <Row className="justify-content-center mt-md-6 pt-24 pt-lg-29 pb-30">
                            <TransformWrapper
                                initialScale={1}
                                initialPositionX={0}
                                initialPositionY={0}
                            >
                                {({zoomIn, zoomOut, resetTransform, ...rest}) => (
                                    <React.Fragment>
                                        <div className="tools d-flex">
                                            <button class="amount-inc-btn btn-reset square-xs bg-gray-3 mx-2" onClick={() => zoomIn()}>+</button>
                                            <button class="amount-dec-btn btn-reset square-xs bg-gray-3 mx-2" onClick={() => zoomOut()}>-</button>
                                            <button class="btn-reset square-xs bg-gray-3 mx-2" onClick={() => resetTransform()}>x</button>
                                        </div>
                                        <TransformComponent>
                                            <img src={A10} alt="" className="w-100"/>
                                        </TransformComponent>
                                    </React.Fragment>
                                )}
                            </TransformWrapper>
                        </Row>
                    </Container>
                    <Row className="align-items-center justify-content-center">
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
                </div>


            </PageWrapper>
        </>
    );
};
export default Tipia10;
