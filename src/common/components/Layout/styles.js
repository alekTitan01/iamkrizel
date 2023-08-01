import styled from "styled-components";

export const LayoutContainer = styled.div`
    position: relative;
`

export const NavigationContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;
    background-color: transparent;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

    & .nav-logo {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    & .nav-menu {
        display: flex;
        align-items: center;
        gap: 2rem;
        font-size: 20px;

        & a {
            text-decoration: none;
            font-weight: bold;
            color: black;
            &::after {
                padding-top: 0.3rem;
                display:block;
                content: '';
                border-bottom: solid 5px #22333A;  
                transform: scaleX(0);  
                transition: transform 0.3s ease-in-out;
            }

            &:hover::after {
                transform: scaleX(1);
            }
        }
    }
`

export const FooterContainer = styled.div`
    padding: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    background-color: #748192;
    font-size: 18px;
    color: #EAE9EE;

    & .footer-location {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;
        font-weight: bold;

        & .map {
            border: 1px solid #9b9696;
            width: 500px;
            height: 300px;
            text-align: center;
            border-radius: 10px;
        }
    }

    & .footer-menu {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        font-size: 20px;

        & a {
            text-decoration: none;
            font-weight: bold;
            color: white;
            width: fit-content;
            transition: color 0.3s ease;

            &::after {
                padding-top: 0.3rem;
                display:block;
                content: '';
                border-bottom: solid 5px #22333A;  
                transform: scaleX(0);  
                transition: transform 0.3s ease-in-out;
            }

            &:hover::after {
                transform: scaleX(1);
            }

            &:hover {
                color: #22333A;
            }
        }
    }

    & .footer-social {
        display: flex;
        gap: 2rem;
        flex-direction: column;
        justify-content: space-between;

        & .logos {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
            justify-content: flex-start;
            text-decoration: underline;

            & span {
                font-weight: bold;
                font-size: 19px;
            }

            & div {
                display: flex;
                align-items: center;
                gap: 0.7rem;

                & svg {
                    cursor: pointer;
                }
            }
        }

        & .email {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;

            & span {
                font-weight: bold;
                font-size: 19px;
                text-decoration: underline;
            }

            & a {
                font-weight: bold;
                text-decoration: none;
                color: #EAE9EE;
                transition: color 0.1s ease;

                &:hover {
                    color: #22333A;
                }
            }
        }
    }
`