import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import banesa13848 from "../assets/image/katallogu/katallogu-intercon-a5.png";



const Banesa13848 = () => {
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
            <TransformWrapper>
        <TransformComponent>
            <img src={banesa13848} alt="" className="w-100" />
            </TransformComponent>
      </TransformWrapper>

            
             
            </Row>
          </Container>
        </div>
    
  
      </PageWrapper>
    </>
  );
};
export default Banesa13848;
