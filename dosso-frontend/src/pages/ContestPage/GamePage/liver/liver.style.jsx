import styled, { css, keyframes } from 'styled-components';

export const Liver = styled.div`
    width: 100%;
    height: 100%;
`

export const RankTableOneRow = styled.div`
    width: 320px;
    height: 48px;
    top: 48px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    font-size: 16px;
`

export const RTCNumber = styled.div`
    width: 24px;
    text-align: center;
`

export const RTCProfileImageContainer = styled.div`
    background-size: 100%;
    width: 36px;
    height: 36px;
    border-radius: 5px;
    border: 2px solid gold;
`

export const RTCProfileImage = styled.img`
    border-radius: 2px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const RTCName = styled.div`

    margin-inline: 10px; 
`

const countup = keyframes`
    25% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1.0);
    }

`;

const countupAnimation = css`
    animation: ${countup} 1s ease;
  /* animation: ${countup} 5s linear infinite alternate; */
`;


export const RTCPoints = styled.div`
    flex-grow: 1;
    text-align: right;
    ${countupAnimation}
    counter-reset: count 0;
`

// const countup = css`
//   syntax: '<integer>';
//   initial-value: 0;
//   inherits: false;
// `;

// const countupAnimation = css`
//   animation: ${countup} 1s ease;
//   /* animation: ${countup} 5s linear infinite alternate; */
// `;


// export const RTCPoints = styled.div`
//   flex-grow: 1;
//   text-align: right;
//   ${countupAnimation}
//   counter-reset: count 0;
// `
