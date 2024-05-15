import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Playslots = () => {

    const [spincount, setSpincount] = useState(7)
    const [slots, setSlots] = useState(null);
    const [spinDisabled, setSpinDisabled] = useState(false);
    const [gameComplete, setGameComplete] = useState(false);
    const [totalSum, setTotalSum] = useState(0);
    const [spinResults, setSpinResults] = useState(Array.from({ length: 8 }, () => ''));

    let newTotalSum = 0;

    const slotSymbols = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

    ];

    function createSymbolElement(symbol) {
        const div = document.createElement('div');
        div.classList.add('symbol');
        div.textContent = symbol;
        return div;
    }

    let spun = false;
    let spinCompleted = false;

    function spin() {
        if (spun) {
            reset();
        }
        const slots = document.querySelectorAll('.slot');
        let completedSlots = 0;

        slots.forEach((slot, index) => {
            const symbols = slot.querySelector('.symbols');
            const symbolHeight = symbols.querySelector('.symbol') ? symbols.querySelector('.symbol').clientHeight : 0;
            const symbolCount = symbols.childElementCount;

            symbols.innerHTML = '';

            symbols.appendChild(createSymbolElement('?'));

            for (let i = 0; i < 6; i++) {
                slotSymbols[index].forEach(symbol => {
                    symbols.appendChild(createSymbolElement(symbol));
                });
            }

            const totalDistance = symbolCount * symbolHeight;
            const randomOffset = -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight;
            symbols.style.top = `${randomOffset}px`;

            symbols.addEventListener('transitionend', () => {
                completedSlots++;
                if (completedSlots === slots.length && !spinCompleted) {
                    logDisplayedSymbols();
                    spinCompleted = true;
                }
            }, { once: true });
        });

        spun = true;
        setSpinDisabled(true);
    }

    function reset() {
        const slots = document.querySelectorAll('.slot');

        slots.forEach(slot => {
            const symbols = slot.querySelector('.symbols');
            symbols.style.transition = 'none';
            symbols.style.top = '0';
            symbols.offsetHeight;
            symbols.style.transition = '';
        });
    }

    function logDisplayedSymbols() {

        if (!slots) return;
        const displayedSymbols = [];


        slots.forEach((slot, index) => {
            const symbols = slot.querySelector('.symbols');
            const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
            const displayedSymbolIndex = (slotSymbols[index].length + symbolIndex - 1) % slotSymbols[index].length;
            const displayedSymbol = slotSymbols[index][displayedSymbolIndex];
            displayedSymbols.push(displayedSymbol);
        });

        setSpinDisabled(false);
        const newSpincount = spincount - 1;
        setSpincount(newSpincount);


        const newSpinResult = parseInt(displayedSymbols.join(''));
        setSpinResults(prevSpinResults => {
            const updatedResults = [...prevSpinResults];
            updatedResults[7 - newSpincount] = newSpinResult;
            return updatedResults;
        });

        newTotalSum = totalSum + newSpinResult; // Calculate the new total sum
        setTotalSum(newTotalSum);

        console.log(displayedSymbols, "newSpinResult", newSpinResult, "totalSum", totalSum, "newTotalSum", newTotalSum);

        if (newSpincount <= 0) {
            setGameComplete(true);
            setSpinDisabled(true);
        }

    }
    useEffect(() => {
        if (!slots) {
            // Select slots once when the component mounts
            const slots = document.querySelectorAll('.slot');
            setSlots(slots);
            spin();
            setSpinDisabled(false);
        }
    }, [slots]);


    return (
        <>
            <div className=" ">
                <Container fluid >
                    <Row className="justify-content-center">
                        <div className="gamearea py-5 mb-3">
                            <video className="video-background" autoPlay loop muted>
                                <source src="/Assets/images/gamebg.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="content-overlay">
                                <div className="fw-bold col-12 pb-2 fs-1 text-white text-uppercase text-center">
                                    Spin To Play
                                </div>
                                <div className="slotcontainer">
                                    {slotSymbols.map((symbols, index) => (
                                        <div key={index} className="slot me-1">
                                            <div className="symbols">
                                                {spun &&
                                                    symbols.map((symbol, i) => (
                                                        <div key={i} className="symbol ">
                                                            {symbol}
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='d-flex justify-content-around '>
                                    {gameComplete ? (
                                        <div className='d-flex flex-column '>
                                            <div className='fw-bold fs-1 text-white text-uppercase text-center'>Game Over</div>
                                            <Link to="/leaderbaord">
                                                <button className='btn btn-light btn-lg'>View Leaderboard</button>
                                            </Link>
                                        </div>
                                    ) : (
                                        <button className='btn btn-light btn-lg w-75' disabled={spinDisabled} onClick={spin}>Play Round <span>({spincount}/7)</span></button>
                                    )}

                                    {/* <button className='btn btn-secondary btn-lg' onClick={reset}>Reset</button> */}
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container fluid >
                    <Row className="justify-content-center mt-3">
                        <Col lg="3" className="d-flex flex-column shadow-lg rounded p-3">
                            {spinResults.map((result, index) => (
                                <div key={index}>
                                    {index === 0 && result === '' ? (
                                        <div className='fs-4 fw-bold text-center bg-black  text-white rounded mb-3'>
                                            ALL RESULTS
                                        </div>
                                    ) : (
                                        <div className='text-black fs-4 mt-2'>
                                            <span className="text-muted">{`Round ${index}:`}</span> <span className="fw-bold">{`${result}`}</span>
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
