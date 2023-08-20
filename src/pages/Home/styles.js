import styled from "styled-components";
import { pic1Url } from '../../utils/constants';

export const HeaderSection = styled.section`
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap: 0.5rem;
    background-color: #EAE9EE;
    height: 100dvh;

    & .header-content{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        width: 100%;
        flex-direction: column;

        & div{
            max-width: 500px;

            & h1 {
                font-size: 40px;
            }

            & p {
                font-size: 18px;
                line-height: 1.5;
            }
        }
    }

    & .image-content {
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
            height: 60%;
        }
    }
`

export const ProfileInfoContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    height: 70dvh;

    & .column.image {
        margin: auto;
        background-image: url(${pic1Url});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
        width:100%;
        height: 100%;
        border-radius: 0% 100% 19% 81% / 70% 25% 75% 30%;
        
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
        justify-content: center;
        max-width: 500px;
        ${'' /* justify-content: space-between; */}

        & p {
            line-height: 1.5;
            font-size: 18px;
        }
    }
`

export const ServicesContainer = styled.section`
    padding: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40rem;

    & h1 {
        font-size: 35px;
    }

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
                overflow: hidden;
                border-radius: 5px;

                & img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                & .service-info {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 1rem 0;
                    width: 400px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    z-index: 1;
                    background: rgba(34, 51, 58, 0.3);
                    backdrop-filter: blur(2px);
                    -webkit-backdrop-filter: blur(2px);
                    transition: height 0.3s ease;
                    height: 20%;
                    color: #EAE9EE;
                    display: flex;
                    flex-direction: column;

                    & a {
                        opacity: 0;
                        position: absolute;
                        bottom: 20px;
                        right: 20px;
                        cursor: pointer;
                        color: #EAE9EE; 
                        text-decoration: none;
                        font-size: 16px;

                        &:hover{
                            color: #ccc;
                        }
                    }

                }

                &:hover {
                    & .service-info {
                        height: 30%;

                        & a {
                            opacity: 1;
                            transition: opacity 0.3s ease-in;
                        }
                    }
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

    & h1 {
        font-size: 35px;
    }

    & .column-container {
        display: grid;
        grid-template-columns: 1fr 1fr; /* Two columns with equal width */
        gap: 7rem;
    }
`
