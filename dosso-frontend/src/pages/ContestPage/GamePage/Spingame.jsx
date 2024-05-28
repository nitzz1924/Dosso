import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Playslots from './slot-machine/Playslots';

import { Link, useLocation, useNavigate } from "react-router-dom";
const Spingame = () => {
    const location = useLocation();
    const data = location.state;
    console.log("COntst id : ",data);
    document.title = "Dosso 21";

    return (
        <>
            <div className="page-content">
                <Container fluid className='mb-3'>
                    <Row className="justify-content-center ">
                        <Col lg="3" className=" ">
                            
                            <Playslots data={data} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Spingame;