import React from 'react'
import { Container, Row, Col } from "reactstrap";
import DatatableTables from './DatatableTables';
import Leaderboard from './LeaderBoard';
import Wheel from './spin-wheel/Wheel';
import DraggeableForm from "./spin-wheel/DraggeableForm";

const Spingame = () => {

    document.title = "Spingame";

    return (
        <div>
            <div className="page-content">
                <Container fluid >
                    <Row className="justify-content-center">
                        <Col lg="3" className="p-0">
                            <div className="fw-bold col-12 pb-2 fs-1 text-black text-uppercase text-center">
                                Spin To Play
                            </div>
                            
                            <DraggeableForm />
                        </Col>
                    </Row>
                </Container>
                <Container fluid >
                    <Row className="justify-content-center">
                        <Col lg="12" className="p-0">
                            <Leaderboard />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Spingame