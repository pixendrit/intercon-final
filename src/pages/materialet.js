import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col, Button } from "react-bootstrap";
const Categories2 = () => {
  return (
    <>
      <div className="pt-20 mt-20 pb-19 pb-lg-21">
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
    </>
  );
};

export default Categories2;
