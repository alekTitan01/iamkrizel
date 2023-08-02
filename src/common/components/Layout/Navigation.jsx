import React from "react";
import { NavigationContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate = useNavigate()

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return <NavigationContainer>
        <div className='nav-logo'>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/iamkrizel')} className='image'>Logo</span>
        </div>
        <div className='nav-menu'>
            <Link to='/iamkrizel'>Home</Link>
            <Link to='/iamkrizel/about'>About</Link>
            <Link to='/iamkrizel/services'>Services</Link>
            <Link to='/iamkrizel/portfolio'>Portfolio</Link>
            <a href='#footer'>Contacts</a>
        </div>
    </NavigationContainer>;
};

export default Navigation;
