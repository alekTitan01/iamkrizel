import React from "react";
import { FooterContainer } from './styles';

const Footer = () => {
    return <FooterContainer>
        <div className='footer-location'>
            <span className='map'>maps</span>
            <span>address</span>
        </div>
        <div className='footer-menu'>
            <span>Home</span>
            <span>About me</span>
            <span>Services</span>
            <span>Portfolio</span>
            <span>Contacts</span>
        </div>
        <div className='footer-social'>
            <div>Social Media</div>
            <div>Contacts and Emails</div>
        </div>
    </FooterContainer>;
};

export default Footer;
