import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import GlobalContext from "../../context/GlobalContext";
import Logo from "../Logo";

const Footer = () => {
  const gContext = useContext(GlobalContext);

  const linkClassName =
    gContext.footer.theme === "dark"
      ? "gr-text-color gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

      return (
        <>
           <div
              className={`footer-section ${
                gContext.footer.theme === "dark"
                  ? "dark-mode-texts bg-blue"
                  : ""
              }`}
            >
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col lg="3" md="4">
                  <div className="footer-logo text-center text-md-left mb-7 mb-md-5">
                    <Logo
                      white={gContext.footer.theme === "dark"}
                      className="mx-auto mx-md-3"
                    />
                  </div>
                </Col>
                <Col lg="8" md="8" className="offset-lg-1">
                  <ul className="footer-links gr-text-11 py-lg-7 list-unstyled mb-5 d-xs-flex align-items-center justify-content-around justify-content-md-end flex-wrap">
                    <li className="ml-md-12 text-center">
                    <a href="tel:+38344150316" target="_blank" className={linkClassName}>
                              044150316
                              </a>
                    </li>
                    <li className="ml-md-12 text-center">
                    <a href="tel:+38349636110" target="_blank" className={linkClassName}>
                              049636110
                              </a>
                    </li>
                    <li className="ml-md-12 text-center">
                    <a href="https://m.me/interconferizaj" target="_blank" className={linkClassName}>
                                Messenger
                              </a>
                    </li>
                    <li className="ml-md-12 text-center">
                    <Link to="/lokacioni" className={linkClassName}>
                                Lokacioni
                              </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      );
      };
export default Footer;


