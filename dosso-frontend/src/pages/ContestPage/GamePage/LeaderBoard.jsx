import React, { useState, useEffect, Fragment } from 'react';
import LiverList from './liver-list/LiverList';
import { getRandomPoint, getRandomIndex } from './utils/randomNumberGenerate'



const Leaderboard = () => {

    const [livers, serLivers] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchLiverData();
        }, 3000);
        return () => clearInterval(interval)
    }, [livers])

    const fetchLiverData = async () => {
        const response = await fetch('https://webcdn.17app.co/campaign/pretest/data.json');
        let data = await response.json();
        let addPoints = getRandomPoint();
        let userIndex = getRandomIndex();

        let updateData = [...data]
        updateData[userIndex].score += addPoints
        const sortedData = updateData.sort((a, b) => b.score - a.score);
        serLivers(sortedData);
    }

    return (
        <>
            {livers.length ? (
                <LiverList livers={livers} />
            ) : (
                <div>There is no products</div>
            )}
        </>
    );
}

export default Leaderboard;