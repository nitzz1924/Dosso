import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"
import { AutoPlay } from "@egjs/flicking-plugins";

// Carousel images
const img1 = "https://admin.dosso21.com/uploads/1716641240.jpg"
const img2 = "https://admin.dosso21.com/uploads/1716641279.jpg"
const img3 = "https://admin.dosso21.com/uploads/1716641305.jpg"
const img4 = "https://admin.dosso21.com/uploads/1716641328.jpg";
const img5 = "https://admin.dosso21.com/uploads/1716641354.jpg";
const img6 = "https://admin.dosso21.com/uploads/1716641373.jpg";


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
                    <img src={img1} className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='h-50 slider-card' >
                    <img src={img2} className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='h-50 slider-card' >
                    <img src={img3} className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='h-50 slider-card'>
                    <img src={img4} className="img-fluid rounded" alt="Responsive image" />
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
