import React from "react";
import { NavigationContainer } from './styles';

const Navigation = () => {
    return <NavigationContainer>
        <div className='nav-logo'>
            <span className='image'>Logo</span>
            <span className='name'>name</span>
        </div>
        <div className='nav-menu'>
            <span>Home</span>
            <span>About me</span>
            <span>Services</span>
            <span>Portfolio</span>
            <span>Contacts</span>
        </div>
    </NavigationContainer>;
};

export default Navigation;
