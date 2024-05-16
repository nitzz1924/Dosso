import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, CardBody, Button, Container, CardFooter, CardHeader, Progress } from "reactstrap";
import { Link } from 'react-router-dom';

let rewardImg = "https://cdn-icons-png.flaticon.com/128/2282/2282531.png";
let magicImg = "https://cdn-icons-png.flaticon.com/512/4338/4338712.png";
let spinsImg = "https://cdn-icons-png.flaticon.com/512/8146/8146784.png";
let offerImg = "https://cdn-icons-png.flaticon.com/512/776/776627.png";
let tackerImg = "https://cdn-icons-png.flaticon.com/512/5694/5694967.png";
let scholarshipImg = "https://cdn-icons-png.flaticon.com/512/3769/3769879.png";

const contestData = [
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

    document.title = "Contests";

    return (
        <div className="page-content">
            <Container fluid className="justify-content-center ">
                <Row className="my-2 justify-content-center">
                    <Col lg="3" className="d-grid align-content-center">
                        <div className='d-flex justify-content-between align-content-center'>
                            <div className="fs-3 fw-bold text-secondary text-uppercase">My Contests</div>
                            <Link to="/contests" className="">
                                <Button className="btn btn-soft-secondary waves-effect waves-light btn-danger fw-bold ">
                                    Back
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>

                <Row className="my-2 justify-content-center">
                    <Col lg="3" className="d-grid align-content-center">
                        <Flicking
                            align="prev"
                            horizontal={false}
                            circular={false}
                            className="flicking-wrapper"
                            resizeOnContentsReady={true}
                            renderOnlyVisible={true}
                        // panelsPerView={3}
                        >
                            {(contestData || []).map((item, key) => (
                                <div className="flicking-viewport vertical " key={item.id}>
                                    <div className="flicking-camera shadow-sm">
                                        <Card className='mb-3  flicking-panel shadow border border-secondary rounded-3'>
                                            <CardHeader className='bg-white rounded-3 border-bottom d-flex justify-content-between'>

                                                <div className="mb-0 text-muted">
                                                    <i className="bx bx-time-five text-body me-1"></i>
                                                    {item.remainingTime}
                                                </div>
                                                {/* <div className="mb-0 text-muted">
                                        <span>
                                            Round: {item.seats}/{item.totalRound}
                                        </span>
                                        <b>{item.round}</b>
                                    </div> */}
                                                <div className="mb-0">
                                                    <span className='badge text-bg-light fs-6'>{item.status}</span>
                                                </div>

                                            </CardHeader>
                                            <CardBody className="p-3">

                                                <div className="text-start">
                                                    <div className=' d-flex justify-content-between'>
                                                        {/* <img src={item.img} alt="" className="avatar-sm" /> */}
                                                        <div>
                                                            <div className=" fw-bolder fs-3 text-black">
                                                                {item.title}
                                                            </div>
                                                            <div className="text-muted">Winning reward</div>
                                                        </div>
                                                        <div>Entry <s>₹100</s>
                                                            <div className="badge text-bg-secondary   d-grid justify-content-center">
                                                                <span className='text-center round-text  text-white'>{item.entryFees}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pb-3 pt-2">
                                                        <Progress
                                                            animated
                                                            className="mb-1"
                                                            color="secondary"
                                                            max="150000"
                                                            value={100000}

                                                            style={{
                                                                height: '5px'
                                                            }}
                                                        >
                                                        </Progress>
                                                        <div className="float-start text-danger progress-text fw-bold">
                                                            100000 Spots left
                                                        </div>
                                                        <div className="float-end text-muted progress-text">
                                                            150000 Spots
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <button onClick={() => handleClick(item)} className="btn btn-light shadow w-100 fw-bold fs-5 text-uppercase  rounded-5 ">
                                                            Join Contest
                                                        </button>
                                                    </div>
                                                </div>
                                            </CardBody>
                                            <CardFooter className=' d-flex justify-content-between'>
                                                <div className="mb-0 text-muted">
                                                    <i className='bx bx-trophy text-body me-1'></i>
                                                    {item.firstPrize}
                                                </div>

                                                <div className="mb-0 text-muted">
                                                    <b>{item.seats}</b>
                                                    <span className='ms-1'>
                                                        participants
                                                    </span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </Flicking>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default History