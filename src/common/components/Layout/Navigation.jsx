import React from "react";
import { NavigationContainer } from './styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return <NavigationContainer>
        <div className='nav-logo'>
            <span className='image'>Logo</span>
            <span className='name'>name</span>
        </div>
        <div className='nav-menu'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
    </NavigationContainer>;
};

export default Navigation;
