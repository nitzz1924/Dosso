import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


//import action


// Pages Components
import CardWelcome from "./card-welcome";
import OfferSlider from "./offerslider";
import RewardGrid from "./RewardGrid";
import Cardslider from "./cardslider";
import BannerSlider from "./BannerSlider";

//i18n
import { withTranslation } from "react-i18next";

//redux


const Home = props => {


    //meta title
    document.title = "Home";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <Row className="justify-content-center">
                        <Col lg="3" className="p-0">
                            <div className="fw-bold col-12 pb-2 fs-5 text-secondary">
                                Hello, User
                            </div>
                            <BannerSlider />
                            
                        </Col>
                    </Row>

                    <Row className="justify-content-center my-3">
                        <Col lg="3" className="p-0">
                            <CardWelcome title="Earn scholarships" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col lg="3" className="p-0">
                            <OfferSlider title="Offers" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col lg="3" className="p-0">
                            <RewardGrid />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col lg="3" className="p-0">
                            <Cardslider title="Explore more" />
                        </Col>
                    </Row>
                </Container>
            </div>


        </React.Fragment>
    );
};

Home.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
};

export default withTranslation()(Home);
