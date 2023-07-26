import React from "react";
import MainHeader from './sections/header';
import ProfileInfo from './sections/profileInfo';
import Services from './sections/services';
import Certificates from './sections/certificates';

const HomePage = () => {
    return <main>
        <MainHeader />
        <ProfileInfo />
        <Services />
        <Certificates />
    </main>;
};

export default HomePage;
