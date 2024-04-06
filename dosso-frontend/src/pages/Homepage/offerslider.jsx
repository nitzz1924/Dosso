import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"

const OfferSlider = ({title}) => {
    return (
        <div className="offer-slider-container">

            <Row className="my-2">
                <Col className="d-grid align-content-center">
                    <div className="fs-5 fw-bold ">{title}</div>
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
                    <img src="https://speaklive.id/wp-content/uploads/2022/03/8.-Beasiswa-Kuliah-Luar-Negeri-Tanpa-Toefl.jpg" className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='card slider-card'>
                    <img src="https://scholarship-positions.com/wp-content/uploads/2021/06/PhD-International-Scholarships-17-768x448.png" className="img-fluid rounded" alt="Responsive image" />
                </div>
                <div className='card slider-card'>
                    <img src="https://www.top10about.com/wp-content/uploads/2017/04/Scholarships-to-Study-in-Canada-for-Students.jpg" className="img-fluid rounded" alt="Responsive image" />
                </div>
            </Flicking>
        </div>
    )
}

export default OfferSlider;
