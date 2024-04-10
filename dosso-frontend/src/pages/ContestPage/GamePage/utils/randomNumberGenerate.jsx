export const getRandomPoint = () => {
    const MIN = 500;
    const MAX = 100000;
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat * (MAX - MIN)) + MIN;
    return randomInt
}

export const getRandomIndex = () => {
    const MIN = 0;
    const MAX = 10;
    let randomFloat = Math.random();
    let randomInt = Math.floor(randomFloat * (MAX - MIN)) + MIN;
    return randomInt
}