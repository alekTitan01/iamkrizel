import styled from "styled-components";

export const HeaderSection = styled.section`
    display: flex;
    align-items: center;
    gap: 7rem;
    padding: 5rem;
    justify-content: center;
    flex: wrap;

    & .header-img {
        max-height: 80vh;
        max-width: 30vw;

        & img {
            max-width: 100%;
            height: auto;
        }
    }

    & .header-content{
        max-width: 500px;
    }
`

export const ProfileInfoContainer = styled.section`
    padding: 7rem;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns with equal width */
    gap: 7rem;

    & .column.image {
        margin: auto;
        max-height: 80vh;

        & img {
            max-width: 100%;
            height: auto;
        }
    }

    & .column.content {
        margin:auto;
        max-height: 450px;
        height: 100%;
        display:flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        & button {
            width: fit-content;
            padding: 1rem 2rem;
            border-radius: 5px;
            font-size: 16px;
            border: 1px solid #ccc;
            background-color: white;
            transition: background-color 0.3s ease;
            cursor: pointer;

            &:hover {
                background-color: red;
                color: white;
            }
        }
    }
`

export const ServicesContainer = styled.section`
    padding: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
`

export const CertificatesContainer = styled.section`
    padding: 0 7rem 5rem 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    height: auto;

    & .column-container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two columns with equal width */
        gap: 7rem;
    }
`
