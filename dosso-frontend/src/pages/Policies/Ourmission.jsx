import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Ourmission = () => {
    React.useEffect(() => {
        document.title = "Our Mission";
    }, []);

    return (
        <div>
            <div className="page-content mb-3">
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg="8" className="card p-4 rounded">

                            <h1 className="text-center fw-bold">Welcome to DOSSO21</h1>
                            <p>
                                Together, we’re building a future where education knows no bounds, where opportunities abound for everyone willing to seize them. Join us on this exhilarating journey towards a brighter tomorrow, where each step taken brings us closer to a world where every dream is within reach.
                            </p>

                            <h3 className="text-center">Our Mission</h3>
                            <p>
                                At DOSSO21 SERVICES PRIVATE LIMITED (DOSSO21), our mission transcends mere education; it’s about igniting the flames of knowledge, skill, and talent across our beloved nation. We envision a future where every individual’s potential is not just recognized but celebrated, where learning becomes a thrilling adventure rather than a mundane chore. Through our innovative educational contest services, we’re revolutionizing the way people engage with learning, making it accessible, engaging, and rewarding for all.
                            </p>
                            <p>
                                Our mission is to make our country educated in their skills and talent. We want to promote education with the help of DOSSO21 SERVICES PRIVATE LIMITED (DOSSO21) educational contest services so that it can be easier for everyone to help themselves and their kids, siblings, and relatives for their wonderful future growth.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Ourmission;
