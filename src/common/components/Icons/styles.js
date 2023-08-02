import styled from 'styled-components';

export const SpinnerContainer = styled.svg`
    position: relative;
    animation: rotate 2s linear infinite;

    & circle {
        width: 100%;
        height: 100%;
        fill: none;
        stroke-width: 5;
        stroke: #00a1ff;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        stroke-dasharray: 220;
        stroke-dashoffset: 220;
        animation: animate 4s linear infinite;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        
    }

    @keyframes animate {
        0%, 100% {
            stroke-dashoffset: 220;
        }
        50% {
            stroke-dashoffset: 0;
        }
        50.1% {
            stroke-dashoffset: 440;
        }
    }
`