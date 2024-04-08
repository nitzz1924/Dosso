import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, CardBody, Button, Container } from "reactstrap";
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
        title: "Contest 1",
        date: "05/04/24",
        players: 80,
        round: 2,
        winner: "Player 01"
    },
    {
        id: 2,
        img: magicImg,
        title: "Contest 2",
        date: "01/04/24",
        players: 56,
        round: 1,
        winner: "Player 03"
    },
    {
        id: 3,
        img: spinsImg,
        title: "Contest 3",
        date: "20/03/24",
        players: 21,
        round: 3,
        winner: "Player 02"
    },
    {
        id: 4,
        img: offerImg,
        title: "Contest 4",
        date: "12/03/24",
        players: 34,
        round: 1,
        winner: "Player 01"
    },
    {
        id: 5,
        img: tackerImg,
        title: "Contest 5",
        date: "21/02/24",
        players: 54,
        round: 2,
        winner: "Player 02"
    },
    {
        id: 6,
        img: scholarshipImg,
        title: "Contest 6",
        date: "14/02/24",
        players: 65,
        round: 1,
        winner: "Player 02"
    },
];

const History = () => {

    document.title = "History";

    return (
        <div className="page-content">
            <Container fluid className="justify-content-center">
                <Row className="my-2">
                    <Col className="d-grid align-content-center">
                        <div className='d-flex justify-content-between align-content-center'>
                            <div className="fs-3 fw-bold text-secondary text-uppercase">History</div>
                            <Link to="/contests" className="">
                                <Button className="btn btn-soft-info waves-effect waves-light btn-danger fw-bold ">
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>

                <Flicking
                    align="prev"
                    horizontal={false}
                    circular={false}
                    className="flicking-wrapper"
                    resizeOnContentsReady={true}
                    renderOnlyVisible={true}
                // panelsPerView={3}
                >
                    {(jobVacancy || []).map((item, key) => (
                        <div className="flicking-viewport vertical" key={item.id}>
                            <div className="flicking-camera">
                                <Card className='mb-2 border flicking-panel'>

                                    <CardBody className="">
                                        <div className="d-flex justify-content-between">
                                            <div className="mb-0 text-muted">
                                                <i className="bx bx-calendar text-body me-1"></i>
                                                {item.date}
                                            </div>
                                            {/* <div className="mb-0 text-muted">
                                                <span>
                                                    Round: {item.round}
                                                </span>
                                            </div> */}
                                            <div className="mb-0 text-muted">
                                                <b>{item.players}</b>
                                                <span className='ms-1'>
                                                    Participants
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-star mt-4">
                                            <img src={item.img} alt="" className="avatar-sm" />
                                            <div className='mt-3 d-flex justify-content-between align-items-end'>
                                                <div>
                                                    <div className=" fw-bold fs-4 text-warning">
                                                        {item.title}
                                                    </div>
                                                    <div className="fs-6 badge-soft-info badge bg-secondary">
                                                        Winner: {item.winner}
                                                    </div>
                                                </div>
                                                <Link to="/rounds" className="">
                                                    <div className="btn btn-outline-info">
                                                        Leaderboard
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    ))
                    }
                </Flicking>
            </Container>
        </div>
    )
}

export default History