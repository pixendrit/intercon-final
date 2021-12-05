import React from "react";
import { Link } from "gatsby";
import { Container, Row } from "react-bootstrap";
import imgHeroBg from "../assets/image/l8/png/cover-3.png";
import PageWrapper from "../components/PageWrapper";
import Content3 from "../sections/landing2/Content3";

const Bllokat = () => {

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
        <Content3 />
        </Container>
    
      </div>
      </PageWrapper>
    </>
  );
};

export default Bllokat;