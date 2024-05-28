import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";
let IMG = "Assets/images/google-scratch-card.jpg";
let reward = "Assets/images/gift-box.png";
import axios from "axios"
import axiosRetry from "axios-retry"
import { getLocalData } from "services/global-storage"
import config from "constants/config"
import ConfettiExplosion from 'react-confetti-explosion';

const Rewards = () => {
    document.title = "Rewards";
    const [loading, setLoading] = useState(true)

    const location = useLocation();
    const navigate = useNavigate();
    axiosRetry(axios, { retries: 3 })
    // Default values in case location.state is null
    const data = location.state
    const [contestData, setContestData] = useState([])
    const [rewardClaimed, setRewardClaimed] = useState(false)
    const [isExploding, setIsExploding] = useState(false);
    console.log("Player Data:", data);

    const mycontests = async () => {
        try {
            const response = await axios.get(
                config.apiUrl + "mycontests/" + getLocalData("userId"),
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            console.log("My Contests Data : ", response.data)
            setContestData(response.data)
        } catch (error) {
            console.log("error", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        mycontests()
    }, [])

    if (loading) {
        return <div>Loading......</div>
    }
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
                        duration={10000}
                        particleCount={1000}
                        width={1500}
                    />}
                <Container fluid className="">
                    <Row className="justify-content-center">
                        <div className="col-lg-3 d-flex justify-content-between align-content-center my-2">
                            <div className="fs-4 fw-bold text-dark">{data.title || 'N/A'}</div>
                            <Button onClick={() => navigate(-1)} className="btn btn-soft-secondary waves-effect waves-light fw-bold">
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
                                        <div className='fs-4'>Congratulations! <br />You WON!</div>
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
                                                    <div className='fs-4'>Congratulations! <br />You WON!</div>
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
        </>
    );
};

export default Rewards;
