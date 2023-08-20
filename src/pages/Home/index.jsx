import React from "react";
import MainHeader from './sections/header';
import ProfileInfo from './sections/profileInfo';
import Services from './sections/services';
import Certificates from './sections/certificates';

const HomePage = () => {
    return <>
        <MainHeader />
        <ProfileInfo />
        <Services />
        <Certificates />
    </>
};

export default HomePage;
