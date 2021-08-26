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

  const iconClassName =
    gContext.footer.theme === "dark"
      ? "text-storm gr-hover-text-green"
      : "gr-text-color gr-hover-text-blue";

  return (
    <>
      <div
        className={`footer-section pt-15 pt-lg-25 pb-lg-21 ${
          gContext.footer.theme === "dark"
            ? "dark-mode-texts bg-blue"
            : ""
        }`}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="3" md="4">
              <Logo
                white={gContext.footer.theme === "dark"}
                className="footer-logo mb-4"
              />
              <ul className="social-icons py-7 list-unstyled mb-7 mb-lg-0">
                
                <li className="mr-2">
                  <a href="https://www.facebook.com/interconferizaj" target="_blank" className={iconClassName}>
                    <i className="icon icon-logo-facebook"></i>
                  </a>
                </li>
                <li className="mr-2">
                  <a href="https://www.instagram.com/intercon_ferizaj/" target="_blank" className={iconClassName}>
                    <i className="icon icon-instant-camera-2 "></i>
                  </a>
                </li>
                
              </ul>
            </Col>
            <Col lg="8" md="8" className="offset-lg-1">
              <Row>  
                <Col xs="6" lg="3">
                  <div className="single-footer mb-13 mb-lg-9">
                    <p className="footer-title gr-text-11 mb-7">Kontakt</p>
                    <ul className="footer-list list-unstyled gr-text-9">
                      <li className="py-2">
                        <a href="tel:+38344150316" target="_blank" className={linkClassName}>
                        044150316
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="tel:+38349636110" target="_blank" className={linkClassName}>
                        049636110
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="https://m.me/interconferizaj" target="_blank" className={linkClassName}>
                          Messenger
                        </a>
                      </li>
                      <li className="py-2">
                        <Link to="/lokacioni" className={linkClassName}>
                          Lokacioni
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>              
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
