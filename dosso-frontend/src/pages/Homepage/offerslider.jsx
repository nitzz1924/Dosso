import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"

const OfferSlider = ({title}) => {
    return (
        <div className="offer-slider-container">

            <Row className="my-2">
                <Col className="d-grid align-content-center">
                    <div className="fs-5 fw-bold text-secondary">{title}</div>
                </Col>
                {/* <Col><div className="fs-6 float-end border rounded-pill bg bg-danger-subtle py-2 px-3  border-danger-subtle text-white">Spin Remaining: 105</div></Col> */}
            </Row>
            <Flicking
                align="prev"
                horizontal={true}
                circular={true}
                className="flicking-wrapper"
                resizeOnContentsReady={true}
                renderOnlyVisible={true}
            >
                <div className='card slider-card'>
                    <img src="https://www.csregypt.com/wp-content/uploads/2019/09/download-11.jpg" className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='card slider-card'>
                    <img src="https://avatars.mds.yandex.net/i?id=03b5f5cbda60b73b7be6f1b18b75d8c6b81b2bb3-9068727-images-thumbs&n=13" className="img-fluid rounded" alt="Responsive image" />
                </div>
                
            </Flicking>
        </div>
    )
}

export default OfferSlider;
