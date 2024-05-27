import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';

const Notifications = () => {
    document.title = "Notifications";
    const navigate = useNavigate();

    // Example notification data
    const notifications = [
        {
            id: 1,
            title: "Admin Message",
            message: "Available BalanceAvailable BalanceAvailable BalanceAvailable Balance",
            time: "5:10pm",
        },
        {
            id: 2,
            title: "Admin Message",
            message: "Available BalanceAvailable BalanceAvailable BalanceAvailable Balance",
            time: "6:20pm",
        },
        // Add more notifications as needed
    ];

    return (
        <div>
            <div className="page-content">
                <Container fluid >
                    <Row className="justify-content-center">
                        <div className="col-lg-3 d-flex justify-content-between align-content-center my-2">
                            <div className="fs-3 fw-bold text-center">Inbox</div>
                            <Button onClick={() => navigate('/contests')} className="btn btn-soft-secondary waves-effect waves-light fw-bold">
                                Back
                            </Button>
                        </div>
                    </Row>
                    <Row className="justify-content-center my-3 p-0">
                        <Col lg="3" className="p-0">
                            {notifications.map(notification => (
                                <Card className='shadow-lg mb-3 rounded-3' key={notification.id}>
                                    <CardHeader className='bg-dark p-2 text-warning d-flex justify-content-between rounded'>
                                        <div className='fw-bold'>{notification.title}</div>
                                        <div className='text-end text-white'>Time: {notification.time}</div>
                                    </CardHeader>
                                    <CardBody className="border-top bg-subtle-success">
                                        <Row>
                                            <Col>
                                                <p className="text-muted mb-2">{notification.message}</p>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Notifications;
