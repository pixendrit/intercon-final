import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

import Footer1 from "./Footer1";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  switch (gContext.footer.style) {
    case "style2":
      return <Footer1 />;
    case "style3":
      return <Footer1 />;
    case "style4":
      return <Footer1 />;
    default:
      return <Footer1 />;
  }
};

export default Footer;
