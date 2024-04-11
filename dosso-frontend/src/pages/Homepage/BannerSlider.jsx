import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"


// Carousel images
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
const img6 = "https://vogazeta.ru/uploads/full_size_1695895950-0b296d8b894db0ee5af75263cd82b79d.jpg";


const BannerSlider = ({ title }) => {
    return (
        <div className="offer-slider-container">

            <Row className="my-2">
                <Col className="d-grid align-content-center">
                    <div className="fs-5 fw-bold text-white">{title}</div>
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
            <div className='h-50 slider-card'>
                <img src="https://vogazeta.ru/uploads/full_size_1695895950-0b296d8b894db0ee5af75263cd82b79d.jpg" className="img-fluid rounded" alt="Responsive image" />
            </div>
            <div className='h-50 slider-card'>
                <img src={img5} className="img-fluid rounded" alt="Responsive image" />
            </div>
            <div className='h-50 slider-card'>
                <img src={img4} className="img-fluid rounded" alt="Responsive image" />
            </div>
            <div className='h-50 slider-card'>
                <img src={img3} className="img-fluid rounded" alt="Responsive image" />
            </div>
        </Flicking>
        </div >
    )
}

export default BannerSlider;
