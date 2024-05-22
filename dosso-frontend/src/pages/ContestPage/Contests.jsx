import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Contestlistslider from './components/contestlistslider';
import BannerSlider from 'pages/Homepage/BannerSlider';

const Contests = () => {
    document.title = "Home";
    return (
        <div>
            <div className="page-content">
                <Container fluid >
                    <Row className="justify-content-center">
                        <Col lg="3" className="p-0">
                            <BannerSlider />
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3 p-0">
                        <Col lg="3" className="p-0">
                            <Contestlistslider title="Live Contests" />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Contests