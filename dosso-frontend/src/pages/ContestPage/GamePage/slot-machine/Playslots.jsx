import React, { useState, useEffect } from 'react';

const Playslots = () => {
    // const slotSymbols = [
    //     Array.from({ length: 12 }, () => Math.floor(Math.random() * 9) + 1),
    //     Array.from({ length: 12 }, () => Math.floor(Math.random() * 9) + 1),
    //     Array.from({ length: 12 }, () => Math.floor(Math.random() * 9) + 1),
    // ];
    const slotSymbols = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        
      ];

    function createSymbolElement(symbol) {
        const div = document.createElement('div');
        div.classList.add('symbol');
        div.textContent = symbol;
        return div;
    }

    let spun = false;
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

            symbols.appendChild(createSymbolElement('❓'));

            for (let i = 0; i < 3; i++) {
                slotSymbols[index].forEach(symbol => {
                    symbols.appendChild(createSymbolElement(symbol));
                });
            }

            const totalDistance = symbolCount * symbolHeight;
            const randomOffset = -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight;
            symbols.style.top = `${randomOffset}px`;

            symbols.addEventListener('transitionend', () => {
                completedSlots++;
                if (completedSlots === slots.length) {
                    logDisplayedSymbols();
                }
            }, { once: true });
        });

        spun = true;
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
        const slots = document.querySelectorAll('.slot');
        const displayedSymbols = [];

        slots.forEach((slot, index) => {
            const symbols = slot.querySelector('.symbols');
            const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
            const displayedSymbol = slotSymbols[index][symbolIndex];
            displayedSymbols.push(displayedSymbol);
        });

        console.log(displayedSymbols);
    }

    useEffect(() => {
        spin(); // Call spin when component mounts
    }, []);

    return (
        <div className="container mb-3">
            <div className="slotcontainer">
                {slotSymbols.map((symbols, index) => (
                    <div key={index} className="slot">
                        <div className="symbols">
                            {spun &&
                                symbols.map((symbol, i) => (
                                    <div key={i} className="symbol">
                                        {symbol}
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='d-flex justify-content-around '>
                <button className='btn btn-secondary btn-lg' onClick={spin}>Play</button>
                <button className='btn btn-secondary btn-lg' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Playslots;
