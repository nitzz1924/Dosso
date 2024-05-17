import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"
import { AutoPlay } from "@egjs/flicking-plugins";

// Carousel images
const img3 = "Assets/images/1.jpg"
const img4 = "Assets/images/2.jpg"
const img5 = "Assets/images/3.jpg"
const img6 = "Assets/images/4.jpg";


const BannerSlider = ({ title }) => {

    const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];

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
                plugins={plugins}
                horizontal={true}
                circular={true}
                className="flicking-wrapper"
                resizeOnContentsReady={true}
                renderOnlyVisible={true}
                adaptive={false}
                inputType={["touch", "mouse"]}
                preventDefaultOnDrag={true}
                moveType={["strict", { count: 1 }]}
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
