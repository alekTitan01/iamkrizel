import styled from 'styled-components';

export const ToolTipContainer = styled.div`
    position: relative;
    display: inline-block;

    & .tooltiptext {
        visibility: hidden;
        background-color: #22333A;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        width: 120px;
        bottom: 120%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 1s;
    }

    & .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 100%; /* At the bottom of the tooltip */
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    &:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
`