import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table,
} from "reactstrap";
import { Link } from "react-router-dom";


//import action


// Pages Components
import Slidewithindicator from "./slidewithindicator";
import CardWelcome from "./card-welcome";
import OfferSlider from "./offerslider";
import RewardGrid from "./RewardGrid";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//i18n
import { withTranslation } from "react-i18next";


//redux


const Home = props => {


    const reports = [
        { title: "Orders", iconClass: "bx-copy-alt", description: "1,235" },
        { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723" },
        {
            title: "Average Price",
            iconClass: "bx-purchase-tag-alt",
            description: "$16.2",
        },
    ];



    //meta title
    document.title = "Home";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid >
                    <div className="fw-bold col-12 pb-2 fs-5 text-warning">
                        Hello, User
                    </div>

                    <Row className="justify-content-center">
                        <Col xl="6" className="p-0">
                            <Slidewithindicator />
                        </Col>
                    </Row>

                    <Row className="justify-content-center my-3">
                        <Col lg="6" className="p-0">
                            <CardWelcome title="Earn Gold" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col lg="6" className="p-0">
                            <OfferSlider title="Offers" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col lg="6" className="p-0">
                            <RewardGrid />
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
