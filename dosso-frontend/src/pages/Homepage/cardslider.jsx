import React from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

let rewardImg = "https://cdn-icons-png.flaticon.com/128/2282/2282531.png";
let magicImg = "https://cdn-icons-png.flaticon.com/512/4338/4338712.png";
let spinsImg = "https://cdn-icons-png.flaticon.com/512/8146/8146784.png";
let offerImg = "https://cdn-icons-png.flaticon.com/512/776/776627.png";
let tackerImg = "https://cdn-icons-png.flaticon.com/512/5694/5694967.png";
let scholarshipImg = "https://cdn-icons-png.flaticon.com/512/3769/3769879.png";

const jobVacancy = [
    {
        id: 1,
        img: rewardImg,
        title: "Duo",
        country: " California",
        vacancy: 8
    },
    {
        id: 2,
        img: magicImg,
        title: "Weekly Magic",
        country: " California",
        vacancy: 8
    },
    {
        id: 3,
        img: spinsImg,
        title: "Spins",
        country: " California",
        vacancy: 8
    },
    {
        id: 4,
        img: offerImg,
        title: "Offer",
        country: " California",
        vacancy: 8
    },
    {
        id: 5,
        img: tackerImg,
        title: "Spends Tracker",
        country: " California",
        vacancy: 8
    },
    {
        id: 6,
        img: scholarshipImg,
        title: "Scholarship",
        country: " California",
        vacancy: 8
    },
];

const Cardslider = ({ title }) => {
    return (
        <div className="">
            <Row className="my-2">
                <Col className="d-grid align-content-center">
                    <div className="fs-5 fw-bold ">{title}</div>
                </Col>
            </Row>
            <Flicking
                align="prev"
                horizontal={true}
                circular={true}
                className="flicking-wrapper"
                resizeOnContentsReady={true}
                renderOnlyVisible={true}
                panelsPerView={3}
            >
                {(jobVacancy || []).map((item, key) => (
                    <div className='card mx-2 w-75' key={item.id}>
                        <div className='border'>
                            <Card className='mb-0'>
                                <CardBody className="">
                                    <div className="text-star">
                                        <img src={item.img} alt="" className="avatar-sm" />
                                        <Link to="/job-details" className="text-body">
                                            <div className="mt-4 mb-2 fw-bold fs-3 text-warning">{item.title}</div>
                                        </Link>
                                    </div>
                                    <div className="d-flex">
                                        <p className="mb-0 flex-grow-1 text-muted">
                                            <i className="bx bx-map text-body"></i>
                                            {item.country}
                                        </p>
                                        <p className="mb-0 text-muted">
                                            <b>{item.vacancy}</b>
                                            Vacancy
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                ))}
            </Flicking>
        </div>
    );
}

export default Cardslider;
