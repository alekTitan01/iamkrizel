import styled from 'styled-components';

export const ActionButton = styled.button`
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    background-color: white;
    transition: background-color 0.3s ease;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #22333A;
        color: white;
    }
`