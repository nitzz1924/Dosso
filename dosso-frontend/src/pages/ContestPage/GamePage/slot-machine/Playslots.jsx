import React, { useState, useEffect } from 'react';

const Playslots = () => {

    const [spincount, setSpincount] = useState(7)
    const [slots, setSlots] = useState(null);
    const [spinDisabled, setSpinDisabled] = useState(false);
    const [gameComplete, setGameComplete] = useState(false);
    const [totalSum, setTotalSum] = useState(0);

    let spinResultSum = 0;

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


        let spinResult = parseInt(displayedSymbols.join(''));
        const newTotalSum = totalSum + spinResult; // Calculate the new total sum
        setTotalSum(newTotalSum);

        console.log(displayedSymbols, "spinResult", spinResult, "totalSum", totalSum, "newTotalSum", newTotalSum);

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
        <div className="container mb-3">
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
                    <div className='fw-bold fs-1 text-white text-uppercase text-center'>Game Finished</div>
                ) : (
                    <button className='btn btn-light btn-lg w-75' disabled={spinDisabled} onClick={spin}>Play Round <span>({spincount}/7)</span></button>
                )}

                {/* <button className='btn btn-secondary btn-lg' onClick={reset}>Reset</button> */}
            </div>
        </div>
    );
};

export default Playslots;
