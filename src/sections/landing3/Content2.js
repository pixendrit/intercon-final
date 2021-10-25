import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";

const Content = () => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
      {/* <!-- Content section --> */}
      <div className="content-section pt-13 pt-lg-28 pb-15 pb-lg-29 bg-blackish-blue dark-mode-texts">
        <Container>
          <Row className="align-items-center justify-content-center">
              <div className="section-title content-text mb-13 mb-lg-16">
                <h2 className="title gr-text-3 mb-6">
                  Tipi A4
                </h2>
                <p className="gr-text-5">
                  65 m2
                </p>
                <div className="mb-9 mb-lg-0">
                      <div className="widget-icon circle-30 bg-green mr-7">
                        <i className="icon icon-check-2-2 text-white"></i>
                      </div>
                      <div className="widget-text">
                        <h3 className="w-title gr-text-7">24/7 Hour Support</h3>
                      </div>
                    </div>
              </div>
                          
                </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
