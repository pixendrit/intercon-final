import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing12/Hero";
import Brands from "../sections/landing12/Brands";
import Features from "../sections/landing12/Features";
import Content1 from "../sections/landing12/Content1";
import Content2 from "../sections/landing12/Content2";
import Team from "../sections/landing12/Team";
import Content3 from "../sections/landing12/Content3";
import CTA from "../sections/landing12/CTA";

const Ecommerce = () => {
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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Brands />

      </PageWrapper>
    </>
  );
};

export default Ecommerce;
