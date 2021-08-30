import React from "react";
import PageWrapper from "../components/PageWrapper";
import Services from "../sections/landing10/Services";


const B2B = () => {
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
        <Services />
      </PageWrapper>
    </>
  );
};

export default B2B;
