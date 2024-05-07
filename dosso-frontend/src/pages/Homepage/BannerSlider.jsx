import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"


// Carousel images
const img3 = "https://trendsarthi.com/Appdata/Mega-contest.png"
const img4 = "https://trendsarthi.com/Appdata/win-price.png"
const img5 = "https://trendsarthi.com/Appdata/Mega-contest.png"
const img6 = "https://trendsarthi.com/Appdata/win-price.png";


const BannerSlider = ({ title }) => {
    return (
        <div className="offer-slider-container">

            {/* <Row className="my-2">
                <Col className="d-grid align-content-center">
                    <div className="fs-5 fw-bold text-white">{title}</div>
                </Col>
                <Col><div className="fs-6 float-end border rounded-pill bg bg-danger-subtle py-2 px-3  border-danger-subtle text-white">Spin Remaining: 105</div></Col>
            </Row> */}
            <Flicking
                align="prev"
                horizontal={true}
                circular={true}
                className="flicking-wrapper"
                resizeOnContentsReady={true}
                renderOnlyVisible={true}
                adaptive={false}
            >
                <div className='h-50 slider-card' >
                    <img src={img4} className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='h-50 slider-card'>
                    <img src={img3} className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='h-50 slider-card'>
                    <img src={img5} className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='h-50 slider-card'>
                    <img src={img6} className="img-fluid rounded" alt="Responsive image" />
                </div>

            </Flicking>
        </div>
    )
}

export default BannerSlider;
