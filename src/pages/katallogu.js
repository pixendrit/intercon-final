import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";
import imgHeroBg from "../assets/image/l8/png/cover-3.png";
import PageWrapper from "../components/PageWrapper";

const Katallogu = () => {

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
          <iframe src="https://fictionalmaps.com/fm-embed.php?creator=357&map=Intercon&rand=6157501f5d69f" width='1024em' height='1024em'   webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>    
          </Row>   
        </Container>
    
      </div>
      </PageWrapper>
    </>
  );
};

export default Katallogu;