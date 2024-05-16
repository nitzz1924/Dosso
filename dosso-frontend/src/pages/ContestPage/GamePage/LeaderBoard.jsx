import React from 'react'
import { Container, Row, Card, CardBody, Button } from 'reactstrap'
let wheelImg = "Assets/images/fortune-wheel.png"
import { Link } from 'react-router-dom';


const LeaderBoard = () => {
    document.title = "Leaderboard";

    return (
        <>
            <div className="page-content">

                <Container fluid className=''>
                    <Row>
                        <div className='d-flex justify-content-between align-content-center my-2'>
                            <div className='fs-3 fw-bold  text-center'>All Ranking</div>
                            <Link to="/" className="">
                                <Button className="btn btn-soft-secondary waves-effect waves-light btn-danger fw-bold ">
                                    Back
                                </Button>
                            </Link>
                        </div>
                        <Card className=' bg-white shadow-sm mb-2 rounded-3'>
                            <CardBody className='d-flex p-2 justify-content-between align-items-center'>
                                <div className='d-flex align-items-center '>
                                    <div className='me-2 fs-3 border-end'  >🥇</div>
                                    <div className='me-2 border border-1 border-secondary rounded-3'>
                                        <img src={wheelImg} alt="" className="img-fluid " width={35} />
                                    </div>
                                    <div className='me-2 fw-bold fs-5'>Player 1 </div>
                                </div>
                                <div className="fw-bold fs-5">8543 pts</div>
                            </CardBody>
                        </Card>
                        <Card className=' bg-white shadow-sm mb-2 rounded-3' >
                            <CardBody className='d-flex p-2 justify-content-between align-items-center'>
                                <div className='d-flex align-items-center '>
                                    <div className='me-2 fs-3  border-end' >🥈</div>
                                    <div className='me-2 border border-secondary rounded-3'>
                                        <img src={wheelImg} alt="" className="img-fluid " width={35} />
                                    </div>
                                    <div className='me-2 fw-bold fs-5'>Player 2</div>
                                </div>
                                <div className="fw-bold fs-5">6524 pts</div>
                            </CardBody>
                        </Card>
                        <Card className=' bg-white shadow-sm mb-2 rounded-3' >
                            <CardBody className='d-flex p-2 justify-content-between align-items-center'>
                                <div className='d-flex align-items-center '>
                                    <div className='me-2 fs-3 border-end ' >🥉</div>
                                    <div className='me-2 border border-secondary rounded-3'>
                                        <img src={wheelImg} alt="" className="img-fluid " width={35} />
                                    </div>
                                    <div className='me-2 fw-bold fs-5'>Player 3</div>
                                </div>
                                <div className="fw-bold fs-5">3545 pts</div>
                            </CardBody>
                        </Card>
                        <Card className=' bg-white shadow-sm mb-2 rounded-3' >
                            <CardBody className='d-flex p-2 justify-content-between align-items-center'>
                                <div className='d-flex align-items-center ms-3'>
                                    <div className='me-2 fs-5 border-end' >4</div>
                                    <div className='me-2 border border-secondary rounded-3'>
                                        <img src={wheelImg} alt="" className="img-fluid " width={35} />
                                    </div>
                                    <div className='me-2 fw-bold '>Player 4</div>
                                </div>
                                <div className="fw-bold fs-6">2345 pts</div>
                            </CardBody>
                        </Card>
                        <Card className=' bg-white shadow-sm mb-2 rounded-3' >
                            <CardBody className='d-flex p-2 justify-content-between align-items-center'>
                                <div className='d-flex align-items-center ms-3'>
                                    <div className='me-2 fs-5 border-end' >5</div>
                                    <div className='me-2 border border-secondary rounded-3'>
                                        <img src={wheelImg} alt="" className="img-fluid " width={35} />
                                    </div>
                                    <div className='me-2 fw-bold '>Player 5</div>
                                </div>
                                <div className="fw-bold fs-6">1234 pts</div>
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LeaderBoard