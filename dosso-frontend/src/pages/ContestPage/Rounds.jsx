import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, Progress, Nav, NavItem, NavLink, Button, TabContent, TabPane, Table } from "reactstrap";

let wheelImg = "Assets/images/fortune-wheel.png"

const Rounds = (props) => {
    const location = useLocation();
    const data = location.state;

    document.title = "Join Contest";


    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <div>
            <div className="page-content">


                <Container fluid className=''>
                    <Row className="flex-column align-items-center justify-content-center">
                        <Col lg={3} className="px-0">
                            <Card className="border shadow-lg rounded-2 border-3 ">
                                <CardHeader className=' border-bottom text-center fs-5 fw-bold '>
                                    {data.title}
                                </CardHeader>
                                <CardBody>
                                    <CardTitle className="mt-0 ">
                                        <div>
                                            <div>Prize Pool</div>
                                            <div className="text-black fs-3" >
                                                ₹ 8 Crores
                                            </div>
                                            <div className="">
                                                <Progress
                                                    animated
                                                    className="mb-1"
                                                    color="secondary"
                                                    max="1000"
                                                    value={750}

                                                    style={{
                                                        height: '15px'
                                                    }}
                                                >
                                                    750
                                                </Progress>
                                                <div className="float-start text-danger progress-text">
                                                    250 Spots left
                                                </div>
                                                <div className="float-end text-muted progress-text">
                                                    1000 Spots
                                                </div>
                                            </div>
                                        </div>
                                    </CardTitle>
                                    {/* <CardText className=" text-center">
                                        Top 25 will qualify for next round
                                    </CardText> */}
                                    <Link
                                        to="/spingame"
                                        className="btn btn-light w-100 fs-4 rounded-3 mt-3"
                                    >
                                        Join <s>₹50</s> ₹1
                                    </Link>
                                </CardBody>
                                <CardFooter className=" border-top text-center">
                                    End Time: <span className='text-danger'>
                                        5 Hours
                                    </span> left
                                </CardFooter>
                            </Card>
                        </Col>

                    </Row>
                </Container>

                <Container fluid>
                    <Row className="my-2 justify-content-center">
                        <Col lg="3" className="d-grid align-content-center shadow-lg rounded  p-3">
                            <div>
                                <Nav justified tabs>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === '1' ? 'active fw-bold text-uppercase text-black' : 'fw-bold text-uppercase text-secondary'}
                                            onClick={() => toggleTab('1')}
                                        >
                                            Winner
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === '2' ? 'active fw-bold text-uppercase text-black' : 'fw-bold text-uppercase text-secondary'}
                                            onClick={() => toggleTab('2')}
                                        >
                                            Leaderboard
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab}>

                                    {/* winner prize */}
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col sm="12">
                                                <div className='winningtable'>
                                                    <Table
                                                        hover
                                                        responsive
                                                        size=""
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    Rank
                                                                </th>
                                                                <th className='text-end'>
                                                                    WINNINGS
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" className='fs-1'>
                                                                    🥇
                                                                </th>
                                                                <td>
                                                                    ₹1 Crore
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className='fs-1'>
                                                                    🥈
                                                                </th>
                                                                <td>
                                                                    ₹7 Lakhs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className='fs-1'>
                                                                    🥉
                                                                </th>
                                                                <td>
                                                                    ₹3 Lakhs
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    # 4
                                                                </th>
                                                                <td>
                                                                    ₹2 Lakhs
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>

                                    {/* Leader Board */}
                                    <TabPane tabId="2">
                                        <Row>
                                            <Col sm="12">
                                                <div className='winningtable'>

                                                    <Container fluid className=''>
                                                        <Row>
                                                            <div className='fs-5 fw-bold my-1 text-center'>Top 5 Ranking</div>
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
                                            </Col>

                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Rounds