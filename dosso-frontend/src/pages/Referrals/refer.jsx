import React from 'react'
import { Container, Row, Col } from "reactstrap";

let referImge = "../Assets/images/Refer.png"
let winImg = "../Assets/images/trip4win.jpg"

const refer = () => {

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
    }

    let referCode = "XYZ123"
    let playerPhone = "1324657989"

    function shareOnWhatsapp(referCode, playerPhone) {
        const message = encodeURIComponent(`Check out Dosso21, Play 4 Win! You can earn from your One Tap now!%0A%0AUse my referral code to sign up and ONE TICKET OF LUXURY OVERSEAS TOUR.%0A%0AReferral code: ${referCode}%0ADownload Doss21 App here: https://Dosso21.com`);
        const whatsappLink = `https://api.whatsapp.com/send/?phone=${playerPhone}&text=${message}`;

        window.open(whatsappLink, '_blank');
    }

    return (
        <>
            <div className="page-content  ">
                <Container className=''>
                    <Row className="justify-content-center ">
                        <Col lg="6" className="p-0">
                            <div>
                                <img src={referImge} alt="referImage" className='img-fluid rounded-3 ' />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className='my-3'>
                    <Row className="justify-content-center shadow-lg py-3 rounded-3">
                        <Col xs="4" className="">
                            <div>
                                <img src={winImg} alt="referImage" className='img-fluid rounded ' />
                            </div>
                        </Col>
                        <Col xs="8" className="align-content-center ">
                            <div>
                                <h6 className='fw-bolder fs-5' style={{ "color": "#146AB3" }}>
                                    FOR REFRENCE PERSON: <span style={{ "color": "#E74025" }}>ONE TICKET OF LUXURY OVERSEAS TOUR.</span>
                                </h6>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Container className='my-2'>
                    <Row className="">
                        <Col xs="12" className="justify-items-center d-grid">
                            <div className='p-2 '>
                                <div className='mb-3 text-center fs-5'>
                                    Your Referral code is
                                </div>
                                <div id="p1" className='mb-3 text-center text-success shadow-lg bg-white referCode'>
                                    {referCode}
                                </div>
                                <div className='d-flex justify-content-around '>
                                    <button onClick={() => copyToClipboard(document.getElementById("p1").textContent)} className='btn btn-outline-secondary fs-4'>
                                        Copy Code
                                    </button>
                                    <button onClick={() => shareOnWhatsapp( referCode, playerPhone )} className='btn btn-success fs-4'>
                                        <i className='bx bxl-whatsapp '></i> Share Code
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='text-danger fst-italic'>
                    *T&C: If the person who joined by reference of any person gets the first price then the person giving the reference is eligible for the tour.
                </div>
            </div>
        </>
    )
}

export default refer