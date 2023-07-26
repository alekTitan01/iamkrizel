import React from "react";
import { NavigationContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate = useNavigate()

    return <NavigationContainer>
        <div className='nav-logo'>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className='image'>Logo</span>
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
