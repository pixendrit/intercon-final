import React, { useState } from "react";
import { Row, Col, Container, Fade, Button } from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import Categories2 from "../sections/landing5/Categories2";

const ProductDetails = () => {
  const [active, setActive] = useState(1);
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
        
        <div className="d-flex align-items-start pb-md-19 pt-md-19 pt-13 pb-13 mt-10">
          <Container className="container d-flex align-items-baseline flex-row-reverse ">
            <nav className="d-flex align-items-start pb-12">
              <div className="nav flex-column nav-pills ml-10" id="nav-tab" role="tablist" aria-orientation="vertical">
                <a
                  href="/#"
                  className={`nav-item nav-link gr-text-10 font-weight-normal text-blue bg-narvik mb-3   ${
                    active === 1 ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={active === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(1);
                  }}
                >
                  Betoni
                </a>
                <a
                  className={`nav-item nav-link gr-text-10 font-weight-normal text-blue bg-narvik mb-3   ${
                    active === 2 ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={active === 2}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(2);
                  }}
                >
                  Dritaret
                </a>
                <a
                  className={`nav-item nav-link gr-text-10 font-weight-normal text-blue bg-narvik mb-3  ${
                    active === 3 ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={active === 3}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(3);
                  }}
                >
                  Fasada
                </a>
                <a
                  className={`nav-item nav-link gr-text-10 font-weight-normal text-blue bg-narvik mb-3 ${
                    active === 4 ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={active === 3}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(4);
                  }}
                >
                  Ujë 24/7 
                </a>
                <a
                  className={`nav-item nav-link gr-text-10 font-weight-normal text-blue bg-narvik mb-3   ${
                    active === 5 ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={active === 3}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(5);
                  }}
                >
                  Gjeneratorë & 2 lifte 
                </a>
                <a
                  className={`nav-item nav-link gr-text-10 font-weight-normal text-blue bg-narvik mb-3  ${
                    active === 6 ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                  aria-selected={active === 3}
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(6);
                  }}
                >
                  Argëtim
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <Fade
                in={active === 1}
                role="tabpanel"
                className={`tab-pane ${active === 1 ? "active" : ""}`}
              >
                <div>
                  <div>
                    <p className="gr-text-9">
                    Beton me cilësi të lartë nga TONI Beton
                    I ndërtuar me kujdes të veqantë e fortësi të lartë me beton nga Toni Company në bazë të ISO standardeve botërore.
                    Përveq cilësisë ne garantojmë siguri dhe komoditet në ndërtim.
                    Për ne siguria është primare.
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 2}
                role="tabpanel"
                className={`tab-pane ${active === 2 ? "active" : ""}`}
              >
                <div>
                  <div>
                  Jeto në qetësi, ngrohtësi dhe rehati me dritaret e kualitetit shumë të lartë VEKA
                  Objektet banesore të ndërtuara në lagjen e re, rr. Astrit Bytyçi posedojnë dritare me kualitet shumë të lartë.
                  Dritaret VEKA posedojnë:
                  Tre xhama termoizolues,material PVC, Izolim termin & akustik , roleta alumini, rezistencë nga lagështirat
                  Intercon kujdeset për qetësinë tuaj.
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 3}
                role="tabpanel"
                className={`tab-pane ${active === 3 ? "active" : ""}`}
              >
                <div>
                  <div>
                  Fasada ekskluzive nga Gimi Dekor
                  Fasadat i japin një pamje te mrekulluehsme objektit tonë me ngjyrë të mirë dhe kualitative, rezistence ndaj kushteve të ndryshme atmosferike.
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 4}
                role="tabpanel"
                className={`tab-pane ${active === 4 ? "active" : ""}`}
              >
                <div>
                  <div>
                  Objeki jonë përbëhet nga 3 pompa uji me nga 5000 litra që në total rreth 15000 litra ujë mjaftueshëm për furnizmin e të gjitha banesave dhe që të mos ndihet mungesa e ujit asnjë moment.
                  Gjithashtu sistem ngrohje qendrore nën – laminat ashtu që gjithnjë të jeni të ngrohtë edhe në ditët më të ftoha dimri.
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 5}
                role="tabpanel"
                className={`tab-pane ${active === 5 ? "active" : ""}`}
              >
                <div>
                  <div>
                  Momentin që energjia elektrike mungon të gjithë neve mendja ta shkon tek uji the ashensori.
                  Por, NTP Intercon ka sjellë zgjidhjen duke ofruar gjeneratorë 75 KW i cili ndezet automatikisht kur energjia elektrike ndërprehet ashtu që ashensori të ndalet në katin më të afërt dhe pompa ujit të funksionojë për furnizim me ujë.
                  </div>
                </div>
              </Fade>
              <Fade
                in={active === 6}
                role="tabpanel"
                className={`tab-pane ${active === 6 ? "active" : ""}`}
              >
                <div>
                  <div>
                  Surpriza rradhës në këtë objekt është pishina mbi pentahus.
                  Hapsira prej 13.75 ari e gjitha për ju për argëtim dhe shfrytëzim për të gjithë klientët e banesave të këtij objekti.
                  Kafiteri, grill, hapsirë për lojra për fëmijë, ulëse për pushim e shumë të tjera vetëm për ju!
                  </div>
                </div>
              </Fade>
            </div>
          </Container>
        </div>
        <Categories2 />
      </PageWrapper>
    </>
  );
};
export default ProductDetails;
