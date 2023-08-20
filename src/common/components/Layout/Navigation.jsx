import React from "react";
import { NavigationContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {

    const navigate = useNavigate()

    return <NavigationContainer>
        <div className='nav-logo'>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/iamkrizel')} className='image'>Logo</span>
        </div>
        <div className='nav-menu'>
            <Link to='/iamkrizel'>Home</Link>
            <Link to='/iamkrizel/about'>About</Link>
            <Link to='/iamkrizel/services'>Services</Link>
            <Link to='/iamkrizel/portfolio'>Portfolio</Link>
            <HashLink smooth to='#footer'>Contacts</HashLink>
        </div>
    </NavigationContainer>;
};

export default Navigation;
