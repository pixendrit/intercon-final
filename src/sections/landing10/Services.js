import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "react-bootstrap";

import imgS1 from "../../assets/image/l3/jpg/l3-service-img1.jpg";
import imgS2 from "../../assets/image/l3/jpg/l3-service-img2.jpg";
import imgS3 from "../../assets/image/l3/jpg/l3-service-img3.jpg";

const Services = () => {
  return (
    <>
      {/* <!-- Services Area --> */}
      
      <div className=" pt-20 mt-10 service-section bg-default-2 pt-12 py-lg-23">
        <Container>
          <Row className="justify-content-center">
            <Col xl="6" lg="8" md="10">
              <div className="section-title text-center mb-11 mb-lg-15">
                <h2 className="title gr-text-4 mb-6">
                  Materialet që përdorim
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 mb-7">Betoni</h3>
                <div className="img-thumb mb-8">
                  <img className=" w-100" src={imgS1} alt="" />
                </div>
                <p className="excerpt gr-text-9 mb-6">
                Beton me cilësi të lartë nga TONI Beton
                    I ndërtuar me kujdes të veqantë e fortësi të lartë me beton nga Toni Company në bazë të ISO standardeve botërore.
                    Përveq cilësisë ne garantojmë siguri dhe komoditet në ndërtim.
                </p>
                <Link
                  to="/terms-conditions"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  Mëso më shumë{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 mb-7">Dritaret</h3>
                <div className="img-thumb mb-8">
                  <img className="w-100" src={imgS2} alt="" />
                </div>
                <p className="excerpt gr-text-9 mb-6">
                Jeto në qetësi, ngrohtësi dhe rehati me dritaret e kualitetit shumë të lartë VEKA
                  Objektet banesore të ndërtuara në lagjen e re, rr. Astrit Bytyçi posedojnë dritare me kualitet shumë të lartë.
                </p>
                <Link
                  to="/terms-conditions"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  Mëso më shumë{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </Link>
              </div>
            </Col>
            <Col lg="4" md="6" sm="10" className="mb-13 mb-lg-0">
              <div className="service-card">
                <h3 className="card-title gr-text-7 mb-7">Fasada</h3>
                <div className="img-thumb mb-8">
                  <img className="w-100" src={imgS3} alt="" />
                </div>
                <p className="excerpt gr-text-9 mb-6">
                Fasada ekskluzive nga Gimi Dekor.
                Fasadat i japin një pamje te mrekulluehsme objektit tonë me ngjyrë të mirë dhe kualitative, rezistence ndaj kushteve të ndryshme atmosferike.
                </p>
                <Link
                  to="/terms-conditions"
                  className="btn-link with-icon gr-text-9 font-weight-bold"
                >
                  Mëso më shumë{" "}
                  <i className="icon icon-tail-right font-weight-bold"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
