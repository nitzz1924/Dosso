import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Playslots from './slot-machine/Playslots';


const Spingame = () => {

    document.title = "Dosso 21";

    return (
        <>
            <div className="page-content">
                <Container fluid className=''>
                    <Row className="justify-content-center ">
                        <Col lg="3" className=" ">
                            
                            <Playslots />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Spingame;