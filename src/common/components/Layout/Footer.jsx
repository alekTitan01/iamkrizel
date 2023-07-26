import React from "react";
import { FooterContainer } from './styles';
import { Link } from 'react-router-dom';

const Footer = () => {
    return <FooterContainer>
        <div className='footer-location'>
            <span className='map'>maps</span>
            <span>address</span>
        </div>
        <div className='footer-menu'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contacts'>Contacts</Link>
        </div>
        <div className='footer-social'>
            <div>Social Media</div>
            <div>Contacts and Emails</div>
        </div>
    </FooterContainer>;
};

export default Footer;
