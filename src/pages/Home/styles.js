import styled from "styled-components";

const headerUrl = `${process.env.PUBLIC_URL}/images/header-image.webp`
const pic1Url = `${process.env.PUBLIC_URL}/images/random-profile.webp`

export const HeaderSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    background-color: #F2EDE3;
    ${'' /* padding: 5rem; */}

    & .header-img {
        margin: auto;
        background-image: url(${headerUrl});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
        width:100%;
        height: 100%;

        & img {
            max-width: 100%;
            height: auto;
        }
    }

    & .header-content{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        width: 100%;
        flex-direction: column;

        & div{
            max-width: 500px;
        }
    }
`

export const ProfileInfoContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    height: 90vh;

    & .column.image {
        margin: auto;
        background-image: url(${pic1Url});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        width:100%;
        height: 100%;
        
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
    height: 80vh;

    & .service-row {
        margin: 0 5rem;
        overflow: hidden;
        padding: 10px 0;
        background-color: white;
        white-space: nowrap;
        display: flex;
        gap: 2rem;

        &:hover .service-content {
            animation-play-state: paused;
        }

        & .service-content {
            display: flex;
            gap: 2rem;
            animation: 70s slide infinite linear;

            & .service-image {
                position: relative;
                width: 400px;
                height: 300px;

                & img {
                    width: 400px;
                    height: 300px;
                }

                & span {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 1rem 0;
                    width: 400px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    z-index: 1;
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                }
            }
        }

        @keyframes slide {
            from{
                transform: translateX(0);
            }
            to{
                transform: translateX(-100%);
            }
        }
    }
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
