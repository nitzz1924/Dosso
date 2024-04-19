import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { Row, Col, Card, Button } from "reactstrap"


// Carousel images
const img3 = "https://nc01001395.schoolwires.net/cms/lib/NC01001395/Centricity/Domain/11228/scholarship.jpg"
const img4 = "https://media.istockphoto.com/id/1248902721/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/scholarships-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-%D1%82%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8.jpg?s=612x612&w=0&k=20&c=WD9rWj-yXguJqpqMpqd6UN4yEO7KLbQeRtZ6xT3DgVo="
const img5 = "https://avatars.mds.yandex.net/i?id=8263670077f87c048402180c77c1ff53-5233821-images-thumbs&n=13"
const img6 = "https://lh6.googleusercontent.com/proxy/VksCPn0P-cLvePXG4kEcSgOi4yFnrqgoLpIyu0lwYZBaG0ltYv7g2VmGuf6nnG7GEdhJj0H4rQtD9JqrpV_qc8fib3d0hBEijR9sEPL9aTAZSbRvlBO3jgeI_M0OSlI73vJ0IkXKUt6wtVHUup3fPAsqpi3nztzWg82qVQOn";


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
