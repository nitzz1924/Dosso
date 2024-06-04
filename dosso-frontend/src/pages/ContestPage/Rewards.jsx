import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";
let IMG = "Assets/images/google-scratch-card.jpg";
let reward = "Assets/images/gift-box.png";
import axios from "axios"
import axiosRetry from "axios-retry"
import ConfettiExplosion from 'react-confetti-explosion';
import config from "constants/config"

const Rewards = () => {
    document.title = "Rewards";
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    axiosRetry(axios, { retries: 3 })
    const [getPoints, setGetPoints] = useState([])
    const data = location.state
    const playcontestid = data.playcontestid;
    const [rewardClaimed, setRewardClaimed] = useState(() => {
        const storedClaims = JSON.parse(localStorage.getItem('rewardClaims')) || {};
        return storedClaims[playcontestid] || false;
    });
    const [isExploding, setIsExploding] = useState(false);

    const subjects = ["Sanskrit", "English", "Maths", "Hindi", "Science", "Sanskrit", "Social Science", "General Knowledge"];


    const getpoints = async (contestId) => {
        try {
            const response = await axios.get(
                config.apiUrl + "getpoints/" + contestId,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                }
            );
            console.log("My getpoints Data : ", response.data);
            // setGetPoints(response.data);
            // Parse the spins from string to array
            const parsedData = response.data.map(item => ({
                ...item,
                spins: item.spins.split(',').map(Number),
            }));

            setGetPoints(parsedData);
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
    };

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        const storedClaims = JSON.parse(localStorage.getItem('rewardClaims')) || {};
        storedClaims[playcontestid] = rewardClaimed;
        localStorage.setItem('rewardClaims', JSON.stringify(storedClaims));
        console.log(storedClaims);
        console.log("ashkjafs", data);
        getpoints(data.id)
    }, [rewardClaimed, playcontestid]);


    const runConfettiii = (() => {
        setIsExploding(true);
        setRewardClaimed(true);
    })

    return (
        <>
            <div className="page-content">
                {isExploding &&
                    <ConfettiExplosion
                        force={1}
                        duration={5000}
                        particleCount={250}
                        width={1500}
                    />}
                <Container fluid className="">
                    <Row className="justify-content-center">
                        <div className="col-lg-3 d-flex justify-content-between align-content-center my-2">
                            <div className="fs-4 fw-bold text-dark">{data.title || 'N/A'}</div>
                            <Button onClick={() => navigate(-1)} className="btn btn-soft-dark waves-effect waves-light fw-bold">
                                Back
                            </Button>
                        </div>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className="col-lg-3 my-2 text-center">
                            <div className="fs-4 fw-bold text-warning bg-dark rounded p-2">Rank: #{data.contestrank || 'N/A'}</div>

                        </div>

                        {rewardClaimed ? (
                            <div className="row d-flex justify-content-center ">
                                <div className='col-lg-3 w-100 h-100 text-center align-content-center '>
                                    <div className="text-muted my-2">You have claimed this reward</div>
                                    <div className="text-black rewardCard fw-bold scratchCard p-4 shadow-lg ">
                                        <div className='mb-2 '><img src={reward} alt="reward" width={75} /></div>
                                        <div className='fs-4'>WOW</div>
                                        <div className='fs-1 text-warning text-bold'>
                                            {data.contestwinprice || 'N/A'}
                                        </div>
                                    </div>
                                    <div className="text-muted my-2">Now you can send request to for payment</div>

                                </div>

                            </div>
                        ) : (
                            <>
                                <div className="row d-flex justify-content-center ">
                                    <div className="text-muted my-2 text-center">Scratch card to claim your reward</div>
                                    <div className="d-flex justify-content-center ">
                                        <ScratchCard
                                            width={300}
                                            height={300}
                                            image={IMG}
                                            finishPercent={70}
                                            customBrush={CUSTOM_BRUSH_PRESET}
                                            onComplete={() => runConfettiii()}
                                        >

                                            <div className='w-100 h-100 text-center align-content-center '>
                                                <div className="text-black fw-bold scratchCard p-4 shadow-lg ">
                                                    <div className='mb-2'><img src={reward} alt="reward" width={75} /></div>
                                                    <div className='fs-4'>WOW!</div>
                                                    <div className='fs-1 text-warning text-bold'>
                                                        {data.contestwinprice || 'N/A'}
                                                    </div>
                                                </div>
                                            </div>
                                        </ScratchCard>
                                    </div>
                                </div>
                            </>
                        )}


                    </Row>
                </Container>
            </div>


            <Container fluid className="">
                <Row className="justify-content-center">
                    <div className="col-lg-3 d-flex justify-content-between align-content-center"></div>
                    <Button
                        onClick={() => toggle()}
                        className="btn btn-success waves-effect w-50 waves-light fw-bold shadow-lg fs-6 text-uppercase rounded-3"
                    >
                        View Marksheet
                    </Button>
                </Row>
            </Container>


            {/* <!-- Modal --> */}
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>
                    <span className="text-black fw-bold fs-4 text-center">Marksheet</span>

                </ModalHeader>
                <ModalBody>
                    {(getPoints || []).map((result, index) => (
                        <div key={index}>
                            {data.playcontestid === result.playcontestid && (
                                <div>
                                    {result.spins.map((spin, i) => (
                                        <div className="resultTab fs-4 mt-2 shadow px-2 d-flex justify-content-between" key={i}>
                                            <span className="text-dark fw-bold">
                                                {subjects[i] ? subjects[i] : `Round ${i + 1}`} :
                                            </span>
                                            <span className="fw-bolder text-success">{spin}</span>
                                        </div>
                                    ))}
                                    <div className="text-center bg-dark text-warning mt-2 rounded fs-4 fw-bold">Total: {result.point} pts</div>

                                </div>
                            )}
                        </div>
                    ))}

                </ModalBody>
            </Modal>

        </>
    );
};

export default Rewards;
