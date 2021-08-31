import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgHeroBg from "../assets/image/l8/jpg/cover-2.jpg";
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
        className="co-working bg-image bg-overlay overlay-1 pb-13 pt-24 pt-lg-32 pb-lg-28 d-lg-flex align-items-center lg:min-h-vh-100"
        css={`
          background-image: url(${imgHeroBg});
        `}
      >
        <Container>    
          <Row >  
              <Link to="/terms-conditions" className="mb-13 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <Button className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0 text-blue">
                  BETONI
                    <i className="icon icon-tail-right text-blue font-weight-bold"></i>
                  </Button>
              </Link>        
              <Link to="/terms-conditions" className="mb-13 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <Button className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0 text-blue">
                  DRITARET
                    <i className="icon icon-tail-right text-blue font-weight-bold"></i>
                  </Button>
              </Link>
              <Link to="/terms-conditions" className="mb-13 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <Button className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0 text-blue">
                  FASADA
                    <i className="icon icon-tail-right text-blue font-weight-bold"></i>
                  </Button>
              </Link>
              <Link to="/terms-conditions" className="mb-13 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <Button className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0 text-blue">
                  UJË 24/7
                    <i className="icon icon-tail-right text-blue font-weight-bold"></i>
                  </Button>
              </Link>
              <Link to="/terms-conditions" className="mb-13 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <Button className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0 text-blue">
                  GJENERATORË & LIFTE
                    <i className="icon icon-tail-right text-blue font-weight-bold"></i>
                  </Button>
              </Link>
              <Link to="/terms-conditions" className="mb-13 mb-lg-0 col-lg-4 col-md-6 col-sm-10">
              <Button className="ml-4 mr-5 mb-5 with-icon gr-hover-y rounded-0 text-blue">
                  ARGËTIM
                    <i className="icon icon-tail-right text-blue font-weight-bold"></i>
                  </Button>
              </Link>
              </Row>   
        </Container>
    
      </div>
      </PageWrapper>
    </>
  );
};

export default Materialet;