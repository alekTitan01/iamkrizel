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
        gap: 1rem;
        font-weight: bold;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        border-radius: 5px;
        position: relative;

        & .form {
            display: flex;
            gap: 0.6rem;
            flex-direction: column;

            & .form-name {
                display: flex;
                gap: 0.5rem;
            }

            & .inputForm {
                font-size: 16px;

                & input {
                    outline: none;
                    border-radius: 5px;
                    border: 1px solid #748192;
                    font-size: 16px;
                    padding: 0.4rem 0.5rem;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
            }

            & .message {
                display: flex;
                flex-direction: column;
                font-size: 16px;

                & textarea {
                    outline: none;
                    border-radius: 5px;
                    border: 1px solid #748192;
                    font-size: 17px;
                    padding: 0.4rem 0.5rem;
                }
            }

            & .form-action {
                width: 100%;
                display: flex;
                justify-content: flex-end;

                & button {
                    padding: 0.5rem 2rem;
                    border: none; 
                    fontWeight: bold;
                }
            }
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
            gap: 1rem;
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

export const FormErrors = styled.p`
    color: red;
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-weight: 500;
`

export const ToastMessage = styled.span`
    font-size: 16px;
    line-height: 1.2;
`