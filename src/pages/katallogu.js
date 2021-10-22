import React from "react";
import imagePath from "../assets/frame.png";

import PageWrapper from "../components/PageWrapper";
import { Row, Col, Container } from "react-bootstrap";



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
          theme: "light",
           style: "style1", //style1, style2
        }}
      >    
      <div className="inner-banner">
   <Container>
            <Row className="justify-content-center mt-md-6 pt-24 pb-10 pt-lg-29">

    <img src={imagePath} usemap="#image-map" className="w-100"/>
 

<map name="image-map">
    <area target="_blank" alt="1" title="1" href="https://google.com" coords="249,333,251,466,317,465,317,485,349,483,351,437,397,435,397,334" shape="poly"/>
    <area target="_blank" alt="2" title="2" href="https://google.com" coords="488,333,489,435,398,438,397,333" shape="poly"/>
    <area target="_blank" alt="3" title="3" href="https://google.com" coords="665,450,557,449,556,439,487,432,487,330,525,333,528,352,665,351" shape="poly"/>
    <area target="_blank" alt="4" title="4" href="https://google.com" coords="664,351,802,353,802,332,845,333,844,437,776,437,776,449,665,451" shape="poly"/>
    <area target="_blank" alt="5" title="5" href="https://google.com" coords="933,333,931,436,840,435,841,333" shape="poly"/>
    <area target="_blank" alt="6" title="6" href="https://google.com" coords="934,333,933,435,981,437,982,486,1014,485,1016,467,1079,464,1079,333" shape="poly"/>
    <area target="_blank" alt="7" title="7" href="https://google.com" coords="982,486,1017,484,1017,467,1080,465,1080,592,981,591" shape="poly"/>
    <area target="_blank" alt="8" title="8" href="https://google.com" coords="981,592,1078,592,1078,717,981,716" shape="poly"/>
    <area target="_blank" alt="9" title="9" href="https://google.com" coords="982,717,1079,716,1076,879,966,879,966,782,979,782" shape="poly"/>
    <area target="_blank" alt="10" title="10" href="https://google.com" coords="969,883,1079,884,1079,1004,979,1005,978,960,969,959" shape="poly"/>
    <area target="_blank" alt="11" title="11" href="https://google.com" coords="979,1006,1079,1125" shape="rect"/>
    <area target="_blank" alt="12" title="12" href="https://google.com" coords="978,1125,1079,1284" shape="rect"/>
    <area target="_blank" alt="13" title="13" href="https://google.com" coords="978,1285,1079,1287,1082,1408,969,1408,969,1329,978,1327" shape="poly"/>
    <area target="_blank" alt="14" title="14" href="https://google.com" coords="968,1331,969,1405,857,1408,859,1284,957,1287,957,1328" shape="poly"/>
    <area target="_blank" alt="15" title="15" href="https://google.com" coords="956,1283,857,1282,858,1168,921,1166,924,1187,956,1187" shape="poly"/>
    <area target="_blank" alt="16" title="16" href="https://google.com" coords="915,1125,917,1108,955,1103,956,1005,857,1004,858,1125" shape="poly"/>
    <area target="_blank" alt="17" title="17" href="https://google.com" coords="956,1002,956,961,966,959,966,882,859,884,854,1004" shape="poly"/>
    <area target="_blank" alt="18" title="18" href="https://google.com" coords="857,879,966,877,966,779,957,777,956,718,855,718" shape="poly"/>
    <area target="_blank" alt="19" title="19" href="https://google.com" coords="858,716,957,716,958,593,859,593" shape="poly"/>
    <area target="_blank" alt="20" title="20" href="https://google.com" coords="915,549,916,505,950,500,951,459,797,458,797,551" shape="poly"/>
    <area target="_blank" alt="21" title="21" href="https://google.com" coords="796,458,777,458,776,451,665,451,666,551,797,550" shape="poly"/>
    <area target="_blank" alt="22" title="22" href="https://google.com" coords="663,451,557,450,557,458,532,459,533,550,664,551" shape="poly"/>
    <area target="_blank" alt="23" title="23" href="https://google.com" coords="529,458,532,550,415,550,414,504,380,501,380,459" shape="poly"/>
    <area target="_blank" alt="24" title="24" href="https://google.com" coords="370,595,471,593,472,716,370,718" shape="poly"/>
    <area target="_blank" alt="25" title="25" href="https://google.com" coords="372,720,373,781,362,781,363,882,474,879,476,717" shape="poly"/>
    <area target="_blank" alt="26" title="26" href="https://google.com" coords="365,884,363,969,376,973,379,1055,409,1053,455,1070,465,1050,473,1050,472,883" shape="poly"/>
    <area target="_blank" alt="27" title="27" href="https://google.com" coords="511,1046,624,1091,588,1182,472,1136" shape="poly"/>
    <area target="_blank" alt="28" title="28" href="https://google.com" coords="626,1090,591,1180,701,1222,707,1212,740,1133" shape="poly"/>
    <area target="_blank" alt="29" title="29" href="https://google.com" coords="654,1205,702,1225,707,1212,743,1225,695,1353,545,1295,580,1204,646,1228" shape="poly"/>
    <area target="_blank" alt="30" title="30" href="https://google.com" coords="580,1200,543,1295,429,1249,465,1160" shape="poly"/>
    <area target="_blank" alt="31" title="31" href="https://google.com" coords="464,1159,430,1249,348,1220,384,1124" shape="poly"/>
    <area target="_blank" alt="32" title="32" href="https://google.com" coords="346,1217,383,1123,356,1114,354,1045,250,1044,252,1183" shape="poly"/>
    <area target="_blank" alt="33" title="33" href="https://google.com" coords="250,1041,354,1042,355,971,365,968,362,880,251,878" shape="poly"/>
    <area target="_blank" alt="34" title="34" href="https://google.com" coords="251,878,359,875,362,781,352,781,351,719,251,719" shape="poly"/>
    <area target="_blank" alt="35" title="35" href="https://google.com" coords="252,719,347,715,351,593,249,593" shape="poly"/>
    <area target="_blank" alt="36" title="36" href="https://google.com" coords="252,589,351,590,349,487,317,487,317,467,250,465" shape="poly"/>
</map>
</Row>
</Container>
</div>
</PageWrapper>
    </>
  );
};

export default Katallogu;

