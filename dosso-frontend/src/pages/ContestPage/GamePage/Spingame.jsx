import React from 'react'
import { Container, Row, Col } from "reactstrap";

const Spingame = () => {

    document.title = "Spingame";

    return (
        <div>
            <div className="page-content">
                <Container fluid >
                    <Row className="justify-content-center">
                        <Col lg="3" className="p-0">
                            <div className="fw-bold col-12 pb-2 fs-5 text-warning">
                                Spingame page
                            </div>

                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Spingame