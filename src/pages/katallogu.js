import React, {Component} from "react";
import { Link } from "gatsby";
import imagePath from "../assets/frame.png";
import PageWrapper from "../components/PageWrapper";
import {Row, Col, Container} from "react-bootstrap";
import imageMapResize from 'image-map-resizer';


class Katallogu extends Component {
    componentDidMount() {
        imageMapResize();
    }

    render() {
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
                                <img src={imagePath} useMap="#image-map" className="w-100"/>
                                <map name="image-map">
                                <Link to="/tipia5" >
                                    <area target="_blank" alt="a5-1" title="a5-1"  coords="249,333,251,466,317,465,317,485,349,483,351,437,397,435,397,334"
                                          shape="poly"/>
                                </Link>  
                                <Link to="/tipia4" >
                                    <area target="_blank" alt="a4-1" title="a4-1"  coords="488,333,489,435,398,438,397,333" shape="poly"/>
                                </Link>  
                                <Link to="/tipia3" >
                                    <area target="_blank" alt="a3-1" title="a3-1"  coords="665,450,557,449,556,439,487,432,487,330,525,333,528,352,665,351"
                                          shape="poly"/>
                                </Link>  
                                <Link to="/tipia3" >
                                    <area target="_blank" alt="a3-2" title="a3-2"  coords="664,351,802,353,802,332,845,333,844,437,776,437,776,449,665,451"
                                          shape="poly"/></Link>  
                                <Link to="/tipia4" >
                                    <area target="_blank" alt="a4-2" title="a4-2"  coords="933,333,931,436,840,435,841,333" shape="poly"/></Link>  
                                <Link to="/tipia5" >
                                    <area target="_blank" alt="a5-2" title="a5-2" coords="934,333,933,435,981,437,982,486,1014,485,1016,467,1079,464,1079,333" shape="poly"/>
                                </Link>  
                                <Link to="/tipia6" >
                                    <area target="_blank" alt="a6-1" title="a6-1"  coords="982,486,1017,484,1017,467,1080,465,1080,592,981,591" shape="poly"/>
                                </Link>  
                                <Link to="/tipia7" >
                                    <area target="_blank" alt="a7-1" title="a7-1"  coords="981,592,1078,592,1078,717,981,716" shape="poly"/>
                                </Link>  
                                <Link to="/tipia8" >
                                    <area target="_blank" alt="a8-1" title="a8-1"  coords="982,717,1079,716,1076,879,966,879,966,782,979,782" shape="poly"/>
                                </Link>  
                                <Link to="/tipid8" >
                                    <area target="_blank" alt="d8" title="d8"  coords="969,883,1079,884,1079,1004,979,1005,978,960,969,959" shape="poly"/>
                                </Link>  
                                <Link to="/tipid6" >
                                    <area target="_blank" alt="d6" title="d6"  coords="979,1006,1079,1125" shape="rect"/>
                                </Link>  
                                <Link to="/tipid4" >
                                     <area target="_blank" alt="d4" title="d4"  coords="978,1125,1079,1284" shape="rect"/>
                                </Link>  
                                <Link to="/tipid1" >
                                     <area target="_blank" alt="d1" title="d1"  coords="978,1285,1079,1287,1082,1408,969,1408,969,1329,978,1327"    shape="poly"/>
                                </Link>  
                                <Link to="/tipid2" >
                                    <area target="_blank" alt="d2" title="d2"  coords="968,1331,969,1405,857,1408,859,1284,957,1287,957,1328" shape="poly"/>
                                </Link>  
                                <Link to="/tipid3" >
                                    <area target="_blank" alt="d3" title="d3"  coords="956,1283,857,1282,858,1168,921,1166,924,1187,956,1187" shape="poly"/>
                                </Link>  
                                <Link to="/tipid5" >
                                    <area target="_blank" alt="d5" title="d5"  coords="915,1125,917,1108,955,1103,956,1005,857,1004,858,1125" shape="poly"/></Link>  
                                <Link to="/tipid7" >
                                     <area target="_blank" alt="d7" title="d7"  coords="956,1002,956,961,966,959,966,882,859,884,854,1004" shape="poly"/></Link>  
                                <Link to="/tipia9" >
                                     <area target="_blank" alt="a9-2" title="a9-2"  coords="857,879,966,877,966,779,957,777,956,718,855,718" shape="poly"/></Link>  
                                <Link to="/tipia10" >
                                    <area target="_blank" alt="a10-2" title="a10-2"  coords="858,716,957,716,958,593,859,593" shape="poly"/></Link>  
                                <Link to="/tipia1" >
                                    <area target="_blank" alt="a1-2" title="a1-2"  coords="915,549,916,505,950,500,951,459,797,458,797,551" shape="poly"/></Link>  
                                <Link to="/tipia2" >
                                    <area target="_blank" alt="a2-2" title="a2-2"  coords="796,458,777,458,776,451,665,451,666,551,797,550" shape="poly"/></Link>  
                                <Link to="/tipia2" >
                                    <area target="_blank" alt="a2-1" title="a2-1"  coords="663,451,557,450,557,458,532,459,533,550,664,551" shape="poly"/></Link>  
                                <Link to="/tipia1" >
                                    <area target="_blank" alt="a1-1" title="a1-1"  coords="529,458,532,550,415,550,414,504,380,501,380,459" shape="poly"/></Link>  
                                <Link to="/tipia10" >
                                    <area target="_blank" alt="a10-1" title="a10-1"  coords="370,595,471,593,472,716,370,718" shape="poly"/></Link>  
                                <Link to="/tipia9" >
                                    <area target="_blank" alt="a9-1" title="a9-1"  coords="372,720,373,781,362,781,363,882,474,879,476,717" shape="poly"/></Link>  
                                <Link to="/tipic8" >
                                    <area target="_blank" alt="c8" title="c8"  coords="365,884,363,969,376,973,379,1055,409,1053,455,1070,465,1050,473,1050,472,883" shape="poly"/></Link>  
                                <Link to="/tipic1" >
                                    <area target="_blank" alt="c1" title="c1"  coords="511,1046,624,1091,588,1182,472,1136" shape="poly"/></Link>  
                                <Link to="/tipic2" >
                                    <area target="_blank" alt="c2" title="c2"  coords="626,1090,591,1180,701,1222,707,1212,740,1133" shape="poly"/></Link>  
                                <Link to="/tipic3" >
                                    <area target="_blank" alt="c3" title="c3"  coords="654,1205,702,1225,707,1212,743,1225,695,1353,545,1295,580,1204,646,1228" shape="poly"/></Link>  
                                <Link to="/tipic4" >
                                    <area target="_blank" alt="c4" title="c4"  coords="580,1200,543,1295,429,1249,465,1160" shape="poly"/></Link>  
                                <Link to="/tipic5" >
                                    <area target="_blank" alt="c5" title="c5"  coords="464,1159,430,1249,348,1220,384,1124" shape="poly"/></Link>  
                                <Link to="/tipic6" >
                                    <area target="_blank" alt="c6" title="c6"  coords="346,1217,383,1123,356,1114,354,1045,250,1044,252,1183" shape="poly"/></Link>  
                                <Link to="/tipic7" > 
                                    <area target="_blank" alt="c7" title="c7"  coords="250,1041,354,1042,355,971,365,968,362,880,251,878" shape="poly"/></Link>  
                                <Link to="/tipia8" >
                                    <area target="_blank" alt="a8-2" title="a8-2"  coords="251,878,359,875,362,781,352,781,351,719,251,719" shape="poly"/></Link>  
                                <Link to="/tipia7" >
                                    <area target="_blank" alt="a7-2" title="a7-2"  coords="252,719,347,715,351,593,249,593" shape="poly"/></Link>  
                                <Link to="/tipia6" >
                                    <area target="_blank" alt="a6-3" title="a6-3"  coords="252,589,351,590,349,487,317,487,317,467,250,465" shape="poly"/>
                                </Link>  
                                </map>

                            </Row>
                        </Container>
                    </div>
                </PageWrapper>
            </>
        );
    }
}

// class Katallogu extends Component {
//     componentDidMount() {
//         alert(1234);
//         imageMapResize();
//     }
// }


export default Katallogu;

