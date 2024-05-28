import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
let instantWin = "/Assets/images/instantWin.wav";
let playSound2 = "/Assets/images/metalcraking.mp3";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import config from "constants/config";
import { getLocalData } from "services/global-storage";
import Swal from "sweetalert2";
import ConfettiExplosion from 'react-confetti-explosion';

import "https://cdn.lordicon.com/lordicon.js";

const Playslots = ({ data }) => {
  const [spincount, setSpincount] = useState(7);
  const [slots, setSlots] = useState(null);
  const [spinDisabled, setSpinDisabled] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();
  const [spinResults, setSpinResults] = useState(Array.from({ length: 7 }, () => ""));
  const spinAudio = new Audio(playSound2);
  const instantWinAudio = new Audio(instantWin);
  const axiosInstance = axios.create();
  const [isExploding, setIsExploding] = useState(false);

  const mockAdapter = new MockAdapter(axiosInstance);

  const slotSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const createSymbolElement = (symbol) => {
    const div = document.createElement("div");
    div.classList.add("symbol");
    div.textContent = symbol;
    return div;
  };

  let spun = false;
  let spinCompleted = false;

  const spin = () => {
    if (spun) {
      reset();
    }

    const slots = document.querySelectorAll(".slot");
    let completedSlots = 0;

    slots.forEach((slot, index) => {
      const symbols = slot.querySelector(".symbols");
      const symbolHeight = symbols.querySelector(".symbol")?.clientHeight || 0;

      symbols.innerHTML = "";
      slotSymbols.forEach((symbol) => {
        symbols.appendChild(createSymbolElement(symbol));
      });

      const symbolCount = symbols.childElementCount;
      const totalDistance = symbolCount * symbolHeight;
      const randomOffset = -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight;

      symbols.style.transition = "none";
      symbols.style.top = `${randomOffset}px`;
      symbols.offsetHeight; // force reflow
      symbols.style.transition = "top 1s ease-out";

      symbols.style.top = `${randomOffset + totalDistance}px`;

      symbols.addEventListener(
        "transitionend",
        () => {
          completedSlots++;
          if (completedSlots === slots.length && !spinCompleted) {
            logDisplayedSymbols();
            spinCompleted = true;
          }
        },
        { once: true }
      );
    });

    spun = true;
    setSpinDisabled(true);
  };

  const reset = () => {
    const slots = document.querySelectorAll(".slot");

    slots.forEach((slot) => {
      const symbols = slot.querySelector(".symbols");
      symbols.style.transition = "none";
      symbols.style.top = "0";
    });
  };

  const InsertLastSpin = async (newTotalSum) => {
    try {
      const dataList = [
        {
          studentid: getLocalData("userId"),
          contestid: data.id,
          point: newTotalSum,
          playcontestid: data.playcontestid,
          status: 1,
        },
      ];

      mockAdapter.onPost(config.apiUrl + "InsertLastSpin").reply(200, { success: true });
      await axios.post(config.apiUrl + "InsertLastSpin", dataList[0], {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logDisplayedSymbols = () => {
    if (!slots) return;
    const displayedSymbols = [];

    slots.forEach((slot) => {
      const symbols = slot.querySelector(".symbols");
      const symbolHeight = symbols.querySelector(".symbol")?.clientHeight || 0;
      const symbolIndex = Math.abs(parseInt(symbols.style.top, 10)) / symbolHeight;
      const displayedSymbol = slotSymbols[symbolIndex % slotSymbols.length];
      displayedSymbols.push(displayedSymbol);
    });

    setSpinDisabled(false);
    const newSpincount = spincount - 1;
    setSpincount(newSpincount);

    const newSpinResult = parseInt(displayedSymbols.join(""));
    setSpinResults((prevSpinResults) => {
      const updatedResults = [...prevSpinResults];
      updatedResults[7 - newSpincount] = newSpinResult;
      return updatedResults;
    });

    const newTotalSum = totalSum + newSpinResult;
    setTotalSum(newTotalSum);

    instantWinAudio.play();

    if (newSpincount <= 0) {
      setGameComplete(true);
      setSpinDisabled(true);
      InsertLastSpin(newTotalSum);

      setIsExploding(true);

      Swal.fire({
        title: "Game Over!",
        html: '<lord-icon src="https://cdn.lordicon.com/ywkwpwhe.json" trigger="hover" style="width:250px;height:250px"></lord-icon>',
        showConfirmButton: true,
        confirmButtonText: "View Leaderboard",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/leaderboard", { state: data });
          Swal.fire('Thanks For Playing');
        }
      });
    }
  };

  useEffect(() => {
    if (!slots) {
      const slots = document.querySelectorAll(".slot");
      setSlots(slots);
      spin();
      setSpinDisabled(false);
    }
  }, [slots]);

  const handlechange = () => {
    spin();
    spinAudio.play();
  };

  return (
    <>
      <div className="mb-3 ">
        {isExploding && (
          <ConfettiExplosion force={1} duration={10000} particleCount={1000} width={1500} />
        )}
        <Container fluid>
          <Row className="justify-content-center">
            <div className="button-ring button-ring-sq">
              <div className="gamearea py-5 my-2">
                <video className="video-background" autoPlay loop muted>
                  <source src="/Assets/images/gamebg.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content-overlay">
                  <div className="slotcontainer">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div key={index} className="slot linear me-1">
                        <div className="symbols text-black">
                          {spun &&
                            slotSymbols.map((symbol, i) => (
                              <div key={i} className="symbol ">
                                {symbol}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-around ">
                    {gameComplete ? (
                      <div className="d-flex flex-column ">
                        <div className="fw-bold fs-1 text-white text-uppercase text-center">
                          Turn Over!!!
                        </div>
                        <button
                          onClick={() => navigate("/leaderboard", { state: data })}
                          className="btn btn-light btn-lg"
                        >
                          View Leaderboard
                        </button>
                      </div>
                    ) : (
                      <button
                        className={(spinDisabled === false ? " playbtn text-warning  " : " ") + "btn btn-dark   btn-lg w-75 "}
                        disabled={spinDisabled}
                        onClick={handlechange}
                      >
                        {spinDisabled === false ? "Play Round " : "Wait..."}
                        <span>({spincount}/7)</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <Row className="justify-content-center mt-3">
            <Col className="d-flex flex-column shadow-lg rounded p-3">
              {spinResults.map((result, index) => (
                <div key={index}>
                  {index === 0 && result === "" ? (
                    <div className="fs-4 fw-bold text-center w-100  pt-1">Spin Results</div>
                  ) : (
                    <div className="resultTab  fs-4 mt-2 shadow px-2 d-flex justify-content-between ">
                      <span className="text-dark fw-bold">{`Round ${index} :`}</span>{" "}
                      <span className="fw-bolder text-success">{`${result}`}</span>
                    </div>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Playslots;
