import React from 'react'
import { Container, Row, Col } from "reactstrap";

import Leaderboard from './LeaderBoard';
import Wheel from './spin-wheel/Wheel';
import Playslots from './slot-machine/Playslots';


const Spingame = () => {

    document.title = "Spingame";

    return (
        <div>
            <div className="page-content  ">
                <Container  className=''>
                    <Row className="justify-content-center ">
                        <Col lg="3" className="py-5  gamearea" id="">
                            <div className="fw-bold col-12 pb-2 fs-1 text-white text-uppercase text-center">
                                Spin To Play
                            </div>
                            
                            {/* <DraggeableForm /> */}
                            <Playslots />
                        </Col>
                    </Row>
                </Container>
                <Container  >
                    <Row className="justify-content-center mt-3">
                        <Col lg="12" className="">
                            <Leaderboard />
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Spingame