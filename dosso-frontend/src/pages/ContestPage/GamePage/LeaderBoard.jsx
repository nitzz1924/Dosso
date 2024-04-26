import React from 'react'
import { Container, Row, Card, CardBody } from 'reactstrap'
let wheelImg = "Assets/images/fortune-wheel.png"


const LeaderBoard = () => {
    return (
        <>
            <Container>
                <Row>
                <div className='fs-6 fw-bold '>Top 5 Ranking</div>
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
        </>
    )
}

export default LeaderBoard