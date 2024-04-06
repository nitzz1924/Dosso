import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


let rewardImg = "https://cdn-icons-png.flaticon.com/128/2282/2282531.png"
let magicImg = "https://cdn-icons-png.flaticon.com/512/4338/4338712.png"
let spinsImg = "https://cdn-icons-png.flaticon.com/512/8146/8146784.png"
let offerImg = "https://cdn-icons-png.flaticon.com/512/776/776627.png"
let tackerImg = "https://cdn-icons-png.flaticon.com/512/5694/5694967.png"
let scholarshipImg = "https://cdn-icons-png.flaticon.com/512/3769/3769879.png"

const jobVacancy = [
    {
        id: 1,
        img: rewardImg,
        title: "Refer And Earn"
    },
    {
        id: 2,
        img: magicImg,
        title: "Weekly Magic"

    },
    {
        id: 3,
        img: spinsImg,
        title: "Spins"
        
    },
    {
        id: 4,
        img: offerImg,
        title: "Offer"
        
    },
    {
        id: 5,
        img: tackerImg,
        title: "Spends Tracker"
        
    },
    {
        id: 6,
        img: scholarshipImg,
        title: "Scholarship"
        
    },
];


const RewardGrid = () => {
    return (
        <React.Fragment>
            <Col lg={12}>
                <div className="d-flex">
                    <h4 className="card-title mb-4 flex-grow-1">Reward And More</h4>
                    {/* <div>
                        <Link to="/job-list" className="btn btn-primary btn-sm">View All <i className="bx bx-right-arrow-alt"></i></Link>
                    </div> */}
                </div>
            </Col>
            <Row className='px-2'>
                {(jobVacancy || []).map((item, key) => (
                    <Col className='col-4 px-1' key={key}>
                        <Card>
                            <CardBody className="py-3 px-1">
                                <div className="text-center">
                                    <img src={item.img} alt="" className="avatar-sm" />
                                    <Link to="/job-details" className="text-body">
                                        <div className="mt-4 mb-2 text-warning">{item.title}</div>
                                    </Link>
                                    {/* <p className="mb-0 text-muted">Themesbrand</p> */}
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
}

export default RewardGrid;