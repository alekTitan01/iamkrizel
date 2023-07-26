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
    }
`

export const FooterContainer = styled.div`
    padding: 5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    background-color: #ccc;

    & .footer-location {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;

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
    }

    & .footer-social {
        display: flex;
        gap: 2rem;
        flex-direction: column;
    }
`