import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgHeroBg from "../assets/image/l8/png/cover-3.png";
import PageWrapper from "../components/PageWrapper";

const Materialet = () => {

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
      {/* <!-- Hero Area --> */}
      <div
        className="co-working bg-image bg-overlay overlay-2 pb-13 pt-24 pt-lg-32 pb-lg-28 d-lg-flex align-items-center lg:min-h-vh-100"
        css={`
          background-image: url(${imgHeroBg});
        `}
      >
        <Container>    
          <Row>  
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  BETONI
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>        
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10 ">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  ARMATURA
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  BLLOKAT
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10 ">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  FASADA E JASHTME
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10 ">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  SUVATIMI I BRENDSHËM
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  DRITARET
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  RRETHOJAT E TERASAVE
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-0 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  INSTALIMET ELEKTRIKE
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              </Row>
               <Row>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  INSTALIMET E UJIT DHE KANALIZIMIT
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  INSTALIMET E NGROHJES
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  DYERT E BRENDSHME
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  KERAMIKA
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  LAMINATI
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  HAPËSIRAT GJELBËRUESE DHE REKREATIVE
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-4 mb-lg-4 col-lg-3 col-md-6 col-sm-10">
              <div className="d-flex justify-content-between text-left gr-text-12 mb-8 with-icon gr-hover-y rounded-0  btn btn-outline-primary btn-block text-primary">
                  MIRËMBAJTJA DHE SIGURIA
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              </Row>   
        </Container>
    
      </div>
      </PageWrapper>
    </>
  );
};

export default Materialet;