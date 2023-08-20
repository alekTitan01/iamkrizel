import React from "react";
import Navigation from './Navigation';
import Footer from './Footer';
import { LayoutContainer } from './styles';

const index = ({ children }) => {
    return <LayoutContainer>
        <Navigation />
        <main>
            {children}
        </main>
        <Footer />
    </LayoutContainer>;
};

export default index;
