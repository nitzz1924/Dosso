import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";

let players = "https://cdn-icons-png.flaticon.com/512/5619/5619093.png";

const Rounds = (props) => {
    const location = useLocation();
    const data = location.state;

    document.title = "Rounds";
    return (
        <div>
            <div className="page-content">
                <Container fluid >
                    <Row className="justify-content-center">
                        <Col lg="3" className="p-0">
                            <div className="fw-bold col-12 pb-2 fs-2 text-warning text-center">
                                {data.title}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className=''>
                    <Row className="flex-column align-items-center px-0 justify-content-center">
                        <Col lg={3} className="">
                            <Card className="border border-success rounded-2 border-3 bg-black">
                                <CardHeader className="bg-transparent border-bottom text-capitalize text-center">
                                    <h3>
                                        <span className='badge rounded badge-soft-success fs-4'>
                                            Active Round 1
                                        </span>
                                    </h3>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle className="mt-0 text-center">
                                        <div>
                                            <img src={players} alt="" className="avatar-sm" />
                                            <div className="text-warning" >
                                                85 Playing
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <CardText className=" text-center">
                                        Top 25 will qualify for next round
                                    </CardText>
                                    <Link
                                        to="/spingame"
                                        className="btn btn-success w-100 fs-4 rounded-3"
                                    >
                                        Play Now!
                                    </Link>
                                </CardBody>
                                <CardFooter className=" border-top text-center">
                                    End Time: <span className='text-danger'>
                                        5 Hours
                                    </span> left
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg={3} className="">
                            <Card className="border border-secondary rounded-2 border-3 bg-black">
                                <CardHeader className="bg-transparent border-bottom text-capitalize text-center">
                                    <h3>
                                        <span className='badge rounded badge-soft-secondary fs-4'>
                                            Round 2
                                        </span>
                                    </h3>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle className="mt-0 text-center">
                                        <div>
                                            <img src={players} alt="" className="avatar-sm" />
                                            <div className="text-warning" >
                                                0 Playing
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <CardText className=" text-center">
                                        Top 20 will qualify for next round
                                    </CardText>
                                    <Link
                                        to="#"
                                        className="btn btn-secondary text-bg-secondary w-100 fs-4 rounded-3">
                                        <i className="bx bx-lock-alt me-1"></i>Locked!
                                    </Link>
                                </CardBody>
                                <CardFooter className="border-top text-center">
                                    End Time: -/-
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col lg={3} className="">
                            <Card className="border border-secondary rounded-2 border-3 bg-black">
                                <CardHeader className="bg-transparent border-bottom text-capitalize text-center">
                                    <h3>
                                        <span className='badge rounded badge-soft-secondary fs-4'>
                                            Round 3
                                        </span>
                                    </h3>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle className="mt-0 text-center">
                                        <div>
                                            <img src={players} alt="" className="avatar-sm" />
                                            <div className="text-warning" >
                                                0 Playing
                                            </div>
                                        </div>
                                    </CardTitle>
                                    <CardText className=" text-center">
                                        Top 10 will qualify for next round
                                    </CardText>
                                    <Link
                                        to="#"
                                        className="btn btn-secondary text-bg-secondary w-100 fs-4 rounded-3">
                                        <i className="bx bx-lock-alt me-1"></i>Locked!
                                    </Link>
                                </CardBody>
                                <CardFooter className="border-top text-center">
                                    End Time: -/-
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Rounds