import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "./wheel.css";
let pointerImg = "/Assets/images/Asset-6.png"

const Wheels = ({ data }) => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [rouletteData, setRouletteData] = useState(data || []);

    const handleSpinClick = () => {

        if (data && data.length > 0) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        } else {
            console.error("Data array is empty or undefined.");
        }
    };

    useEffect(() => {
        const addShortString = data.map((item) => {
            return {
                completeOption: item.text,
                option:
                    item.text.length >= 30
                        ? item.text.substring(0, 30).trimEnd() + "..."
                        : item.text
            };
        });
        setRouletteData(addShortString);
    }, [data]);

    useEffect(() => {
        if (mustSpin) {
            // Play audio when the wheel starts spinning
            const audio = new Audio("/assets/audio/wheel-spinning.mp3"); // Provide the path to your audio file
            audio.loop = true;
            audio.play();
            return () => {
                // Stop audio when the wheel stops spinning
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [mustSpin]);

    return (
        <>
            <div className="roulette-container align-items-center">
                <Wheel
                    mustStartSpinning={mustSpin}
                    spinDuration={[0.2]}
                    prizeNumber={prizeNumber}
                    data={rouletteData}
                    outerBorderColor={["#914900"]}
                    outerBorderWidth={[9]}
                    innerBorderColor={["white"]}
                    radiusLineColor={["#914900"]}
                    radiusLineWidth={[2]}
                    textColors={["black"]}
                    textDistance={55}
                    fontSize={[24]}
                    backgroundColors={[
                        "white",
                        "#914900",

                    ]}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                    pointerProps={{
                        src: pointerImg // Provide the path to the new image
                    }}
                />
                <button className="button roulette-button" onClick={handleSpinClick}>
                    SPIN
                </button>
            </div>
            <br />
            <div className="text-center">
                <button className="button-14" role="button" onClick={handleSpinClick}
                    disabled={mustSpin}>
                    <div className="button-14-top fw-bold fs-1 ">SPIN NOW</div>
                    <div className="button-14-bottom"></div>
                    <div className="button-14-base"></div>
                </button>
            </div>
            <div className="text-center">
                <div className="button-85 text-center fw-bold fs-2 my-3">
                    {!mustSpin ? "You won " + rouletteData[prizeNumber].completeOption + " points" : "Best of luck..."}
                </div>
            </div>


        </>
    );
};

export default Wheels;
