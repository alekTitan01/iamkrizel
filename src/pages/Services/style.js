import styled from 'styled-components';

export const headerImageUrl = `${process.env.PUBLIC_URL}/images/about-header.jpg`

export const ServicesSection = styled.section`
    padding-top: 4rem;
    position: relative;

    & .services-header-container {
        position: relative;

        & .service-header {
        background-image: url(${headerImageUrl});
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        width: 100%;
        }

        & .bg-gradient {
            background: rgb(34,51,58);
            background: linear-gradient(158deg, rgba(34,51,58,1) 0%, rgba(116,129,146,0.1) 100%);
            position: absolute;
            height: 400px;
            width: 100%;
            z-index: 1;
            top: 0;
        }

        & .service-title {
            position: relative;
            top: -250px;
            z-index: 2;
            color: white;
            font-weight: bold;
            font-size: 3rem;
            text-align: center;
        }
    }

    
`