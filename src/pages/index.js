import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing5/Hero";
import Categories from "../sections/landing5/Categories";
const IndexPage = () => {
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
        <Hero />
      <Categories />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
