import React from "react";
import Navigation from './Navigation';
import Footer from './Footer';
import { LayoutContainer } from './styles';

const index = ({ children }) => {
    return <LayoutContainer>
        <Navigation />
        {children}
        <Footer />
    </LayoutContainer>;
};

export default index;
