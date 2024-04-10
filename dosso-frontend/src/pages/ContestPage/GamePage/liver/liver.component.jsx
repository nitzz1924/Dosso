import React from 'react'
import {
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardImg,
    CardText,
    CardHeader,
    CardImgOverlay,
    CardFooter,
    CardDeck,
    Container,
} from "reactstrap";

import {
    Liver,
    RankTableOneRow,
    RTCNumber,
    RTCProfileImageContainer,
    RTCProfileImage,
    RTCName,
    RTCPoints
} from './liver.style';

const LiverRow = ({ liver, index }) => {
    const { displayName, picture, score } = liver;
    const isTopThree = index < 3;

    return (
        <Card className={`mb-2 bg-opacity-25 text-white ${isTopThree ? 'bg-success' : 'bg-warning'}`}>
            <CardBody className='p-2'>
                <Liver>
                    <RankTableOneRow >
                        <RTCNumber className="card-title border-end">{index + 1}</RTCNumber>
                        <RTCProfileImageContainer>
                            <RTCProfileImage
                                alt={`liver${displayName}`}
                                src={picture}
                            />
                        </RTCProfileImageContainer>
                        <RTCName className="card-text">{displayName}</RTCName>
                        <RTCPoints key={score}>{`${score} pt`}</RTCPoints>
                    </RankTableOneRow>
                </Liver>
            </CardBody>
        </Card>
    )
}

export default LiverRow;