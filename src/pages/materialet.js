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
          <Row >  
              <Link to="/terms-conditions" className="mb-7 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <div className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0  btn btn-outline-primary text-primary ">
                  BETONI
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>        
              <Link to="/terms-conditions" className="mb-7 mb-lg-0 col-lg-4 col-md-6 col-sm-10 ">
              <div className=" ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0  btn btn-outline-primary text-primary">
                  DRITARET
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-7 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <div className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0   btn btn-outline-primary text-primary">
                  FASADA
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-7 mb-lg-0 col-lg-4 col-md-6 col-sm-10 ">
              <div className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0  btn btn-outline-primary text-primary">
                  UJË 24/7
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-7 mb-lg-0 col-lg-4 col-md-6 col-sm-10 ">
              <div className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0  btn btn-outline-primary text-primary">
                  GJENERATORË & LIFTE
                    <i className="icon icon-tail-right text-primary font-weight-bold"></i>
                  </div>
              </Link>
              <Link to="/terms-conditions" className="mb-7 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <div className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0  btn btn-outline-primary text-primary">
                  ARGËTIM
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